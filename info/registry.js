import {
  explainIsLeapYear,
  explainIsShortMonth,
  explainIsValidDate,
  explainIsValidDateTimeLocal,
  explainIsValidMonth,
  explainIsValidTime,
} from "./explain/dateTime";
import { headerStyle, noteStyle } from "./styles";
import { explainCapitalize } from "./explain/utils";
import {
  explainAcceptOnly,
  explainAtLeastOne,
  explainIsObjValid,
  explainTooLong,
  explainTooShort,
  explainTypeChecker,
} from "./explain/validators";

export const registry = () => {
  console.log(
    "%cNOTE: functions marked with 🔍 provide extra docs. Pass 'true' as the 'info' parameter (last, optional).",
    noteStyle,
  );

  // --- DateTime ---

  console.groupCollapsed("%cDATETIME", headerStyle);
  explainIsLeapYear();
  explainIsShortMonth();
  explainIsValidDate();
  explainIsValidDateTimeLocal();
  explainIsValidMonth();
  explainIsValidTime();
  console.groupEnd();

  // --- Validators ---

  console.groupCollapsed("%cVALIDATORS", headerStyle);

  explainAcceptOnly();
  explainAtLeastOne();
  explainIsObjValid();
  explainTooLong();
  explainTooShort();
  explainTypeChecker();

  console.groupEnd();

  // --- Utils ---
  console.groupCollapsed("%cUTILS", headerStyle);
  explainCapitalize();

  console.groupEnd();
};
