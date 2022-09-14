import AppError from '@shared/errors/AppError';
import { mustAttentionIn } from './validators/nft-validation';

export default class Nft {
  private _assetId: string;
  private _amount: number;

  private constructor(amount: number, assetId: string) {
    this._assetId = assetId;
    this._amount = amount;
  }

  static validate(amount: number, assetId: string): Nft {
    const attentionPoint = mustAttentionIn(amount, assetId);

    if (attentionPoint) throw new AppError(attentionPoint);

    return new Nft(amount, assetId);
  }

  get assetId(): string {
    return this._assetId;
  }

  get amount(): number {
    return this._amount;
  }
}
