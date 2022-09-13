import INft from '../entities/INft';
import INftRepository from './ports/INftRepository';
import IUseCase from './ports/IUseCase';

export default class ListNftUseCase implements IUseCase {
  constructor(private nftRepository: INftRepository) {}

  async execute(): Promise<Array<INft>> {
    return this.nftRepository.listAll();
  }
}
