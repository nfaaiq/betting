import { combineReducers } from 'redux';
import eventReducer from './eventReducer';
import bettingReducer from './bettingReducer';

export default combineReducers({
    eventData: eventReducer,
    bettingData: bettingReducer,
    
})