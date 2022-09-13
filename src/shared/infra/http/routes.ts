import assetsRouter from '@modules/asset/infra/http/routes/asset.routes';
import nftRouter from '@modules/asset/infra/http/routes/nft.routes';
import { Router } from 'express';

const router = Router();

router.use('/assets', assetsRouter);
router.use('/nft', nftRouter);

export default router;
