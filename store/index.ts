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
    reducers: {
        setItem(state,action) {
            // Variables
            const payload:{} = action.payload;
            const today:string = new Date().toLocaleDateString();
            let stateToUse:[];

            // A Switch To Find Which State To Use Later
            switch (payload.treatment) {
                case 'sertraline' : stateToUse = state.sertraline; break;
                case 'raspridone' : stateToUse = state.raspridone; break;
                case 'meditation' : stateToUse = state.meditation; break;
            }

            // Today's Item
            const itemToFind:{} = stateToUse.find((item:any) => item.date === today);

            // If Today's Item Exists Then ...
            if (itemToFind === undefined) {
                // Pushing Object Of Today's Date And A Status To State
                stateToUse.push({
                    date: today,
                    isDone: payload.isDone
                })
            } else {
                // Changing Status Of Founded Item
                itemToFind.isDone = payload.isDone;
            }
        }
    }
})

// Exporting Actions To Use
export const ActionsOfAppSlice = AppSlice.actions;

// Configuring Store And Exporting The Store As Default
const AppState = configureStore({reducer: AppSlice.reducer})
export default AppState;