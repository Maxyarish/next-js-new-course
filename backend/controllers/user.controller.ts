import createError from "http-errors";
import jwt from "jsonwebtoken";
import User from "../Models/User";

import { Request, Response, NextFunction } from "express";
import bcrypt from "bcryptjs";
import CONSTANTS from "../constants";

const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, password, role } = req.body;
    const exists = await User.findOne({ email });
    if (exists) {
      throw createError(409, "Email already registered");
    }
    const hash: string = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      role,
      password: hash,
    });

    res.status(201).send({ data: user });
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      throw createError(404, "invalid data");
    }
    const match: boolean = await bcrypt.compare(password, user.password);
    if (!match) {
      throw createError(404, "invalid data");
    }

    const token: string = jwt.sign(
      { id: user._id, role: user.role },
      CONSTANTS.JWT_SECRET,
      { expiresIn: "7d" }
    );
    res.status(200).send({ data: { user, token } });
  } catch (error) {
    next(error);
  }
};
const getAccount = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).send({ data: (req as any).user });
  } catch (error) {
    next(error);
  }
};
const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await User.find();
    res.status(200).send({ data: users });
  } catch (error) {
    next(error);
  }
};

export { registerUser, loginUser, getAccount, getAllUsers };
