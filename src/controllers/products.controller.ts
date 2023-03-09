import {
  CreateProductType,
  UpdateProductBodyType,
  UpdateProductParamsType,
  UpdateProductQueryType,
} from "@schemas/product.schema";
import { handleHttpError } from "@utils/index";
import { Request, Response } from "express";

export const createProduct = (
  req: Request<unknown, unknown, CreateProductType>,
  res: Response
) => {
  try {
    const { name, price } = req.body;
    console.log(name, price);
    res.send("created product");
  } catch (error: any) {
    handleHttpError(res, "ERROR_POST_PRODUCT", error);
  }
};

export const updateProduct = (
  req: Request<
    UpdateProductParamsType,
    unknown,
    UpdateProductBodyType,
    UpdateProductQueryType
  >,
  res: Response
) => {
  try {
    const { id } = req.params;
    const { name, price } = req.body;
    const { title } = req.query;
    console.log(id, name, price, title);
    res.send("updated product");
  } catch (error: any) {
    handleHttpError(res, "ERROR_PUT_PRODUCT", error);
  }
};
