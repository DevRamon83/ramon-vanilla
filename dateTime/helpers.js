import { acceptOnly } from "../validators/atomicValidators.js";

const febMonth = (month, base) => {
  if (base === "zero" && month === 1) return true;
  if (base !== "zero" && month === 2) return true;
  return false;
};

export const februaryHandler = (leap, month, base, day) => {
  if (!febMonth(month, base)) {
    return { isValid: true, continue: true };
  }

  const maxFebDay = leap ? 29 : 28;

  if (day > maxFebDay) {
    return { isValid: false, why: `February cannot be > ${maxFebDay}` };
  }

  return { isValid: true, continue: false };
};

export const lengthAndFormatChecker = (value) => {
  if (value.length !== 10) {
    return { isValid: false, why: "invalid length" };
  }

  if (value[4] !== "-" || value[7] !== "-") {
    return { isValid: false, why: "invalid format" };
  }

  return { isValid: true };
};

export const charsChecker = (date) => {
  const validChars = "0-9";
  const isValidYear = acceptOnly(date[0], validChars);
  const isMonthValid = acceptOnly(date[1], validChars);
  const isValidDay = acceptOnly(date[2], validChars);
  if (!isValidYear) {
    return { isValid: false, why: "Year contains invalid chars" };
  }

  if (!isMonthValid) {
    return { isValid: false, why: "Month contains invalid chars" };
  }

  if (!isValidDay) {
    return { isValid: false, why: "Day contains invalid chars" };
  }

  return { isValid: true };
};

export const limitsChecker = (year, month, base) => {
  if (year < 0) {
    return { isValid: false, why: "Year cannot be negative" };
  }

  if (year > 9999) {
    return { isValid: false, why: "Year cannot be > 9999" };
  }

  if (month < 0) {
    return { isValid: false, why: "Month cannot be negative" };
  }

  if (month > 11 && base === "zero") {
    return { isValid: false, why: "Month cannot be > 11" };
  }

  if (month > 12) {
    return { isValid: false, why: "Month cannot be > 12" };
  }

  return { isValid: true };
};
