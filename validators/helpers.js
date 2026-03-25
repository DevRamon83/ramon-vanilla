import {
  atLeastLowerCase,
  atLeastNumber,
  atLeastSpecialChars,
  atLeastUpperCase,
} from "../atomicRegex.js";
import { acceptOnly } from "./atomicValidators.js";

export const isStrongEnough = (password) => {
  const errorMessage = [];

  const containsLowerCase = atLeastLowerCase(password);

  if (!containsLowerCase) errorMessage.push("lowerCaseMissing");

  const containsUpperCase = atLeastUpperCase(password);

  if (!containsUpperCase) errorMessage.push("upperCaseMissing");

  const containsNumber = atLeastNumber(password);

  if (!containsNumber) errorMessage.push("numMissing");

  const pswChar = ["$", "@", "#", "&", "*", "+", "!", "?", "-", "."];
  const containsSpecialChars = atLeastSpecialChars(password, pswChar);

  if (!containsSpecialChars) errorMessage.push("specialCharMissing");

  return errorMessage;
};

export const domainIterator = (domain) => {
  let error = false;
  const errorArray = [];
  for (let i = 0; i < domain.length; i++) {
    const segment = domain[i].trim();
    if (segment === "") {
      error = true;
      errorArray.push("invalid_structure");
      break;
    }
    const invalid = atLeastSpecialChars(segment, invalidEmailChars);

    const invalidStructure = segment.includes("_");

    if (invalid || invalidStructure) {
      error = true;
      errorArray.push("invalidChars");
      break;
    }

    if (i === domain.length - 1 && segment.length < 2) {
      error = true;
      errorArray.push("invalid_extension");
    }
  }

  return { error, errorArray };
};

export const domainDispatcher = (elements) => {
  let error = false;
  const errorArray = [];
  const domain = elements[1].split(".");
  if (domain.length <= 1) {
    error = true;
    errorArray.push("invalid_structure");
  }

  const isValidDomain = domainIterator(domain);

  if (isValidDomain.error) {
    error = true;
    errorArray.push(...isValidDomain.errorArray);
  }

  return { error, errorArray };
};

export const emailIterator = (elements) => {
  let error = false;
  const errorArray = [];
  for (let i = 0; i < elements.length; i++) {
    const invalid = atLeastSpecialChars(elements[i], invalidEmailChars);

    if (invalid) {
      error = true;
      errorArray.push("invalidChars");
    }
  }

  return { error, errorArray };
};

export const isCleanEmail = (email) => {
  const cleanEmail = email.trim().toLowerCase();
  if (!cleanEmail.includes("@")) {
    return false;
  }
  return cleanEmail;
};

export const isEmailFake = (cleanEmail) => {
  const lastCharIndex = cleanEmail.length - 1;

  const allowedCharacters = "a-z0-9";
  const validLast = acceptOnly(cleanEmail[lastCharIndex], allowedCharacters);
  if (cleanEmail.includes("..") || !validLast) {
    return true;
  }
  return false;
};

export const emailSplitter = (cleanEmail) => {
  const elements = cleanEmail.split("@");
  let error = false;
  const errorArray = [];

  if (
    elements.length !== 2 ||
    elements[0].trim() === "" ||
    elements[1].trim() === ""
  ) {
    errorArray.push("invalid_structure");
    error = true;
  }

  const areElementsValid = emailIterator(elements);
  if (areElementsValid.error) {
    error = true;
    errorArray.push(...areElementsValid.errorArray);
  }

  return { error, errorArray, elements };
};

export const emailMissing = (email) => {
  if (!email || email.trim().length === 0) return true;
  return false;
};
