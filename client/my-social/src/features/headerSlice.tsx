import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {

  };

export const headerSlice = createSlice({
    name: "header",
    initialState: initialState,
    reducers: {
        setRedditData: (state, action) => {
            state.redditData = action.payload;
          },
        setOnPosts: (state, action) => {
            state.onPosts = action.payload;
          },
        setPostsLoaded: (state, action) => {
            state.postsLoaded = action.payload;
          }
    }

});

export const { setRedditData, setOnPosts, setPostsLoaded } = headerSlice.actions;
export default headerSlice.reducer;