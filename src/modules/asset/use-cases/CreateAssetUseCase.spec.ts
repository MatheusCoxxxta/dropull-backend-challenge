import CreateAssetUseCase from './CreateAssetUseCase';

let createAssetUseCase: CreateAssetUseCase;

describe('CreateAssetUseCase', () => {
  beforeEach(() => {
    createAssetUseCase = new CreateAssetUseCase();
  });

  it('should break due to validation: name');

  it('should break due to validation: description');

  it('should break due to validation: image');

  it('should successfully create an asset');
});
