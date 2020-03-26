import { add } from './utils';

describe('writing specs in typescript', () => {
    it('is easy', () => {
        expect(true).toBe(true);
    });
    it('can add', () => {
        expect(add(2, 2)).toBe(4);
    });
});
describe('writying a basic spec', () => {
    it('an example of this', () => {
        const myName = 'Craig';
        expect(myName.length).toBe(5);
    });
});
describe('using the snippets', () => {
    it('pretty cool', () => {

    });
});
