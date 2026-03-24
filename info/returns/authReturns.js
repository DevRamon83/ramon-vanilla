export const explainAuthValidatorReturn = () => {
  console.log("%cReturns: %c[Object]", labelStyle, typeStyle);

  console.log("  %c• error: %c[Boolean]", funcStyle, typeStyle);

  console.log("  %c• why: %c[errorArray]", funcStyle, typeStyle);

  console.log("    Example: { error: true, errorArray: [string1, string2] }");
};
