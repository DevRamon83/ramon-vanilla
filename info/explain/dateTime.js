import { descStyle, funcStyle } from "../styles";

export const explainIsLeapYear = () => {
  console.info(
    "%cisLeapYear(year, info) ➡️ %creturns true if the specified year is a leap year",
    funcStyle,
    descStyle,
  );
};

export const explainIsShortMonth = () => {
  console.info(
    "🔍 %cisShortMonth(month, base, info) ➡️ %creturns true if the month has 30 days",
    funcStyle,
    descStyle,
  );
};

export const explainIsValidMonth = () => {
  console.info(
    "🔍 %cisValidMonth(month, base, info) ➡️ %creturns true if the month is within the valid range",
    funcStyle,
    descStyle,
  );
};

export const explainIsValidDate = () => {
  console.info(
    "🔍 %cisValidDate(value, base, info) ➡️ %creturns an object validating the date and specifying why if invalid",
    funcStyle,
    descStyle,
  );
};

export const explainIsValidDateTimeLocal = () => {
  console.info(
    "🔍 %cisValidDateTimeLocal(value, info) ➡️ %creturns an object validating the date and specifying why if invalid",
    funcStyle,
    descStyle,
  );
};

export const explainIsValidTime = () => {
  console.info(
    "🔍 %cisValidTime(value, info) ➡️ %creturns true if the time format is valid",
    funcStyle,
    descStyle,
  );
};
