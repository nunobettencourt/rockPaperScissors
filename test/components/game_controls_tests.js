import { renderComponent , expect } from '../test_helper';
import GameControls from '../../src/components/game_controls';

describe('GameControls' , () => {
    let component;

    beforeEach(() => {
        component = renderComponent(GameControls);
    });

    it('should be rendered', () => {
        expect(component).to.exist;
    });

    it('should contain the "user-input" class', () => {
        expect(component).to.have.class('game-controls');
    });

    describe('Component buttons', () => {

        it('should have a length of 3', () => {
            expect(component.find('button').length).to.equal(3);
        });

    });

});