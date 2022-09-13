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
  if (!hasMinNameLengthRequired(name)) return 'Name is too short!';

  if (!hasMinDescriptionRequired(description))
    return 'Description is too short!';

  if (!hasImageUrl(imageUrl)) return 'Image URL is required';
}
