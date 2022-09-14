import IStoreAssetDto from '@modules/asset/dtos/IStoreAssetDto';
import IAsset from '@modules/asset/entities/IAsset';

export default interface IAssetsRepository {
  save({
    name,
    description,
    imageUrl,
    tokenIpfs,
  }: IStoreAssetDto): Promise<IAsset>;
  listAll(): Promise<Array<IAsset>>;
  findById(id: string): Promise<IAsset | null>;
}
