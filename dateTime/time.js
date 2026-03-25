import { explainIsValidTime } from "../info/explain/dateTime.js";
import { acceptOnly } from "../validators.js";

export const isValidTime = (value, info) => {
  if (info) explainIsValidTime();

  if (value.length !== 5) {
    return false;
  }

  if (value[2] !== ":") {
    return false;
  }

  const time = value.split(":");
  const validChars = "0-9";
  const isValidHours = acceptOnly(time[0], validChars);
  const isValidMinutes = acceptOnly(time[1], validChars);

  if (!isValidHours) {
    return false;
  }

  if (!isValidMinutes) {
    return false;
  }

  const hours = parseInt(time[0]);
  const minutes = parseInt(time[1]);

  if (hours < 0 || hours > 23) {
    return false;
  }

  if (minutes < 0 || minutes > 59) {
    return false;
  }

  return true;
};
