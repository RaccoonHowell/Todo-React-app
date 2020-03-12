import React, { useReducer } from "react";

const initial = {
    items: [
        { task: "Say hello", completed: true },
        { task: "Say goodbye", completed: false },
    ]
}

const reducer= () => {

}

export const addItem = (state, { value }) => {
    return {
        ...state,
        items: [
            ...state.items,
            { task: value, completed: false }
        ]
    }
};

export default reducer;
// Our state will consist of an array, items, containing object literals with a task and completed property. For example:

// {
//     items: [
//         { task: "Say hello", completed: true },
//         { task: "Say goodbye", completed: false },
//     ]
// }