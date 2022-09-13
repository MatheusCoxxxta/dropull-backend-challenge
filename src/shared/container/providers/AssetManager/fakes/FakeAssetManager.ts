import IAssetManager from '@modules/asset/use-cases/ports/IAssetManager';

export default class FakeAssetManager implements IAssetManager {
  pinFile(path: string): Promise<string> {
    return Promise.resolve('new-token-ifps');
  }
}
