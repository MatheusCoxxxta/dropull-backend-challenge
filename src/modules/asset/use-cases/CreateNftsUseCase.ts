import ICreateNftsDto from '../dtos/ICreateNftsDto';
import INft from '../entities/INft';
import Nft from '../entities/Nft';
import INftRepository from './ports/INftRepository';
import IUseCase from './ports/IUseCase';

export default class CreateNftsUseCase implements IUseCase {
  constructor(private nftRepository: INftRepository) {}

  async execute({ amount, assetId }: ICreateNftsDto): Promise<Array<INft>> {
    const validPayload = Nft.validate(amount, assetId);

    let nftList: Array<INft> = [];

    for (let index = 1; index <= validPayload.amount; index++) {
      const storedNft = await this.nftRepository.save(validPayload.assetId);

      nftList = [...nftList, storedNft];
    }

    return nftList;
  }
}
