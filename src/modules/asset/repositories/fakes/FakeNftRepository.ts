import IStoreAssetDto from '@modules/asset/dtos/IStoreAssetDto';
import IAsset from '@modules/asset/entities/IAsset';
import INft from '@modules/asset/entities/INft';
import IAssetsRepository from '@modules/asset/use-cases/ports/IAssetsRepository';
import INftRepository from '@modules/asset/use-cases/ports/INftRepository';

export default class FakeNftRepository implements INftRepository {
  private nft: Array<INft> = [
    {
      id: 'my-id',
      token: 'my-token',
      asset: {} as IAsset,
    },
  ];

  listAll(): Promise<Array<INft>> {
    return Promise.resolve(this.nft);
  }
}
