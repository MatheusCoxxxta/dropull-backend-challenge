import INft from '@modules/asset/entities/INft';

export default interface INftRepository {
  listAll(): Promise<Array<INft>>;
  save(assetId: string): Promise<INft>;
}
