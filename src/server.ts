import express from "express";

import { specificationsRoutes } from "./routes/specification.routes";
import { categoriesRoutes } from "./routes/categories.routes";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);

app.use("/specifications", specificationsRoutes);

// eslint-disable-next-line no-console
app.listen(3333, () => console.log("Server is running!"));
