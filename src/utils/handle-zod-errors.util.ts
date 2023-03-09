import { Response } from "express";
import { ZodError } from "zod";

export const handleZodError = (res: Response, error: ZodError) => {
  res
    .status(400)
    .json(
      error.issues.map((issue) => ({
        path: issue.path,
        message: issue.message,
      }))
    );
};
