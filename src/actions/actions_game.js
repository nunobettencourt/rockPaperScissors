import * as types from './types';

function getResult(userSelection, computerSelection) {
    let result = '';

    if (userSelection === computerSelection) {
        result = 'Draw';
    } else {
        switch (userSelection) {
            case 'Rock':
                result = (computerSelection === 'Scissors') ? 'Player' : 'Computer';
                break;
            case 'Scissors':
                result = (computerSelection === 'Paper') ? 'Player' : 'Computer';
                break;
            case 'Paper':
                result = (computerSelection === 'Rock') ? 'Player' : 'Computer';
                break;
            default:
                result = 'Draw';
                break;
        }
    }
    return result;
}

export function newGame(userSelection) {
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
        return dispatch({
            type: types.SET_WINNER,
            payload: getResult(userSelection, computerSelection)
        });
    }
}
