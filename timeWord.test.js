const {timeWord} = require('./timeWord');
// const timeWord = require('/timeWord');


describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
});

test('it is a string', () => {
  const output = timeWord('00:00')
  expect(typeof output).toBe('string');
  expect(output).toBe('midnight');
});

test('it is a string', () => {
  const output = timeWord('14:22')
  expect(typeof output).toBe('string');
  expect(output).toBe('two twenty two pm');
});