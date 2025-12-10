import fs from "fs/promises";
import path from "path";
import Post from "../Models/Post";
import { Request, Response, NextFunction } from "express";
import  createError  from 'http-errors';

const createPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = (req as any ).user;
    if (!user || !user._id) {
      return next(createError(401, "User not authenticated"));
    }
    const post = await Post.create({
      ...req.body,
      userId:user._id
    });
    console.log(post);
    
    res.status(201).send({ data: post });
  } catch (error) {
    next(error);
  }
};
const getAllPosts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    console.log(posts);
    res.status(200).send({ data: posts });
  } catch (error) {
    next(error);
  }
};
const deletePost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { idPost } = req.params;
    const post = await Post.findByIdAndDelete(idPost);
    if (!post) {
      return next(createError(404, "Post not found"));
    }
    res.status(200).send({ data: post });
  } catch (error) {
    next(error);
  }
};
export { createPost, getAllPosts, deletePost };
