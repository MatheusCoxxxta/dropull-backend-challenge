import nftRouter from '@modules/nft/infra/http/routes/nft.routes';
import { Router } from 'express';

const router = Router();

router.use('/nft', nftRouter);
