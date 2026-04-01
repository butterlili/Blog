import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  theme: 'light', // Default theme 
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  }
});

export const {toggleTheme} = themeSlice.actions;
//export default themeSlice.reducer;
export default themeSlice.reducer; // Export the reducer to be used in the store