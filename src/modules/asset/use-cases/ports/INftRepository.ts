import IStoreNftDto from '@modules/asset/dtos/IStoreNftDto';
import INft from '@modules/asset/entities/INft';

export default interface INftRepository {
  listAll(): Promise<Array<INft>>;
  create(assetId: string): Promise<INft>;
  save({ assetId, token }: IStoreNftDto): Promise<INft>;
}
