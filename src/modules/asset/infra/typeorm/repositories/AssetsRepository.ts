import IStoreAssetDto from '@modules/asset/dtos/IStoreAssetDto';
import IAsset from '@modules/asset/entities/IAsset';
import IAssetsRepository from '@modules/asset/use-cases/ports/IAssetsRepository';
import { AppDataSource } from '@shared/infra/typeorm';
import { Repository } from 'typeorm';
import Assets from '../entities/Assets';

export default class AssetsRepository implements IAssetsRepository {
  private repository: Repository<Assets>;

  constructor() {
    this.repository = AppDataSource.getRepository(Assets);
  }

  async save({
    name,
    description,
    imageUrl,
    tokenIpfs,
  }: IStoreAssetDto): Promise<IAsset> {
    const asset = this.repository.create({
      name,
      description,
      imageUrl,
      tokenIpfs,
    });

    return this.repository.save(asset);
  }

  async listAll(): Promise<Array<IAsset>> {
    return this.repository.find({ relations: ['nfts'] });
  }

  async findById(id: string): Promise<IAsset | null> {
    return this.repository.findOne({
      where: [{ id }],
    });
  }
}
