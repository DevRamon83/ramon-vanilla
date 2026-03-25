import {
  explainAuthValidator,
  explainMatcher,
} from "../info/explain/validators.js";
import { explainAuthValidatorReturn } from "../info/returns/authReturns.js";
import { acceptOnly, tooLong, tooShort } from "./atomicValidators.js";
import {
  domainDispatcher,
  emailMissing,
  emailSplitter,
  isCleanEmail,
  isEmailFake,
  isStrongEnough,
} from "./helpers.js";

const consoleHandler = (caller) => {
  const string = caller.replace("Validator", "");
  console.group(`🔍 Details: ${caller}`);
  explainAuthValidator(string);
  param("username", "string");
  explainAuthValidatorReturn();
  console.groupEnd();
};

export const usernameValidator = (username, info) => {
  if (info) consoleHandler("usernameValidator");
  let error = false;
  let errorArray = [];
  const isTooShort = tooShort(username, 5);
  const isTooLong = tooLong(username, 55);

  if (isTooShort) {
    error = true;
    errorArray.push("short");
  }

  if (isTooLong) {
    error = true;
    errorArray.push("long");
  }

  const allowedCharacters = "a-zA-Z0-9-_.";

  const isValidUser = acceptOnly(username, allowedCharacters);

  if (!isValidUser) {
    error = true;
    errorArray.push("invalidChar");
  }

  return { error, errorArray };
};

export const emailValidator = (email, info) => {
  if (info) consoleHandler("emailValidator");
  if (emailMissing(email)) return { error: true, errorArray: ["emailMissing"] };

  let error = false;
  let errorArray = [];

  const cleanEmail = isCleanEmail(email);
  if (!cleanEmail) return { error: true, errorArray: ["missing@"] };

  if (isEmailFake(cleanEmail)) {
    error = true;
    errorArray.push("invalid_sequence");
  }

  const emailSplit = emailSplitter(cleanEmail);
  if (emailSplit.error) {
    error = true;
    errorArray.push(...emailSplit.errorArray);
  }

  const elements = emailSplit.elements;

  const isDomainValid = domainDispatcher(elements);

  if (isDomainValid.error) {
    error = true;
    errorArray.push(...isDomainValid.errorArray);
  }

  return { error, errorArray };
};

export const passwordValidator = (password, info) => {
  if (info) consoleHandler("passwordValidator");
  let error = false;
  let errorArray = [];

  const isTooShort = tooShort(password, 11);
  const isTooLong = tooLong(password, 20);

  if (isTooShort) {
    error = true;
    errorArray.push("short");
  }

  if (isTooLong) {
    error = true;
    errorArray.push("long");
  }

  const invalidPsw = isStrongEnough(password);

  if (invalidPsw.length > 0) {
    error = true;
    errorArray.push(...invalidPsw);
  }

  return { error, errorArray };
};

export const matcher = (id1, id2, info) => {
  if (info) explainMatcher();
  const first = document.getElementById(id1).value;
  const second = document.getElementById(id2).value;
  return first === second;
};
