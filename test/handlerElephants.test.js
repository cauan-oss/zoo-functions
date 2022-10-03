const { TestScheduler } = require('jest');
const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
    it(
    expect(handlerElephants('count')).toBe(4);
    expect(handlerElephants('names')).toEqual(["Ilana", "Orval", "Bea", "Jefferson"]);
);
});
