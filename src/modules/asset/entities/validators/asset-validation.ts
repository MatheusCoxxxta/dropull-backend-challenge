import constants from '@modules/asset/constants';

const MIN_NAME_LENGTH = 1;
const MIN_DESCRIPTION_LENGTH = 1;

function hasMinNameLengthRequired(name: string): boolean {
  if (name.length < MIN_NAME_LENGTH) return false;

  return true;
}

function hasMinDescriptionRequired(description: string): boolean {
  if (description.length < MIN_DESCRIPTION_LENGTH) return false;

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
