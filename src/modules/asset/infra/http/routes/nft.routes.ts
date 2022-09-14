import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import CreateAssetController from '../controllers/CreateAssetController';
import CreateNftsController from '../controllers/CreateNftsController';
import ListNftController from '../controllers/ListNftController';

const listNftController = new ListNftController();
const createNftsController = new CreateNftsController();

const nftRouter = Router();

nftRouter.get('/', listNftController.handle);

nftRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      amount: Joi.number().required(),
      assetId: Joi.string().required(),
    },
  }),
  createNftsController.handle,
);

export default nftRouter;
