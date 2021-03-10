export const composeValidators = (...validators) => (value) =>
  validators.reduce((error, validator) => error || validator(value), undefined);

export const required = (value) => (value ? undefined : "This field can't be empty");

export const mustBeNumber = (value) =>
  isNaN(value) ? "Must contain only numbers" : undefined;

export const mustBeNotNumber = (value) =>
  !isNaN(value) ? "Must contain not contain numbers" : undefined;

export const maxLength = (length) => (value) =>
  value && value.length > length
    ? `Maximum length not more than ${length} symbols`
    : undefined;

export const minLength = (length) => (value) =>
  value && value.length < length
    ? `Minimum length not less than ${length} symbols`
    : undefined;

export const onlyLetters = (value) =>
  value.match(/[a-zA-Z\s]+/gim) ? undefined : "Must be not a number";
