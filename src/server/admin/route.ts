import * as express from "express";
import * as PlaceRoutes from "./route/place/placeRoutes";
import * as eventRoutes from "./route/event/eventRoutes";

const router = express.Router();

router.use("/place", PlaceRoutes.routes);
router.use("/event", eventRoutes.routes);

export {router as routes}