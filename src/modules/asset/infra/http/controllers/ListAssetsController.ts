import ListAssetsUseCase from '@modules/asset/use-cases/ListAssetsUseCase';
import { Request, Response } from 'express';
import AssetsRepository from '../../typeorm/repositories/AssetsRepository';

export default class ListAssetsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const useCase = new ListAssetsUseCase(new AssetsRepository());

    const assets = await useCase.execute();

    return response.json(assets);
  }
}
