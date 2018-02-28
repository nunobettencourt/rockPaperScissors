import { renderComponent , expect } from '../test_helper';
import ScoreBoard from '../../src/components/score_board';

describe('ScoreBoard' , () => {
    let component;

    beforeEach(() => {
        component = renderComponent(ScoreBoard);
    });

    it('should be rendered', () => {
        expect(component).to.exist;
    });

    it('should contain the "score-board" class', () => {
        expect(component).to.have.class('score-board');
    });

    describe('Component cards', () => {

        it('should be 2', () => {
            expect(component.find('.card').length).to.equal(2);
        });

    });

});