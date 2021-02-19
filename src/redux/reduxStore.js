import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import friendsReducer from "./friendsReducer";
import findUsersReducer from "./findUsers";

const { createStore, combineReducers } = require("redux");

const reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  findUsersPage: findUsersReducer,
  friendsSection: friendsReducer,
});

const store = createStore(reducers);

export default store;
