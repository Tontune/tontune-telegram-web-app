import { combineReducers } from '@reduxjs/toolkit';

import listenReducer from './slices/listen';

const rootReducer = combineReducers({
  listen: listenReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
