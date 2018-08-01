import * as express from "express";
import { save, getAll } from "../../controller/place/placeController";

const router = express.Router();

router.get("/save", save);
router.get("/list", getAll)


export {router as routes}