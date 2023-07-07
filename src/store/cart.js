
const ADD = 'cart/ADD';
const INCREMENT = 'cart/INCREMENT';
const DECREMENT = 'cart/DECREMENT';
const REMOVE = 'cart/REMOVE';
const CHANGE_COUNT = 'cart/CHANGE_COUNT';

export const addProduce = (produce) => {
    return {
        type: ADD,
        produce
    }
}

export const incrementProduce = (produce) => {
    return {
        type: INCREMENT,
        produce
    }
}

export const decrementProduce = (produce) => {
    return {
        type: DECREMENT,
        produce
    }
}

export const removeProduce = (produce) => {
    return {
        type: REMOVE,
        produce
    }
}

export const changeCount = (produce, count) => {
    return {
        type: CHANGE_COUNT,
        produce,
        count
    }
}

export default function cartReducer(state = {}, action) {
    const newState = Object.assign({}, state);
    let id;
    if (action.produce) {
        id = action.produce.id;
    }
    switch(action.type) {
        case ADD:
            if (newState[id]) {
                newState[id].count++;
            } else {
                newState[id] = { id, count: 1 };
            }
            return newState;
        case INCREMENT:
            newState[id].count++;
            return newState;
        case DECREMENT:
            newState[id].count--;
            return newState;
        case REMOVE:
            delete newState[id];
            return newState;
        case CHANGE_COUNT:
            newState[id].count = action.count;
            return newState;
        default:
            return state;
    }
}
