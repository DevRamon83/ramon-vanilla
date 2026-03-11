import {
  explainAcceptOnly,
  explainAtLeastOne,
  explainIsObjValid,
  explainTooLong,
  explainTooShort,
  explainTypeChecker,
} from "./explainFuncs";

export const registry = () => {
  const headerStyle =
    "font-weight: bold; color: #333; text-decoration: underline;";
  const funcStyle = "font-weight: bold; color: #000;";
  const descStyle = "color: #666; font-style: italic;";

  console.group("%cDATETIME", headerStyle);
  console.info(
    "%ccapitalize() ➡️ %creturns the string with the first letter capitalized",
    funcStyle,
    descStyle,
  );
  console.groupEnd();

  console.group("%cVALIDATORS", headerStyle);

  explainAcceptOnly();
  explainAtLeastOne();
  explainTooShort();
  explainTooLong();
  explainTypeChecker();
  explainIsObjValid();

  console.groupEnd();

  // --- Gruppo Utils ---
  console.group("%cUTILS", headerStyle);

  console.groupEnd();
};
