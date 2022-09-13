import CreateAssetUseCase from './CreateAssetUseCase';

let createAssetUseCase: CreateAssetUseCase;

describe('CreateAssetUseCase', () => {
  beforeEach(() => {
    createAssetUseCase = new CreateAssetUseCase();
  });

  it('should break due to validation: name', async () => {
    try {
      await createAssetUseCase.execute({
        name: '',
        description: 'Description here',
        imageUrl: 'https://picsum.photos/200/300',
      });
    } catch (error: any) {
      expect(error.message).toBe('Name is too short!');
    }
  });

  it('should break due to validation: description');

  it('should break due to validation: image');

  it('should successfully create an asset');
});
