import * as types from './types';

export function newPlay(userSelection) {
    return function (dispatch, getState) {

        const { options } = getState();

        const computerSelection = options[Math.floor(Math.random() * 3)];

        dispatch({
            type: types.PLAYER_SELECTION,
            payload: userSelection
        });
        dispatch({
            type: types.COMPUTER_SELECTION,
            payload: computerSelection
        });

    }
}
