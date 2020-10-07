    
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
  return arrays.reduce((accumulator, current) => accumulator.concat(current), []);
}

assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);
