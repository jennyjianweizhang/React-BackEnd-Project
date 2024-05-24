import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { thunk } from "redux-thunk";
import userReducer from "./user";
import ecommerceDataReducer from "./ecommerceData";
import crmDataReducer from "./crmData";
import analyticsDataReducer from "./analyticsData";
import emailDataReducer from "./emailData";
import chatDataReducer from "./chatData";
import eventDataReducer from "./eventData";

// const store = configureStore({
//     reducer: {
//         user: userReducer
//     }
// })

const reducer = combineReducers({
  user: userReducer,
  ecommerceData: ecommerceDataReducer,
  crmData:crmDataReducer,
  analyticsData: analyticsDataReducer,
  emailData: emailDataReducer,
  chatData: chatDataReducer,
  eventData: eventDataReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "ecommerceData", "crmData", "analyticsData", "emailData", "chatData", "eventsData"],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(thunk),
});

export const persistor = persistStore(store);
export default store;
