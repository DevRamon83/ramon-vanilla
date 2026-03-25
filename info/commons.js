import { explainedStyle, funcStyle, pointStyle, typeStyle } from "./styles.js";

export const param = (paramName, paramType) => {
  console.log(
    `  %c• %c${paramName}: %c[${paramType}]`,
    pointStyle,
    funcStyle,
    typeStyle,
  );
};

export const paramExplained = (text) => {
  console.log(`    %c↳ ${text}`, explainedStyle);
};
