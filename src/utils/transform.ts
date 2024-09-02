import { BetType, IToBet } from "@interfaces/index";

/**
 * Pads a number with leading zeros based on the length provided.
 * 
 * @param value - The number to be padded.
 * @param length - The desired length of the output string.
 * @returns The value as a string, padded with leading zeros.
 */
export const padNumber = (value: number, length: number): string => {
  return value.toString().padStart(length, '0');
};

/**
 * Converts a value to a string based on the bet type.
 * 
 * @param value - The value to be converted.
 * @param betType - The type of bet.
 * @returns The value as a formatted string based on the bet type.
 */
export const toBet = ({ value, betType }: IToBet): string => {
  switch (betType) {
    case 'Triple':
    case 'Infinito':
      return padNumber(value === 1000 ? 0 : value, 3);
    case 'Terminal':
      return padNumber(value, 2);
    case 'Raffle':
      return padNumber(value > 999 ? 0 : value, 3);
    default:
      return String(value);
  }
};

/**
 * Converts a value to a full format bet based on bet type.
 * 
 * @param value - The value to be converted.
 * @returns The value as a formatted string based on the bet type.
 */
export const setBet = (value: number): BetType => {
  switch (value) {
    case 0:
      return 'Infinito'
    case 12:
      return 'Raffle'
    case 100:
      return 'Terminal'
    case 1000:
      return 'Triple'
    default:
      return 'Raffle'
  }
}