import test from 'node:test';
import assert from 'node:assert/strict';
import {add} from "../src/add.js";

test('empty string returns 0', () => {
  assert.equal(add(''), '0');
});

test('1 returns 1', () => {
  assert.equal(add('1'), '1');
});

test('2 returns 2', () => {
  assert.equal(add('2'), '2');
});
