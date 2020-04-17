import { DEL_BETTING, ADD_BETTING} from '../actions/types'


export default (state = {}, action)  => {
    switch(action.type) {
        case ADD_BETTING:
            if(state[action.payload.id] !== undefined) {    
                delete state[action.payload.id];
                return {...state }
            }else {
                return {...state, [action.payload.id]:action.payload }

            }
        case DEL_BETTING:
            
            delete state[action.payload];
            return {...state }
        default:
            return state;
    }
}