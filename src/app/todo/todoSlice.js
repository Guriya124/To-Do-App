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
        todoUpdate(state, action) {
            const index = state.todo.findIndex((todo) => todo.id === action.payload.id);
            if (index !== -1) {
                state.todo[index] = action.payload;
            }
        },
        todoDelete: (state, action) => {
            state.todo = state.todo.filter((todo) => todo.id !== action.payload);
        },
        todoFailure: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { todoStart, todoSuceess,todoDelete, todoUpdate, todoFailure } = todoSlice.actions

export default todoSlice.reducer