import { combineReducers } from '@reduxjs/toolkit';

import balanceReducer from './slices/balance.ts';
import listenReducer from './slices/listen';
import modalsRecucer from './slices/modals.ts';

const rootReducer = combineReducers({
  listen: listenReducer,
  modal: modalsRecucer,
  balance: balanceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
