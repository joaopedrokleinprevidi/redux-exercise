import {createStore} from 'redux';

const initialState = {
    counter: {
        value: 5
    }
}

function reducer(state = initialState, action: any){
    switch(action.type){
        case "counter/increment": {
            return {
                ...state,
                counter: {
                    ...state.counter,
                    value: state.counter.value + 1
                }
            }}
        case "counter/incrementAmount": {
            return {
                ...state,
                counter: {
                    ...state.counter,
                    value: state.counter.value + action.payload
                }
            }
        }
        default:
            return state;
    }
}

export const store = createStore(reducer
);