import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import { combineReducers, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import { applyMiddleware } from "redux";
import appReducer from "./appReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import settingsReducer from "./settingsReducer";


const rootReducer = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
  settingsPage: settingsReducer,
}); 

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);

export default store;
