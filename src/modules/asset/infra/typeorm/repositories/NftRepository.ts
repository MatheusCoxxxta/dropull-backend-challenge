import INft from '@modules/asset/entities/INft';
import INftRepository from '@modules/asset/use-cases/ports/INftRepository';
import { AppDataSource } from '@shared/infra/typeorm';
import { Repository } from 'typeorm';
import Nft from '../entities/Nft';

export default class NftRepository implements INftRepository {
  private repository: Repository<Nft>;

  constructor() {
    this.repository = AppDataSource.getRepository(Nft);
  }

  async listAll(): Promise<Array<INft>> {
    return this.repository.find({ relations: ['asset'] });
  }
}
