import { useReducer } from "react"

const initialState = {
    count: 0
}
type Action = { type: "increment", payload: number } | { type: "decrement", payload: number }

function reducer(state: typeof initialState, action: Action) {
    switch (action.type) {
        case "increment":
            return { count: state.count + action.payload }
        case "decrement":
            return { count: state.count - action.payload }
    }
}

export default function UseReducerPage() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <h3>{state.count}</h3>
            <button onClick={() => {
                dispatch({ type: "increment", payload: 1 })
            }}>加
            </button>
            <button onClick={() => {
                dispatch({ type: "decrement", payload: 1 })
            }}>减
            </button>
        </>
    )
}
