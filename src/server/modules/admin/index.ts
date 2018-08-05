import * as express from "express";
import * as UserRoutes from './route/user/user';
import  * as authRoutes from "./route/auth/auth";

const router = express.Router();

router.use("/user", UserRoutes.routes);
router.use('/auth', authRoutes.routes);

export {router as routes}