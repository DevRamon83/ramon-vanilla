import { funcStyle, typeStyle, labelStyle } from "../styles.js";

export const explainDateReturn = () => {
  console.log("%cReturns: %c[Object]", labelStyle, typeStyle);

  console.log("  %c• isValid: %c[Boolean]", funcStyle, typeStyle);

  console.log(
    "  %c• why: %c[String] (only if isValid is false)",
    funcStyle,
    typeStyle,
  );

  console.log("    Example: { isValid: false, why: 'month out of range' }");
};
