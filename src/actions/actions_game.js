import * as types from './types';

export function playerSelection(option) {
    return {
        type: types.PLAYER_SELECTION,
        payload: option
    }
}
