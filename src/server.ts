import express, { json } from "express";
import { categoriesRoutes, specificationsRoutes } from "./routes";

const app = express();

app.use(json());

app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationsRoutes);

app.listen(3333, () => console.log("Server is running! 🚀"));
