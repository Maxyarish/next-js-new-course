import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";
import createError from "http-errors";

export const validate =
  (schema: ZodSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
     req.body =await schema.parseAsync(req.body);
      next();
    } catch (error: any) {
      console.log("validate mw error -->>", error);
      next(createError(400, error.message || "Validation failed"));
    }
  };
