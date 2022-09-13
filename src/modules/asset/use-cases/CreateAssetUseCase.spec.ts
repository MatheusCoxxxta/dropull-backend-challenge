import CreateAssetUseCase from './CreateAssetUseCase';

let createAssetUseCase: CreateAssetUseCase;

describe('CreateAssetUseCase', () => {
  beforeEach(() => {
    createAssetUseCase = new CreateAssetUseCase();
  });

  it('should break due to validation: name', async () => {
    expect(
      await createAssetUseCase.execute({
        name: '',
        description: 'Description here',
        imageUrl: 'https://picsum.photos/200/300',
      }),
    ).toThrow('Name required');
  });

  it('should break due to validation: description');

  it('should break due to validation: image');

  it('should successfully create an asset');
});
