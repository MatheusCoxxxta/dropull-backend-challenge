import IStoreAssetDto from '@modules/asset/dtos/IStoreAssetDto';
import IStoreNftDto from '@modules/asset/dtos/IStoreNftDto';
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

  create(assetId: string): Promise<INft> {
    const nft = {
      id: 'my-id',
      token: 'my-token',
      asset: {
        id: assetId,
        name: 'My Asset',
        description: 'My Description',
        imageUrl: 'https://picsum.photos/200/300',
        tokenIpfs: 'my-tokenIpfs',
      },
    };

    return Promise.resolve(nft);
  }

  save({ assetId, token }: IStoreNftDto): Promise<INft> {
    const nft = {
      id: 'my-id',
      token,
      asset: {
        id: assetId,
        name: 'My Asset',
        description: 'My Description',
        imageUrl: 'https://picsum.photos/200/300',
        tokenIpfs: 'my-tokenIpfs',
      },
    };

    this.nft.push(nft);

    return Promise.resolve(nft);
  }
}
