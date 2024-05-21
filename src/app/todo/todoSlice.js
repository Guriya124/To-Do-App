import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todo: [],
    loading: false,
    error: null
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        todoStart: (state) => {
            state.loading = true
            state.error = null
        },
        todoSuceess: (state, action) => {
            state.loading = false
            state.todo.push(action.payload)
            state.error = null
        },
        todoFailure: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { todoStart, todoSuceess, todoFailure } = todoSlice.actions

export default todoSlice.reducer