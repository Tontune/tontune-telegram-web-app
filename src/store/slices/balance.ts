import { createSlice } from '@reduxjs/toolkit';

interface BalanceState {
  tuneCoins: number;
}

const initialState: BalanceState = {
  tuneCoins: parseInt(localStorage.getItem('tuneBalance') || '0.00'),
};

const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    increase: (state, { payload }) => {
      state.tuneCoins += payload;

      localStorage.setItem('tuneBalance', state.tuneCoins.toString());
    },
    decrease: (state, { payload }) => {
      state.tuneCoins -= payload;

      localStorage.setItem('tuneBalance', state.tuneCoins.toString());
    },
  },
});

export const { increase, decrease } = balanceSlice.actions;
export default balanceSlice.reducer;
