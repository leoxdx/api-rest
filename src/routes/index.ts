import { Router } from "express";

import { productsRoutes } from "./products-routes";
import exp from "constants";

const routes = Router()

routes.use("/products", productsRoutes)
// routes.use("/users", productsRoutes)

export { routes }