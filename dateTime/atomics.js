import {
  explainIsLeapYear,
  explainIsShortMonth,
  explainIsValidMonth,
} from "../info/explain/dateTime,js";

export const isLeapYear = (year, info) => {
  if (info) explainIsLeapYear();
  const normalizeYear = parseInt(year);

  return (
    normalizeYear % 400 === 0 ||
    (normalizeYear % 4 === 0 && normalizeYear % 100 !== 0)
  );
};

export const isShortMonth = (month, base, info) => {
  if (info) explainIsShortMonth();
  const normalizeMonth = parseInt(month);
  if (base === "zero") {
    const shortMonths = [3, 5, 8, 10];
    return shortMonths.includes(normalizeMonth);
  }
  return (
    normalizeMonth === 4 ||
    normalizeMonth === 6 ||
    normalizeMonth === 9 ||
    normalizeMonth === 11
  );
};

export const isValidMonth = (month, base, info) => {
  if (info) explainIsValidMonth();
  const normalizeMonth = parseInt(month);
  if (base === "zero") {
    return normalizeMonth >= 0 && normalizeMonth < 12;
  }

  return normalizeMonth >= 0 && normalizeMonth < 13;
};
