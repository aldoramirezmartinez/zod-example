import { login } from "@controllers/index";
import { schemaValidator } from "@middlewares/index";
import { loginSchema } from "@schemas/index";
import { Router } from "express";

const router = Router();

router.post("/login", schemaValidator(loginSchema), login);

export default router;
