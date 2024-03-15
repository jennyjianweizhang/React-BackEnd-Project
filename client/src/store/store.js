import {combineReducers, configureStore } from "@reduxjs/toolkit"
import { persistReducer,persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { thunk } from 'redux-thunk';
import userReducer from "./user"

// const store = configureStore({
//     reducer: {
//         user: userReducer
//     }
// })

const reducer = combineReducers({
    user: userReducer
  })
  
  const persistConfig = {
    key:'user',
    storage,
    whiteList:[],
    blackList:[]
  }
  
  const persistedReducer = persistReducer(persistConfig,reducer)
  
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(thunk),
  })
  
  export const persistor = persistStore(store)
  export default store;