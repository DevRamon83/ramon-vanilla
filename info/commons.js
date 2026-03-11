import { explainedStyle, funcStyle, pointStyle, typeStyle } from "./styles";

export const param = (paramName, paramType) => {
  console.log(
    `  %c• %c${paramName}: %c[${paramType}]`,
    pointStyle,
    funcStyle,
    typeStyle,
  );
};

export const paramExplained = (text) => {
  // Aggiungiamo un piccolo rientro visivo (uno spazio) per farlo stare "sotto" al parametro
  console.log(`    %c↳ ${text}`, explainedStyle);
};
