import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import postsReducer from '../features/postsSlice';
import headerReducer from '../features/headerSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    // header: headerReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
