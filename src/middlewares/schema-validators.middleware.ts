import { handleHttpError, handleZodError } from "@utils/index";
import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from "zod";

export const schemaValidator =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        params: req.params,
        query: req.query,
      });
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        handleZodError(res, error);
      } else {
        handleHttpError(res, "Internal Server Error", error);
      }
    }
  };
