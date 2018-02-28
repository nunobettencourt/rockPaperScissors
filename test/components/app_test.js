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

});