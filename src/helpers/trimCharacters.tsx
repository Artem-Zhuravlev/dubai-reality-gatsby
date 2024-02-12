/**
 * Removes all characters except letters (both lowercase and uppercase) and digits from a string.
 * @param {string} value - The string from which to remove characters.
 * @returns {string} The modified string with only letters and digits.
 */

export const trimCharacters = (value: string): string => {
  return value.replace(/[^a-zA-Z0-9]/g, '');
}