export const registry = () => {
  const headerStyle =
    "font-weight: bold; color: #333; text-decoration: underline;";
  const funcStyle = "font-weight: bold; color: #000;";

  console.group("%cDATETIME", headerStyle);
  console.info(
    "%ccapitalize() %c=> %creturns the string with the first letter capitalized",
  );
  console.groupEnd();

  console.group("%cVALIDATORS", headerStyle);

  console.groupEnd();

  // --- Gruppo Utils ---
  console.group("%cUTILS", headerStyle);

  console.groupEnd();
};
