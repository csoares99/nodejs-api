import * as express from "express";
import * as UserRoutes from './route/user/user';

const router = express.Router();

router.use("/user", UserRoutes.routes);

export {router as routes}