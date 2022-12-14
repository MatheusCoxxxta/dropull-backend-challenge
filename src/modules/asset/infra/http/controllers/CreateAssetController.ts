import CreateAssetUseCase from '@modules/asset/use-cases/CreateAssetUseCase';
import AssetManager from '@shared/container/providers/AssetManager';
import { Response } from 'express';
import AssetsRepository from '../../typeorm/repositories/AssetsRepository';

export default class CreateAssetController {
  async handle(request: any, response: Response): Promise<Response> {
    const useCase = new CreateAssetUseCase(
      new AssetsRepository(),
      new AssetManager(),
    );

    const { name, description } = request.body;

    const image = request.file.filename;

    const asset = await useCase.execute({
      name: name || '',
      description: description || '',
      image,
    });

    return response.json(asset);
  }
}
