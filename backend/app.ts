import express from "express";
import errorHandler from "./errorHandler";
import userRouter from "./routes/user.routes";
import postRouter from "./routes/post.router";

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/posts",postRouter)
app.use(errorHandler);

export default app;
