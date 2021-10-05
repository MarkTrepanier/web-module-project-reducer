import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, CLEAR_DISPLAY, MEMORY } from './../actions';

export const initialState = {
    total: 100,
    operation: "+",
    memory: 100
}
//initialState had * not +
const calculateResult = (num1, num2, operation) => {
    switch(operation) {
        case("+"):
            return num1 + num2;
        case("*"):
            return num1 * num2;
        case("-"):
            return num1 - num2;
    }
}

const memoryF = (state,f) => {
    switch(f) {
        case('+'):
        return({...state, memory:state.total});
        case('r'):
        return({...state, total:state.memory});
        case('c'):
        return({...state, memory:0});
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        case(ADD_ONE):
            return({
                ...state,
                total: state.total + 1
            });

        case(APPLY_NUMBER):
            return ({ 
                ...state, 
                total: calculateResult(state.total, action.payload, state.operation)
            });
        
        case(CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload
            });

        case(CLEAR_DISPLAY):
            return({
                ...state,
                total: 0
            })

        case(MEMORY):
        return(memoryF(state,action.payload))
            
        default:
            return state;
    }
}

export default reducer;