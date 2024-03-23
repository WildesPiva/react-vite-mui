import { ENV } from "@/env";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  PersistConfig,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "localforage";
import { settingsReducer } from "@/redux/reducers/settings";

// import { encryptTransform } from 'redux-persist-transform-encrypt';

const persistConfig: PersistConfig<any> = {
  version: 1,
  key: "root",
  storage,
  whitelist: ["settings"],
  transforms: [
    // encryptTransform({
    //   secretKey: "7hs21hs12s1h17s",
    //   onError: function (error) {
    //     // handle the error
    //   },
    // }),
  ],
};

const rootReducer = combineReducers({
  settings: settingsReducer,
});

export const store = configureStore({
  devTools: ENV.MODE === "development",
  reducer: persistReducer(
    persistConfig,
    rootReducer as any
  ) as typeof rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store, null, () => {
  // success restored
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
