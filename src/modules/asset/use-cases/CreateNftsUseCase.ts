import ICreateNftsDto from '../dtos/ICreateNftsDto';
import INftRepository from './ports/INftRepository';

export default class CreateNftsUseCase {
  constructor(private nftRepository: INftRepository) {}

  async execute({ amount, assetId }: ICreateNftsDto) {}
}
