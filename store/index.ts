import { configureStore } from '@reduxjs/toolkit';
import orderReducer from './modules/order';

const store = configureStore({
  reducer: {
    order: orderReducer,
  },
  devTools: true,
});

export type RootStore = ReturnType<typeof store.getState>;

export default store;
