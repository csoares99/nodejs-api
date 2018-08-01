import * as Express from "express";
import * as AdminRoutes from "./server/modules/admin/index";

const router = Express.Router();

router.use("/admin", AdminRoutes.routes);

export {router as ApiRoutes}

