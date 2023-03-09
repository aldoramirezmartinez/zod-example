import { handleHttpError } from "@utils/index";
import { Request, Response } from "express";

export const login = (req: Request, res: Response) => {
  try {
    console.log(req.body);
    res.send("user logged in");
  } catch (error) {
    handleHttpError(res, "ERROR_AUTH_LOGIN", error);
  }
};
