import * as express from 'express';
import { login } from './actions';

const router = express.Router();

router.post('/login', login);

export {router as routes}