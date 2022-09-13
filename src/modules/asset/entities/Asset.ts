import AppError from '@shared/errors/AppError';
import IAsset from './IAsset';
import { mustAttentionIn } from './validators/asset-validation';

export default class Asset {
  private _id: string;
  private _name: string;
  private _description: string;
  private _imageUrl: string;
  private _tokenIpfs: string;

  private constructor(name: string, description: string, imageUrl: string) {
    this._name = name;
    this._description = description;
    this._imageUrl = `/static/files/${imageUrl}`;
  }

  public static create(
    name: string,
    description: string,
    imageUrl: string,
  ): Asset {
    const attentionPoint = mustAttentionIn(name, description, imageUrl);

    if (attentionPoint) throw new AppError(attentionPoint);

    return new Asset(name, description, imageUrl);
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get imageUrl(): string {
    return this._imageUrl;
  }
}
