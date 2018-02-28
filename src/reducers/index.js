import { combineReducers } from 'redux';
import OptionsReducer from './reducer_options';

const rootReducer = combineReducers({
    options: OptionsReducer,
});

export default rootReducer;