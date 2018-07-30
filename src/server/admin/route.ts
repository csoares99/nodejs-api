import * as express from "express";
import * as PlaceRoutes from "./route/place/placeRoutes";
import * as eventRoutes from "./route/event/eventRoutes";
import * as UserRoutes from './route/user/user';

const router = express.Router();

router.use("/place", PlaceRoutes.routes);
router.use("/event", eventRoutes.routes);

router.use("/user", UserRoutes.routes);

export {router as routes}