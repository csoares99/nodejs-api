import * as express from "express";
import { save } from "../user/actions";

const router = express.Router();

router.post('/', save);

export { router as routes }