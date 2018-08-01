import * as express from "express";
import { getAllEvents } from "../../controller/event/eventController";

const router = express.Router();

router.get("/", getAllEvents);


export {router as routes}