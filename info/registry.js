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
  const noteStyle = "color: #ff000;";

  console.log(
    "%cNOTE: functions marked with 🔍 provide extra docs. Pass 'true' as the 'info' parameter (last, optional).",
    noteStyle,
  );
  console.groupCollapsed("%cDATETIME", headerStyle);
  console.info(
    "%ccapitalize() ➡️ %creturns the string with the first letter capitalized",
    funcStyle,
    descStyle,
  );
  console.groupEnd();

  console.groupCollapsed("%cVALIDATORS", headerStyle);

  explainAcceptOnly();
  explainAtLeastOne();
  explainTooShort();
  explainTooLong();
  explainTypeChecker();
  explainIsObjValid();

  console.groupEnd();

  // --- Gruppo Utils ---
  console.groupCollapsed("%cUTILS", headerStyle);

  console.groupEnd();
};
