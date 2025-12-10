import { Request, Response, NextFunction } from "express";

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = err.status || 500;
  const errorMessage: string = err.message || "Internal server error";
  console.log("errorMessage -->>", errorMessage);
  res.status(status).send({ errors: [errorMessage] });
};
export default errorHandler;
