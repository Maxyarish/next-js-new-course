import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import createError from "http-errors";
import CONSTANTS from "../constants";
import User from "../Models/User";
import Post from "../Models/Post";

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const rowAuthorization = req.headers.authorization;
    const token = rowAuthorization?.replace("Bearer", "").trim();
    if (!token) {
      throw next(createError(401, "Token required"));
    }

    const decoded = jwt.verify(token, CONSTANTS.JWT_SECRET) as JwtPayload;
    const user = await User.findById(decoded.id);
    if (!user) {
      throw createError(401, "User not found");
    }

    (req as any).user = user;
    next();
  } catch (error) {
    console.log("auth error ", error);
    next(createError(401, "unauthorizated"));
  }
};

export const isAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if ((req as any).user?.role === "admin") {
    return next();
  }
  next(createError(401, "Only Admin!"));
};
export const isOwner = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const post = await Post.findById(req.params.idPost);
    const user = (req as any).user;
    
    if (!post) {
      return next(createError(404, "Post not found"));
    }
    if (!post.userId) {
      return next(createError(500, "Post has no owner"));
    }
    
    if (!user || !user._id) {
      return next(createError(401, "User not authenticated"));
    }
    
    if (
      post.userId.toString() === user._id.toString() ||
      user.role === "admin"
    ) {
      return next();
    }

    return next(createError(403, "Access denied"));
  } catch (error) {
    console.error("isOwner error", error);
    return next(createError(500, "Internal Server Error"));
  }
};