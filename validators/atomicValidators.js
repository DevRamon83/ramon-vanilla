import {
  explainAcceptOnly,
  explainAtLeastOne,
  explainIsObjValid,
  explainTooLong,
  explainTooShort,
  explainTypeChecker,
  explainValidateYoutubeUrl,
} from "../info/explain/validators.js";

export const acceptOnly = (string, setCharacters, info) => {
  if (info) explainAcceptOnly();
  const regex = new RegExp(`^[${setCharacters}]+$`);
  return regex.test(string);
};

export const atLeastOne = (string, setCharacters, info) => {
  if (info) explainAtLeastOne();
  const regex = new RegExp(`[${setCharacters}]`);
  return regex.test(string);
};

export const tooShort = (string, num, info) => {
  if (info) explainTooShort();
  const length = string.length;

  if (length < num) {
    return true;
  } else {
    return false;
  }
};

export const tooLong = (string, num, info) => {
  if (info) explainTooLong();
  const length = string.length;

  if (length > num) {
    return true;
  } else {
    return false;
  }
};

export const typeChecker = (datum, type, info) => {
  if (info) explainTypeChecker();
  const yourType = typeof datum;
  const cleanType = type.toLowerCase();

  const objType = yourType === "object" && datum !== null;

  if (cleanType === "array") return Array.isArray(datum);

  if (cleanType === "object" && objType) return !Array.isArray(datum);

  if (cleanType === "null") return datum === null;

  if (cleanType === yourType) return true;

  return false;
};

export const isObjValid = (obj, info) => {
  if (info) explainIsObjValid();
  if (!obj) return false;
  return Object.keys(obj).length > 0;
};

export const validateYoutubeUrl = (url, info) => {
  if (info) explainValidateYoutubeUrl();
  const errorMsg = "invalid url";
  const error = true;
  const firstPart = url.slice(0, 8);
  let fromIndex = null;
  let toIndex = null;

  if (!url) return { error, errorMsg };

  if (firstPart !== "https://") return { error, errorMsg };

  if (url.includes("youtu.be")) {
    fromIndex = url.indexOf("be/");
    fromIndex = fromIndex === -1 ? fromIndex : fromIndex + 3;
    toIndex = url.indexOf("?");
  } else {
    fromIndex = url.indexOf("watch?v=");
    fromIndex = fromIndex === -1 ? fromIndex : fromIndex + 8;
    toIndex = url.indexOf("&");
  }

  if (fromIndex === -1) return { error, errorMsg };

  const videoID =
    toIndex === -1 ? url.slice(fromIndex) : url.slice(fromIndex, toIndex);

  return { error: false, videoID };
};
