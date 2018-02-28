import { expect} from "../test_helper";
import OptionsReducer from '../../src/reducers/reducer_options';

describe('OptionsReducer', () => {
    it('should be a function', () => {
        expect(OptionsReducer).to.be.a('function');
    });

    describe('Returned value', () => {

        it('should be an array', () => {
            expect(OptionsReducer()).to.be.an('array');
        });

        it('should have a length of 3', () => {
            expect(OptionsReducer().length).to.equal(3);
        });

        it('should contain the values "Rock", "Paper" and "Scissors"', () => {
            expect(OptionsReducer()).to.contain('Rock');
            expect(OptionsReducer()).to.contain('Paper');
            expect(OptionsReducer()).to.contain('Scissors');
        })

    });

});