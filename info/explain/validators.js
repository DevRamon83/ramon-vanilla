import { descStyle, funcStyle } from "../styles";

export const explainAcceptOnly = () => {
  console.info(
    "%cacceptOnly(string, setCharacters, info) ➡️ %creturns true if the string contains only the allowed characters",
    funcStyle,
    descStyle,
  );
};

export const explainAtLeastOne = () => {
  console.info(
    "%catLeastOne(string, setCharacters, info) ➡️ %creturns true if the string contains at least one character from the set",
    funcStyle,
    descStyle,
  );
};

export const explainTooShort = () => {
  console.info(
    "%ctooShort(string, num, info) ➡️ %creturns true if the string length is less than the specified number",
    funcStyle,
    descStyle,
  );
};

export const explainTooLong = () => {
  console.info(
    "%ctooLong(string, num, info) ➡️ %creturns true if the string length exceeds the specified number",
    funcStyle,
    descStyle,
  );
};

export const explainTypeChecker = () => {
  console.info(
    "%ctypeChecker(datum, type, info) ➡️ %ctrue if the datum matches the expected primitive",
    funcStyle,
    descStyle,
  );
};

export const explainIsObjValid = () => {
  console.info(
    "%cisObjValid(obj, info) ➡️ %creturns true if the object is not null and not empty",
    funcStyle,
    descStyle,
  );
};
