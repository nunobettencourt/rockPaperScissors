import { expect } from '../test_helper';
import GameReducer from '../../src/reducers/reducer_game';
import { PLAYER_SELECTION } from "../../src/actions/types";

describe('Game Reducer', () => {

    it('should handle action of unknown type', () => {
        const action = { type: ''};
        expect(GameReducer({}, action)).to.deep.equal({});
    });

    it('should handle action of type "PLAYER_SELECTION"', () => {
        const action = { type: PLAYER_SELECTION, payload: 'Paper'};
        expect(GameReducer({}, action)).to.deep.equal({ playerSelection: 'Paper' });
    });
});