import AppError from '@shared/errors/AppError';
import ICreateNftsDto from '../dtos/ICreateNftsDto';
import INft from '../entities/INft';
import Nft from '../entities/Nft';
import IAssetsRepository from './ports/IAssetsRepository';
import INftRepository from './ports/INftRepository';
import IUseCase from './ports/IUseCase';

export default class CreateNftsUseCase implements IUseCase {
  constructor(
    private nftRepository: INftRepository,
    private assetsRepository: IAssetsRepository,
  ) {}

  async execute({ amount, assetId }: ICreateNftsDto): Promise<Array<INft>> {
    const validPayload = Nft.validate(amount, assetId);

    const asset = await this.assetsRepository.findById(validPayload.assetId);

    if (!asset) throw new AppError('Asset not found!');

    let nftList: Array<INft> = [];

    for (let index = 1; index <= validPayload.amount; index++) {
      const nft = await this.nftRepository.create(validPayload.assetId);

      const storedNft = await this.nftRepository.save({
        assetId: validPayload.assetId,
        token: `${asset.tokenIpfs}-${nft.id}`,
      });

      nftList = [...nftList, storedNft];
    }

    return nftList;
  }
}
