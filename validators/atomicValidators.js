export const acceptOnly = (string, setCharacters) => {
  const regex = new RegExp(`^[${setCharacters}]+$`);
  return regex.test(string);
};

export const atLeastOne = (string, setCharacters) => {
  const regex = new RegExp(`[${setCharacters}]`);
  return regex.test(string);
};

export const tooShort = (string, num) => {
  const length = string.length;

  if (length < num) {
    return true;
  } else {
    return false;
  }
};

export const tooLong = (string, num) => {
  const length = string.length;

  if (length > num) {
    return true;
  } else {
    return false;
  }
};

export const typeChecker = (datum, type) => {
  const yourType = typeof datum;
  const cleanType = type.toLowerCase();

  const objType = yourType === "object" && datum !== null;

  if (cleanType === "array") return Array.isArray(datum);

  if (cleanType === "object" && objType) return !Array.isArray(datum);

  if (cleanType === "null") return datum === null;

  if (cleanType === yourType) return true;

  return false;
};

export const isObjValid = (obj) => {
  if (!obj) return false;
  return Object.keys(obj).length > 0;
};
