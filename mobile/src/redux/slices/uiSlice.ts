import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  darkMode: boolean;
  loading: boolean;
  toast: {
    message: string;
    type: 'success' | 'error' | 'info' | 'warning';
  } | null;
}

const initialState: UIState = {
  darkMode: false,
  loading: false,
  toast: null,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    showToast: (
      state,
      action: PayloadAction<{
        message: string;
        type: 'success' | 'error' | 'info' | 'warning';
      }>
    ) => {
      state.toast = action.payload;
    },
    hideToast: (state) => {
      state.toast = null;
    },
  },
});

export const { toggleDarkMode, setLoading, showToast, hideToast } = uiSlice.actions;
export default uiSlice.reducer;
