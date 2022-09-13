import { Router } from 'express';
import CreateAssetController from '../controllers/CreateAssetController';
import ListNftController from '../controllers/ListNftController';

const listNftController = new ListNftController();

const nftRouter = Router();

nftRouter.get('/', listNftController.handle);

export default nftRouter;
