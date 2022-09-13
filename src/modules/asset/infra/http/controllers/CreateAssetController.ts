import CreateAssetUseCase from '@modules/asset/use-cases/CreateAssetUseCase';
import IAssetManager from '@modules/asset/use-cases/ports/IAssetManager';
import IAssetsRepository from '@modules/asset/use-cases/ports/IAssetsRepository';
import AssetManager from '@shared/container/providers/AssetManager';
import { Request, Response } from 'express';
import AssetsRepository from '../../typeorm/repositories/AssetsRepository';

export default class CreateAssetController {
  private assetManager: IAssetManager;
  private assetsRepository: IAssetsRepository;

  constructor() {
    this.assetsRepository = new AssetsRepository();
    this.assetManager = new AssetManager();
  }

  /**
   * TO DO:
   * Define IRequest interface concating Request from Express + files
   * Use Tsyringe for Dependency Injection instead of scratch injection
   */

  async handle(request: any, response: Response): Promise<Response> {
    const useCase = new CreateAssetUseCase(
      this.assetsRepository,
      this.assetManager,
    );

    const { name, description } = request.body;

    const image = request.files[0].location;

    const asset = await useCase.execute({
      name: name || '',
      description: description || '',
      image,
    });

    return response.json(asset);
  }
}
