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
});
