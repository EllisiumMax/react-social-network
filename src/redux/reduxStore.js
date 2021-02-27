import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import friendsReducer from "./friendsReducer";
import findUsersReducer from "./findUsersReducer";
import authReducer from "./authReducer";
import { combineReducers, createStore } from "redux";


const reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  findUsersPage: findUsersReducer,
  friendsSection: friendsReducer,
  auth: authReducer,
});

const store = createStore(reducers);

window.store = store;

export default store;
