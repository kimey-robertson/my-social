import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    redditData: {},
  };

export const postsSlice = createSlice({
    name: "posts",
    initialState: initialState,
    reducers: {
        setRedditData: (state, action) => {
            state.redditData = action.payload;
          },
    }

});

export const { setRedditData } = postsSlice.actions;
export default postsSlice.reducer;