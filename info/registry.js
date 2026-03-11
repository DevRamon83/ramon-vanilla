export const registry = () => {
  const headerStyle =
    "font-weight: bold; color: #333; text-decoration: underline;";
  const funcStyle = "font-weight: bold; color: #000;";
  const arrowStyle = "color: #999;";
  const descStyle = "color: #666; font-style: italic;";

  console.group("%cDATETIME", headerStyle);
  console.info(
    "%ccapitalize() %c=> %creturns the string with the first letter capitalized",
    funcStyle,
    arrowStyle,
    descStyle,
  );
  console.groupEnd();

  console.group("%cVALIDATORS", headerStyle);

  console.groupEnd();

  // --- Gruppo Utils ---
  console.group("%cUTILS", headerStyle);

  console.groupEnd();
};
