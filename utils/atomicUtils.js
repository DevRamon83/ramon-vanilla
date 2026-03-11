import { explainCapitalize } from "../info/explain/utils";

export const capitalize = (str, info) => {
  if (info) explainCapitalize();

  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};
