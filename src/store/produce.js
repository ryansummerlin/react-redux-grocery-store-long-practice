import produceData from '../mockData/produce.json';

const POPULATE = 'produce/POPULATE';
const LIKE = 'produce/LIKE';

export const populateProduce = () => {
    return {
        type: POPULATE,
        produce: produceData
    }
}

export const likeProduce = (produce) => {
    return {
        type: LIKE,
        produce
    }
}

export const getAllProduce = (state) => Object.values(state.produce);

export default function produceReducer(state = {}, action) {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case POPULATE:
            action.produce.forEach(produce => newState[produce.id] = produce);
            return newState;
        case LIKE:
            let id = action.produce.id;
            newState[id].liked = !newState[id].liked;
            return newState;
        default:
            return state;
    }
  }
