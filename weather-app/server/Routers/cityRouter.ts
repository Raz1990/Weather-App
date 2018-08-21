import * as express from 'express';
import * as cityController from './../Controllers/cityController';

const cityRouter = express.Router();

cityRouter.get('/', cityController.getAllCities);

export default cityRouter;
