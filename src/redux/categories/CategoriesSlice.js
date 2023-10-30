import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    getStatus: (state) => {
      if (state.length === 0) {
        return 'Under construction';
      }
      return 'Categories are available';
    },
  },
});

export const { getStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
