import constants from '@modules/asset/constants';

const MIN_AMOUNT = 1;

function hasMinAmountRequired(amount: number): boolean {
  if (amount < MIN_AMOUNT) return false;

  return true;
}

function hasAssetId(assetId: string): boolean {
  if (!assetId) return false;

  return true;
}

export function mustAttentionIn(
  amount: number,
  assetId: string,
): string | void {
  if (!hasMinAmountRequired(amount)) return constants.AMOUNT_REQUIRED_WARNING;

  if (!hasAssetId(assetId)) return constants.ASSETID_REQUIRED_WARNING;
}
