import * as types from '../actions/types';

const INITIAL_STATE = {
    playerSelection: null,
    computerSelection: null
};

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
        case types.PLAYER_SELECTION:
            return {
                ...state,
                playerSelection: action.payload
            };
        case types.COMPUTER_SELECTION:
            return {
                ...state,
                computerSelection: action.payload
            };
        default:
            return state;
    }
}
