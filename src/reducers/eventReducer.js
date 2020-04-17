import { FETCH_EVENTS, ADD_BETTING} from '../actions/types'

const INTIAL_STATE = {
    events:[]
};

export default (state = INTIAL_STATE, action)  => {
    switch(action.type) {
        case FETCH_EVENTS:
            return {...state, events: action.payload}
        default:
            return state;
    }
}