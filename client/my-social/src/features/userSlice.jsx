import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: [],
    loggedIn: false,
    currentUser: '',
    createAccountDisplay: false
  };

export const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
      // This is used to set userData to the response body of the http request
        setUserData: (state, action) => {
            state.userData = action.payload;
          },
        setLoggedIn: (state, action) => {
          state.loggedIn = action.payload
          },
        setCurrentUser: (state, action) => {
          state.currentUser = localStorage.getItem('profile')
          },
        setCreateAccountDisplay: (state, action) => {
          state.createAccountDisplay = action.payload
          }
    }

});

export const { setUserData, setLoggedIn, setCurrentUser, setCreateAccountDisplay } = userSlice.actions;
export default userSlice.reducer;