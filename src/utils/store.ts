import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from '@/slices/authSlice';
import builderReducer from '@/slices/builderSlice';

const persistConfig = {
  key: 'root',
  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
    builder: persistReducer(persistConfig, builderReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
