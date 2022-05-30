import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0, }

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        plus: (state) => { state.count++ },
        minus: (state) => { state.count-- },
    }
})

export const { minus, plus } = counterSlice.actions;
export default counterSlice.reducer;