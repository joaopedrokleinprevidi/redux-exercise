import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./features/counter/counter-slice.ts";

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

export type RootState = ReturnType<typeof store.getState>