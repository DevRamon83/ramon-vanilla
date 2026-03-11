import { isLeapYear, isShortMonth } from "./atomics";
import {
  charsChecker,
  februaryHandler,
  lengthAndFormatChecker,
  limitsChecker,
} from "./helpers";

export const isValidDate = (value, base, dev) => {
  const formalCheck = lengthAndFormatChecker(value);
  if (!formalCheck.isValid) return { isValid: false, why: formalCheck.why };

  const date = value.split("-");

  const validChars = charsChecker(date);

  if (!validChars.isValid) return { isValid: false, why: validChars.why };

  const year = parseInt(date[0]);
  const month = parseInt(date[1]);
  const day = parseInt(date[2]);

  const validLimits = limitsChecker(year, month, base);
  if (!validLimits.isValid) return { isValid: false, why: validLimits.why };

  const leap = isLeapYear(year);

  const febCheck = februaryHandler(leap, month, base, day);

  if (!febCheck.isValid) {
    return { isValid: false, why: febCheck.why };
  }

  if (febCheck.isValid && !febCheck.continue) {
    return { isValid: true };
  }

  const shortMonth = isShortMonth(month, base);
  const maxDay = shortMonth ? 30 : 31;

  if (day > maxDay) {
    return { isValid: false, why: `Day cannot be > ${maxDay}` };
  }
  return { isValid: true };
};
