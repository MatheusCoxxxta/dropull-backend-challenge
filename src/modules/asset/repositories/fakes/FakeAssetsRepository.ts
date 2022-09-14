import IStoreAssetDto from '@modules/asset/dtos/IStoreAssetDto';
import IAsset from '@modules/asset/entities/IAsset';
import IAssetsRepository from '@modules/asset/use-cases/ports/IAssetsRepository';

export default class FakeAssetsRepository implements IAssetsRepository {
  private asset: IAsset[] = [
    {
      id: 'my-asset-id',
      name: 'My Asset',
      description: 'My Description',
      imageUrl: 'www.image.com',
      tokenIpfs: 'mytokenIpfs',
    },
  ];

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

  findById(id: string): Promise<IAsset | null> {
    const foundAsset = this.asset.find((asset) => asset.id === id);

    return Promise.resolve(foundAsset || null);
  }
}
