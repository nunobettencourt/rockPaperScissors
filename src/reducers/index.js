import { combineReducers } from 'redux';
import OptionsReducer from './reducer_options';
import GameReducer from './reducer_game';

const rootReducer = combineReducers({
    options: OptionsReducer,
    game: GameReducer
});

export default rootReducer;