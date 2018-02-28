import { combineReducers } from 'redux';
import OptionsReducer from './reducer_options';
import GameReducer from './reducer_game';
import ScoreBoardReducer from './reducer_scoreboard';

const rootReducer = combineReducers({
    options: OptionsReducer,
    game: GameReducer,
    scoreboard: ScoreBoardReducer
});

export default rootReducer;