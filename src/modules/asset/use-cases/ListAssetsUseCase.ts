import IAsset from '../entities/IAsset';
import IAssetsRepository from './ports/IAssetsRepository';
import IUseCase from './ports/IUseCase';

export default class ListAssetsUseCase implements IUseCase {
  constructor(private assetsRepository: IAssetsRepository) {}

  async execute(): Promise<Array<IAsset>> {
    const assets = await this.assetsRepository.listAll();

    return assets;
  }
}
