import { param, paramExplained } from "../info/commons.js";
import { explainIsValidDateTimeLocal } from "../info/explain/dateTime.js";
import { explainDateReturn } from "../info/returns/dateReturns.js";
import { baseText, strictDateLocal } from "../info/texts.js";
import { isValidDate } from "./date.js";
import { isValidTime } from "./time.js";

const consoleHandler = () => {
  console.group("🔍 Details: isValidDate");
  explainIsValidDateTimeLocal();
  param("value", "string");
  param("strict", "boolean");
  paramExplained(strictDateLocal);
  param("base", `"zero" || any`);
  paramExplained(baseText);
  explainDateReturn();
  console.groupEnd();
};

export const isValidDateTimeLocal = (value, strict, info) => {
  if (info) consoleHandler();
  let separator = null;

  if (value.includes("T")) {
    separator = "T";
  } else if (value.includes(" ") && !strict) {
    separator = " ";
  }

  if (!separator) return { isValid: false, why: "invalid format" };

  const length = value.length;
  let seconds = null;

  if (length === 16) {
    seconds = false;
  } else if (length === 19) {
    seconds = true;
  } else {
    return { isValid: false, why: "invalid format" };
  }

  if (value[10] !== separator) return { isValid: false, why: "invalid format" };

  const elements = value.split(separator);
  const date = elements[0];
  const validDate = isValidDate(date, "iso");
  if (!validDate.isValid) return { isValid: false, why: validDate.why };

  const timeString = elements[1];
  let time = timeString.substring(0, 5);

  if (seconds) {
    seconds = timeString.substring(6, 8);
  }

  let invalidSeconds = null;

  if (seconds) {
    const normalizeSec = parseInt(seconds);
    invalidSeconds = normalizeSec < 0 || normalizeSec > 59;
  }

  if (invalidSeconds)
    return { isValid: false, why: "Invalid format for seconds" };

  const validTime = isValidTime(time);

  if (!validTime) return { isValid: false, why: "Invalid format for time" };

  return { isValid: true };
};
