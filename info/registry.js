import {
  explainIsLeapYear,
  explainIsShortMonth,
  explainIsValidDate,
  explainIsValidDateTimeLocal,
  explainIsValidMonth,
  explainIsValidTime,
} from "./explain/dateTime.js";
import { headerStyle, noteStyle } from "./styles.js";
import { explainCapitalize } from "./explain/utils.js";
import {
  explainAcceptOnly,
  explainAtLeastOne,
  explainAuthValidator,
  explainIsObjValid,
  explainMatcher,
  explainTooLong,
  explainTooShort,
  explainTypeChecker,
} from "./explain/validators.js";

export const registry = () => {
  console.log(
    "%cNOTE:%c functions marked with 🔍 provide extra docs. Pass 'true' as the 'info' parameter (last, optional).",
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
  explainAuthValidator("username");
  explainAuthValidator("email");
  explainAuthValidator("password");
  explainMatcher();

  console.groupEnd();

  // --- Utils ---
  console.groupCollapsed("%cUTILS", headerStyle);
  explainCapitalize();

  console.groupEnd();
};
