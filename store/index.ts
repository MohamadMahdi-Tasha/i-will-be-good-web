// Codes By Mahdi Tasha
// Importing Part
import {configureStore, createSlice, Slice} from "@reduxjs/toolkit";

// Creating Slice
const AppSlice:Slice = createSlice({
    name: 'App',
    initialState: {
        sertraline: [],
        raspridone: [],
        meditation: [],
    },
    reducers: {}
})

// Exporting Actions To Use
export const actionsOfAppSlice = AppSlice.actions;

// Configuring Store And Exporting The Store As Default
const AppState = configureStore({reducer: AppSlice.reducer})
export default AppState;