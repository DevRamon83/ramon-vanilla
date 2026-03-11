import {
  funcStyle,
  typeStyle,
  labelStyle,
  commentStyle,
  codeStyle,
} from "../styles";

export const explainDateReturn = () => {
  console.log("%cReturns: %c[Object]", labelStyle, typeStyle);

  console.log("  %c• isValid: %c[Boolean]", funcStyle, typeStyle);

  console.log(
    "  %c• why: %c[String] %c(only if isValid is false)",
    funcStyle,
    typeStyle,
    commentStyle,
  );

  console.log(
    "    %cExample: { isValid: false, why: 'month out of range' }",
    codeStyle,
  );
};
