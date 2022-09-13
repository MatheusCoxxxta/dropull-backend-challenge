import assetsRouter from '@modules/asset/infra/http/routes/asset.routes';
import { Router } from 'express';

const router = Router();

router.use('/asset', assetsRouter);
