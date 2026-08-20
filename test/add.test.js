import test from 'node:test';
import assert from 'node:assert/strict';
import {add} from "../src/add.js";

test('empty string returns 0', () => {
  assert.equal(add(''), '0');
});
