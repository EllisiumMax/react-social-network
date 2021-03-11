export const getisLoggedSel = (state) => state.auth.isLogged;

export const getLogingSel = (state) => state.auth.login;

export const getIsFetchingSel = (state) => state.auth.isFetching;

export const getErrorCodesSel = (state) => state.auth.errorCodes;

export const getErrorMessagesSel = (state) => state.auth.errorMessages;

export const getCaptchaSel = (state) => state.auth.captcha;
