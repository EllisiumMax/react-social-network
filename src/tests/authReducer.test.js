const {
  default: authReducer,
  setLogin,
  serverError,
  captcha,
} = require("redux/authReducer");

const state = {
  isLogged: false,
  id: null,
  login: null,
  email: null,
  messages: [],
  isFetching: false,
  errorMessages: null,
  errorCodes: null,
  captcha: null,
};

test("should set login data", () => {
  const action = setLogin(
    "ellisium",
    "123",
    "email@gmail.com",
    ["hello", "world"],
    true
  );
  const newState = authReducer(state, action);
  expect(newState.isLogged).toBe(true);
  expect(newState.id).toBe("123");
  expect(newState.login).toBe("ellisium");
  expect(newState.email).toBe("email@gmail.com");
  expect(newState.messages).toStrictEqual(["hello", "world"]);
});

test("should set server errors", () => {
  const action = serverError("Hello world", 10);
  const newState = authReducer(state, action);
  expect(newState.errorMessages).toBe("Hello world");
  expect(newState.errorCodes).toBe(10);
});

test("should set CAPTCHA", () => {
  const action = captcha("www.captcha.com/captcha.jpg");
  const newState = authReducer(state, action);
  expect(newState.captcha).toBe("www.captcha.com/captcha.jpg");
});
