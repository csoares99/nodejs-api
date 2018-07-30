import * as express from "express";
import { save } from "../../controller/user/userController";

const router = express.Router();

router.post('/', save);

export { router as routes }