import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import friendsReducer from "./friendsReducer";

const { createStore, combineReducers } = require("redux");

const reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  friendsSection: friendsReducer,
});

const store = createStore(reducers);

export default store;
