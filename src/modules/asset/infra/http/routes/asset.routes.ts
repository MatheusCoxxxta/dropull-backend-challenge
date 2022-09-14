import { Router } from 'express';
import { Joi, Segments, celebrate } from 'celebrate';
import CreateAssetController from '../controllers/CreateAssetController';
import { imageUpload } from '../config/multer';
import ListAssetsController from '../controllers/ListAssetsController';

const createAssetController = new CreateAssetController();
const listAssetsController = new ListAssetsController();

const assetsRouter = Router();

assetsRouter.post(
  '/',
  imageUpload.single('image'),
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      description: Joi.string().required(),
    },
  }),
  createAssetController.handle,
);

assetsRouter.get('/', listAssetsController.handle);

export default assetsRouter;
