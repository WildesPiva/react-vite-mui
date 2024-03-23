import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    active: false,
  },
  reducers: {
    toggle: (state) => {
      state.active = !state.active;
    },
  },
  selectors: {
    active: (state) => {
      return state.active;
    },
  },
});

export const settingsActions = settingsSlice.actions;

export const settingsReducer = settingsSlice.reducer;

export const settingsSelectors = settingsSlice.selectors;
