import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
  bountiesModal: boolean;
}

const initialState: ModalState = {
  bountiesModal: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<string>) => {
      state[action.payload as keyof ModalState] = true;
    },
    closeModal: (state, action: PayloadAction<string>) => {
      state[action.payload as keyof ModalState] = false;
    }
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
