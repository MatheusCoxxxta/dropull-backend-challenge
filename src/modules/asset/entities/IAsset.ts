import INft from './INft';

export default interface IAsset {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  tokenIpfs: string;

  nfts?: Array<INft>;
}
