import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    currentUser: null,
    error: null,
    loading: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;

export default userSlice.reducer;
// This code defines a Redux slice for user authentication, including actions for starting the sign-in process, handling success, and handling failure. The initial state includes properties for the current user, error messages, and loading status. The slice is created using createSlice from Redux Toolkit, which simplifies the process of creating actions and reducers. The exported actions can be dispatched in components to update the user state in the Redux store.