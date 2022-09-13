import ListNftUseCase from './ListNftUseCase';
import IUseCase from './ports/IUseCase';

let listNftUseCase: ListNftUseCase;

describe('ListNftUseCase', () => {
  beforeEach(() => {
    listNftUseCase = new ListNftUseCase();
  });
});
