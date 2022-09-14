import FakeAssetsRepository from '../repositories/fakes/FakeAssetsRepository';
import FakeNftRepository from '../repositories/fakes/FakeNftRepository';
import CreateNftsUseCase from './CreateNftsUseCase';
import IAssetsRepository from './ports/IAssetsRepository';
import INftRepository from './ports/INftRepository';

let nftRepository: INftRepository;
let assetsRepository: IAssetsRepository;
let createNftsUseCase: CreateNftsUseCase;

describe('CreateNftsUseCase', () => {
  beforeEach(() => {
    nftRepository = new FakeNftRepository();
    assetsRepository = new FakeAssetsRepository();
    createNftsUseCase = new CreateNftsUseCase(nftRepository, assetsRepository);
  });

  it('should break due validation: amount', async () => {
    try {
      await createNftsUseCase.execute({
        amount: 0,
        assetId: 'my-asset-id',
      });
    } catch (error: any) {
      expect(error.message).toBe('Amount must be 1 or higher!');
    }
  });

  it('should break due validation: assetId', async () => {
    try {
      await createNftsUseCase.execute({
        amount: 1,
        assetId: '',
      });
    } catch (error: any) {
      expect(error.message).toBe('AssetId is required!');
    }
  });

  it('should successfully create 1 NFT', async () => {
    const asset = await createNftsUseCase.execute({
      amount: 1,
      assetId: 'my-asset-id',
    });

    expect(asset).toHaveLength(1);
  });

  it('should successfully create 3 NFT', async () => {
    const asset = await createNftsUseCase.execute({
      amount: 3,
      assetId: 'my-asset-id',
    });

    expect(asset).toHaveLength(3);
  });
});
