import { explainIsValidDateTimeLocal } from "../info/explain/dateTime";
import { isValidDate } from "./date";
import { isValidTime } from "./time";

export const isValidDateTimeLocal = (value, info) => {
  if (info) explainIsValidDateTimeLocal();
  let separator = null;
  console.log("value ", value);

  if (value.includes("T")) {
    separator = "T";
  } else if (value.includes(" ")) {
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
  let time = null;

  if (seconds) {
    time = timeString.substring(0, 5);
    seconds = timeString.substring(6, 8);
  }
  console.log("time ", time);

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
