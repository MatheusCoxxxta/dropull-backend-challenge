import constants from '@modules/asset/constants';

function hasMinNameLengthRequired(name: string): boolean {
  if (name.length < 1) return false;

  return true;
}

function hasMinDescriptionRequired(description: string): boolean {
  if (description.length < 1) return false;

  return true;
}

function hasImageUrl(imageUrl: string): boolean {
  if (!imageUrl) return false;

  return true;
}

export function mustAttentionIn(
  name: string,
  description: string,
  imageUrl: string,
): string | void {
  if (!hasMinNameLengthRequired(name)) return constants.NAME_SHORT_WARNING;

  if (!hasMinDescriptionRequired(description))
    return constants.DESCRIPTION_SHORT_WARNING;

  if (!hasImageUrl(imageUrl)) return constants.IMAGE_REQUIRED_WARNING;
}
