import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    postsData: [],
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
      // This is just so the page doesn't endlessly make a get request while 'currentDisplay' is 'posts'
        setPostsLoaded: (state, action) => {
            state.postsLoaded = action.payload;
          }
    }

});

export const { setPostsData, setPostsLoaded } = postsSlice.actions;
export default postsSlice.reducer;