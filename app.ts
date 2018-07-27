import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import { ApiRoutes } from "./src/api-routes";

class App {
  public app: express.Application;
  public router;

  constructor() {
    this.app = express();
    this.router = express.Router();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  routes() {
    this.app.use(ApiRoutes);

    this.app.route("/").get((req: Request, res: Response) => {
      res.send({ 'result': 'version 0.0.2' })
    });
  }
}

export default new App().app;