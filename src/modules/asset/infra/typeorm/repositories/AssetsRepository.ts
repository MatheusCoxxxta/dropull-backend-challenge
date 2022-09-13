import IStoreAssetDto from '@modules/asset/dtos/IStoreAssetDto';
import IAsset from '@modules/asset/entities/IAsset';
import IAssetsRepository from '@modules/asset/use-cases/ports/IAssetsRepository';

export default class AssetsRepository implements IAssetsRepository {
  save({
    name,
    description,
    imageUrl,
    tokenIpfs,
  }: IStoreAssetDto): Promise<IAsset> {
    throw new Error('Method not implemented.');
  }
}
