import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    color: '',
}

const colorSlice = createSlice({
    name: 'color',
    initialState,
    reducers: {
        changeColor: (state, payload) => { state.color = payload.payload.color }
    }
})

export const { changeColor } = colorSlice.actions;
export default colorSlice.reducer;