import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser: null,
    error: null,
    loading: false,
    allUser: [],
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signupStart: (state) => {
            state.loading = true
            state.error = null
        },
        signupSuceess: (state, action) => {
            state.loading = false
            state.allUser.push(action.payload)
            state.error = null
        },
        signupFailure: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        signinStart: (state) => {
            state.loading = true
            state.error = null
        },
        signinSuceess: (state, action) => {
            state.loading = false
            state.currentUser = action.payload
            state.error = null
        },
        signinFailure: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        signout: (state) => {
            state.currentUser = null
        },
    },
})

// Action creators are generated for each case reducer function
export const { signupStart, signupSuceess, signupFailure, signinStart, signinSuceess, signinFailure, signout } = userSlice.actions

export default userSlice.reducer