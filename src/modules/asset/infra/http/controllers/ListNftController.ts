import ListNftUseCase from '@modules/asset/use-cases/ListNftUseCase';
import { Request, Response } from 'express';
import NftRepository from '../../typeorm/repositories/NftRepository';

export default class ListNftController {
  /**
   * TO DO:
   * Use Tsyringe for Dependency Injection instead of scratch injection
   */

  async handle(request: Request, response: Response): Promise<Response> {
    const useCase = new ListNftUseCase(new NftRepository());

    const nfts = await useCase.execute();

    return response.json(nfts);
  }
}
