import test from 'node:test';
import assert from 'node:assert/strict';
import {add} from "../src/add.js";

test('empty string returns 0', () => {
  assert.equal(add(''), '0');
});

const testCases = [
  ['1', '1'],
  ['2', '2'],
  ['369', '369'],
  ['1.1,2.2', '3.3'],
  ['1.111,2.222', '3.333']
];

for (const [input, expected] of testCases) {
  test(`add with ${input} returns ${expected}`, () => {
    assert.equal(add(input), expected);
  });
}
