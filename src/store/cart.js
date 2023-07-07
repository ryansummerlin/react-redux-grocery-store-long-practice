
const ADD = 'cart/ADD';

export const addProduce = (produce) => {
    return {
        type: ADD,
        produce
    }
}

export default function cartReducer(state = {}, action) {
    switch(action.type) {
        case ADD:
            const newState = Object.assign({}, state);
            let id = action.produce.id;
            if (newState[id]) {
                newState[id].count++;
            } else {
                newState[id] = { id, count: 1 };
            }
            return newState;
        default:
            return state;
    }
}
