import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    currentDisplay: 'posts'
  };

export const mainDisplaySlice = createSlice({
    name: "mainDisplay",
    initialState: initialState,
    reducers: {
      // This is used to set the current display in MainDataDisplay eg. posts, profile etc.
        setCurrentDisplay: (state, action) => {
            state.currentDisplay = action.payload;
          }
    }

});

export const { setCurrentDisplay} = mainDisplaySlice.actions;
export default mainDisplaySlice.reducer;