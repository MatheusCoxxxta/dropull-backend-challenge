import FakeAssetManager from '@shared/container/providers/AssetManager/fakes/FakeAssetManager';
import FakeAssetRepository from '../repositories/fakes/FakeAssetsRepository';
import CreateAssetUseCase from './CreateAssetUseCase';
import IAssetManager from './ports/IAssetManager';
import IAssetsRepository from './ports/IAssetsRepository';

let createAssetUseCase: CreateAssetUseCase;
let assetsRepository: IAssetsRepository;
let assetManager: IAssetManager;

describe('CreateAssetUseCase', () => {
  beforeEach(() => {
    assetManager = new FakeAssetManager();
    assetsRepository = new FakeAssetRepository();
    createAssetUseCase = new CreateAssetUseCase(assetsRepository, assetManager);
  });

  it('should break due to validation: name', async () => {
    try {
      await createAssetUseCase.execute({
        name: '',
        description: 'Description here',
        image: 'https://picsum.photos/200/300',
      });
    } catch (error: any) {
      expect(error.message).toBe('Name is too short!');
    }
  });

  it('should break due to validation: description', async () => {
    try {
      await createAssetUseCase.execute({
        name: 'My New Asset',
        description: '',
        image: 'https://picsum.photos/200/300',
      });
    } catch (error: any) {
      expect(error.message).toBe('Description is too short!');
    }
  });

  it('should break due to validation: image', async () => {
    try {
      await createAssetUseCase.execute({
        name: 'My New Asset',
        description: 'Description here',
        image: '',
      });
    } catch (error: any) {
      expect(error.message).toBe('Image URL is required');
    }
  });

  it('should successfully create an asset', async () => {
    const asset = await createAssetUseCase.execute({
      name: 'My New Asset',
      description: 'Description here',
      image: 'https://picsum.photos/200/300',
    });

    expect(asset).toHaveProperty('tokenIpfs');
  });
});
