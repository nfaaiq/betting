import streams from '../apis/streams';
//import history from '../history';

import { 
        FETCH_EVENTS,
        ADD_BETTING,
        DEL_BETTING
    } from './types';





export const fetchEvents = () => async dispatch => {
    
    const response  = await streams.get(`/59f08692310000b4130e9f71`);
        
    dispatch({ type: FETCH_EVENTS, payload: response.data})
}


export const addToBetting = (selectionRow) => {
    return { type: ADD_BETTING, payload: selectionRow};
}


export const delBetting = (id) => {
    return { type: DEL_BETTING, payload: id};
}

