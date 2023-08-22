// Codes By Mahdi Tasha
// Importing Part
import {configureStore, createSlice, Slice} from "@reduxjs/toolkit";

// Creating Slice
const appSlice:Slice = createSlice({
    name: 'App',
    initialState: {
        sertraline: [],
        raspridone: [],
        meditation: [],
    },
    reducers: {}
})

// Exporting Actions To Use
export const actionsOfAppSlice = appSlice.actions;

// Configuring Store And Exporting The Store As Default
const appState = configureStore({reducer: appSlice.reducer})
export default appState;