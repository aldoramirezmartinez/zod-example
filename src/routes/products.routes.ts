import { createProduct, updateProduct } from "@controllers/index";
import { schemaValidator } from "@middlewares/index";
import { CreateProductSchema, UpdateProductSchema } from "@schemas/index";
import { Router } from "express";

const router = Router();

router.post("/products", schemaValidator(CreateProductSchema), createProduct);
router.put(
  "/products/:id",
  schemaValidator(UpdateProductSchema),
  updateProduct
);

export default router;
