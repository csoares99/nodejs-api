import * as express from "express";
import { save } from "../../controller/place/placeController";

const router = express.Router();

router.get("/save", save);


export {router as routes}