import IAssetManager from '@modules/asset/use-cases/ports/IAssetManager';

export default class PinataManager implements IAssetManager {
  pinFile(path: string): Promise<string> {
    throw new Error('Method not implemented.');
  }
}
