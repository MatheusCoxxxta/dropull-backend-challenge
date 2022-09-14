import ListAssetsUseCase from './ListAssetsUseCase';
import IAssetsRepository from './ports/IAssetsRepository';
import FakeAssetRepository from '../repositories/fakes/FakeAssetsRepository';

let listAssetsUseCase: ListAssetsUseCase;
let assetsRepository: IAssetsRepository;

describe('ListAssetsUseCase', () => {
  beforeEach(() => {
    assetsRepository = new FakeAssetRepository();
    listAssetsUseCase = new ListAssetsUseCase(assetsRepository);
  });

  it('should list all registered assets', async () => {
    const assets = await listAssetsUseCase.execute();

    expect(Array.isArray(assets)).toBe(true);
  });
});
