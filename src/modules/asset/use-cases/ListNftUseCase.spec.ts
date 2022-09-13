import FakeNftRepository from '../repositories/fakes/FakeNftRepository';
import ListNftUseCase from './ListNftUseCase';
import INftRepository from './ports/INftRepository';
import IUseCase from './ports/IUseCase';

let nftRepository: INftRepository;
let listNftUseCase: ListNftUseCase;

describe('ListNftUseCase', () => {
  beforeEach(() => {
    nftRepository = new FakeNftRepository();
    listNftUseCase = new ListNftUseCase(nftRepository);
  });

  it('should correctly list NFTs with assets', async () => {
    const nfts = await listNftUseCase.execute();

    expect(Array.isArray(nfts)).toBe(true);
    expect(nfts[0]).toHaveProperty('asset');
  });
});
