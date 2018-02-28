import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App' , () => {
    let component;

    beforeEach(() => {
        component = renderComponent(App);
    });

    it('should be rendered', () => {
        expect(component).to.exist;
    });

    it('should contain the "app" class', () => {
        expect(component).to.have.class('app');
    });

    describe('Child Components', () => {

        it('should include "GameControls', () => {
            expect(component.find('.game-controls')).to.exist;
        });

        it('should include "ScoreBoard', () => {
            expect(component.find('.score-board')).to.exist;
        });
    })

});