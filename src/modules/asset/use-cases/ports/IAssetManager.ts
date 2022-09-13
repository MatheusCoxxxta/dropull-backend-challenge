export default interface IAssetManager {
  pinFile(path: string): Promise<string>;
}
