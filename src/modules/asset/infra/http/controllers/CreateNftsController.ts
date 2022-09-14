import CreateAssetUseCase from '@modules/asset/use-cases/CreateAssetUseCase';
import CreateNftsUseCase from '@modules/asset/use-cases/CreateNftsUseCase';
import AssetManager from '@shared/container/providers/AssetManager';
import { Request, Response } from 'express';
import AssetsRepository from '../../typeorm/repositories/AssetsRepository';
import NftRepository from '../../typeorm/repositories/NftRepository';

export default class CreateNftsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const useCase = new CreateNftsUseCase(
      new NftRepository(),
      new AssetsRepository(),
    );

    const { amount, assetId } = request.body;

    const asset = await useCase.execute({
      amount: amount ? Number(amount) : 0,
      assetId: assetId || '',
    });

    return response.json(asset);
  }
}
