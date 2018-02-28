import { expect } from '../test_helper';
import { PLAYER_SELECTION } from "../../src/actions/types";
import { playerSelection } from "../../src/actions";

describe('Game actions', () => {
   describe('playerSelection', () => {
      it('has the correct type', () => {
          const action = playerSelection();
          expect(action.type).to.equal(PLAYER_SELECTION);
      });

       it('has the correct payload', () => {
           const action = playerSelection('Paper');
            expect(action.payload).to.equal('Paper');
       });

   });
});