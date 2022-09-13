import IAsset from './IAsset';

export default interface INft {
  id: string;
  token: string;
  asset: IAsset;
}
