import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import { combineReducers, createStore } from "redux";
import ReduxThunk from 'redux-thunk';
import { applyMiddleware } from "redux";


const rootReducer = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

window.store = store;

export default store;
