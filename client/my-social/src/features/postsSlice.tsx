import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    postsData: {},
    onPosts: false,
    postsLoaded: false
  };

export const postsSlice = createSlice({
    name: "posts",
    initialState: initialState,
    reducers: {
      // This is used to set postsData to the response body of the http request
        setPostsData: (state, action) => {
            state.postsData = action.payload;
          },
      // This is used to set the current main display as on posts
        setOnPosts: (state, action) => {
            state.onPosts = action.payload;
          },
      // 
        setPostsLoaded: (state, action) => {
            state.postsLoaded = action.payload;
          }
    }

});

export const { setPostsData, setOnPosts, setPostsLoaded } = postsSlice.actions;
export default postsSlice.reducer;