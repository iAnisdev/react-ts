import { useReducer } from "react";

enum actionKind {
    INCREMENT = 'increment',
    DECREMENT = 'decrement'
}

interface CountState {
    count: number
}

interface CountAction {
    type: actionKind
}

function counterReducer(state: CountState, action: CountAction): CountState {
    switch (action.type) {
        case actionKind.INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case actionKind.DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state
    }
}

export function CountUseReducer() {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });

    return (
        <>
            <button onClick={() => dispatch({ type: actionKind.DECREMENT })}>-</button>
            <button disabled>{state.count}</button>
            <button onClick={() => dispatch({ type: actionKind.INCREMENT })}>+</button>
        </>
    )
}