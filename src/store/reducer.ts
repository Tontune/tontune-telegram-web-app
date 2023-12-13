import { combineReducers } from '@reduxjs/toolkit';

import listenReducer from './slices/listen';
import modalsRecucer from './slices/modals.ts'

const rootReducer = combineReducers({
  listen: listenReducer,
  modal: modalsRecucer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
