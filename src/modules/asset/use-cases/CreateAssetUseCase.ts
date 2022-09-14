import AppError from '@shared/errors/AppError';
import errorHandler from '@shared/errors/ErrorHandler';
import ICreateAssetDto from '../dtos/ICreateAssetDto';
import Asset from '../entities/Asset';
import IAsset from '../entities/IAsset';
import IUseCase from './ports/IUseCase';
import IAssetManager from './ports/IAssetManager';
import IAssetsRepository from './ports/IAssetsRepository';

interface ICreateAssetUseCaseResponse {
  tokenIpfs: string;
  name: string;
  id: string;
}

export default class CreateAssetUseCase implements IUseCase {
  constructor(
    private assetsRepository: IAssetsRepository,
    private assetManager: IAssetManager,
  ) {}

  async execute({
    name,
    description,
    image,
  }: ICreateAssetDto): Promise<ICreateAssetUseCaseResponse> {
    const validAsset = Asset.validate(name, description, image);

    let asset: IAsset = {} as IAsset;

    try {
      const tokenIpfs = await this.assetManager.pinFile(validAsset.imageUrl);

      asset = await this.assetsRepository.save({
        name: validAsset.name,
        description: validAsset.description,
        tokenIpfs,
        imageUrl: validAsset.imageUrl,
      });
    } catch (error: any) {
      const { errorMessage } = errorHandler(error);

      throw new AppError(errorMessage);
    }

    return {
      id: asset.id,
      name: asset.name,
      tokenIpfs: asset.tokenIpfs,
    };
  }
}
