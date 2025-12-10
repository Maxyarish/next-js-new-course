import express from "express";
import { auth, isAdmin, isOwner } from "../middlewares/auth.mw";
import { validate } from "../middlewares/validate.mw";
import { createPostSchema } from "../validators/post.validator";
import {
  createPost,
  getAllPosts,
  deletePost,
} from "../controllers/post.controller";

const router = express.Router();

router.post("/", auth, validate(createPostSchema), createPost);
router.get("/", auth, isAdmin, getAllPosts);
router.delete("/:idPost", auth, isOwner, deletePost);

export default router;
