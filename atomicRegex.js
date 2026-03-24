export const atLeastLowerCase = (string) => {
  const regex = /[a-z]/;
  return regex.test(string);
};

export const atLeastUpperCase = (string) => {
  const regex = /[A-Z]/;
  return regex.test(string);
};

export const atLeastSpecialChars = (string, arrayChars) => {
  let isStringOk = false;

  for (let symbol of arrayChars) {
    if (string.includes(symbol)) {
      isStringOk = true;
      break;
    }
  }

  return isStringOk;
};

export const atLeastNumber = (string) => {
  const regex = /[0-9]/;
  return regex.test(string);
};
