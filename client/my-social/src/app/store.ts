import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import postsReducer from '../features/postsSlice';
import mainDisplayReducer from '../features/mainDisplaySlice';
import globalReducer from '../features/globalSlice';
import headerReducer from '../features/headerSlice';
import userReducer from '../features/userSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    mainDisplay: mainDisplayReducer,
    // global: globalReducer,
    user: userReducer
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
