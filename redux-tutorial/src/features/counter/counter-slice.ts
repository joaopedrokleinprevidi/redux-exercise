import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface CounterState {
    value:  number
}

const initialState: CounterState = {
    value: 5
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        incrementAmount: (state, action: PayloadAction<number>) => { //payload action é uma interface do ts. para dizer qual o tipo de dado que espera-se receber do payload. 
            state.value += action.payload
        },
        decrease: (state) => {
            state.value -= 1
        },
        decreaseAmount: (state, action: PayloadAction<number>) => {
            state.value -= action.payload
        }
    }
})

export const { increment, incrementAmount, decrease, decreaseAmount } = counterSlice.actions
export const counterReducer = counterSlice.reducer