import { param, paramExplained } from "../info/commons";
import { explainIsValidDate } from "../info/explain/dateTime";
import { explainDateReturn } from "../info/returns/dateReturns";
import { baseText } from "../info/texts";
import { isLeapYear, isShortMonth } from "./atomics";
import {
  charsChecker,
  februaryHandler,
  lengthAndFormatChecker,
  limitsChecker,
} from "./helpers";

const consoleHandler = () => {
  console.group("🔍 Details: isValidDate");
  explainIsValidDate();
  param("value", "string");
  param("base", `"zero" || any`);
  paramExplained(baseText);
  explainDateReturn();
  console.groupEnd();
};

export const isValidDate = (value, base, info) => {
  if (info) consoleHandler();

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
