import { Response } from "express";

export const handleHttpError = (
  res: Response,
  error: string,
  errorRaw?: any
) => {
  console.log(errorRaw.message);
  res.status(500).send({ error });
};
