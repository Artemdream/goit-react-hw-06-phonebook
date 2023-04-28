import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filterContact',
  initialState: filterInitialState,
  reducers: {
    setFilterContacts(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setFilterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
