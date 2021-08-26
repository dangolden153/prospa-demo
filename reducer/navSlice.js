import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  destination: null,
  timeTraveledinformation: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducer: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTimeTraveledinformation: (state, action) => {
      state.timeTraveledinformation = action.payload;
    },
  },
});

///// destructuring the action
export const { setOrigin, setDestination, setTimeTraveledinformation } =
  navSlice.actions;

/// selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTimeTraveledInformation = (state) =>
  state.nav.timeTraveledinformation;

export default navSlice.reducer;
