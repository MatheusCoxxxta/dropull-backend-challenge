function hasMinAmountRequired(amount: number): boolean {
  if (amount < 1) return false;

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
  if (!hasMinAmountRequired(amount)) return 'Amount must be 1 or higher!';

  if (!hasAssetId(assetId)) return 'AssetId is required!';
}
