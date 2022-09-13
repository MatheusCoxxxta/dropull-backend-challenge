import { Router } from 'express';
import CreateAssetController from '../controllers/CreateAssetController';
import { Joi, Segments, celebrate } from 'celebrate';

const createAssetController = new CreateAssetController();

const assetsRouter = Router();

assetsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      description: Joi.string().required(),
    },
  }),
  createAssetController.handle,
);

export default assetsRouter;
