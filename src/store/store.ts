import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import rootReducer, { RootState } from './reducer';

export function makeStore() {
  return configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
  });
}

export type AppDispatch = ReturnType<typeof makeStore>['dispatch'];
export type AppThunk<R = void> = ThunkAction<R, RootState, unknown, Action<string>>;

export const useTypedDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
