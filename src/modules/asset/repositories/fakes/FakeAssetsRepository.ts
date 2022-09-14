import IStoreAssetDto from '@modules/asset/dtos/IStoreAssetDto';
import IAsset from '@modules/asset/entities/IAsset';
import IAssetsRepository from '@modules/asset/use-cases/ports/IAssetsRepository';

export default class FakeAssetsRepository implements IAssetsRepository {
  private asset: IAsset[] = [];

  save({
    name,
    description,
    imageUrl,
    tokenIpfs,
  }: IStoreAssetDto): Promise<IAsset> {
    const asset = {
      id: 'randon-id',
      name,
      description,
      imageUrl,
      tokenIpfs,
    };

    this.asset.push(asset);

    return Promise.resolve(asset);
  }

  listAll(): Promise<IAsset[]> {
    return Promise.resolve(this.asset);
  }

  findById(id: string): Promise<IAsset> {
    return Promise.resolve(this.asset[0]);
  }
}
