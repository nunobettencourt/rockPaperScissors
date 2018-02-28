import * as types from '../actions/types';

const INITIAL_STATE = {
    Player: 0,
    Computer: 0,
    Draw: 0
};

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
        case types.SET_WINNER:
            return {
                ...state,
                [action.payload]: state[action.payload] + 1
            };
        default:
            return state;
    }
}