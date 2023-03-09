import express from "express";
import cors from "cors";
import morgan from "morgan";
import { port } from "./config";
import { authRoutes, productsRoutes } from "routes";

const app = express();

app.set("port", port);

app.use(cors());

app.use(morgan("dev"));

app.use(express.json());

app.use("/api", authRoutes);

app.use("/api", productsRoutes);

export default app;
