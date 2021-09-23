import { configureStore }  from '@reduxjs/toolkit';
import reducers from './reducers';

/**
 *  Creates Redux store, and also automatically configure the Redux DevTools extension
 */

export const store = configureStore({
  reducer: {...reducers }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;