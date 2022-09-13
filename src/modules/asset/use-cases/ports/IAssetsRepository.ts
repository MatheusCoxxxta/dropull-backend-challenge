import IStoreAssetDto from '@modules/asset/dtos/IStoreAssetDto';
import IAsset from '@modules/asset/entities/IAsset';

export default interface IAssetsRepository {
  save({
    name,
    description,
    imageUrl,
    tokenIfps,
  }: IStoreAssetDto): Promise<IAsset>;
}
