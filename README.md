# stringcalculator

A tiny sandbox for practising **test-driven development** (TDD) in JavaScript.

No dependencies, no build step, no test framework to install — it uses the test
runner that ships inside Node.js itself (`node:test`, stable since Node 20).

## Requirements

- Node.js 20 or newer (you have v22, which is fine)

## Running the tests

```bash
npm test
```

You should see **1 passing test and 1 failing test**. The failure is on purpose —
see below.

To re-run the tests automatically every time you save a file:

```bash
npm run test:watch
```

Press `Ctrl-C` to stop watching.

To run just one file:

```bash
node --test test/returnsTrue.test.js
```

## What's in here

```
src/returnsTrue.js        the function under test
test/returnsTrue.test.js  the tests
package.json              defines `npm test`; "type": "module" enables import/export
```

`src/returnsTrue.js` exports a single function:

```js
export function returnsTrue() {
  return true;
}
```

`test/returnsTrue.test.js` has two tests against it. One asserts it returns
`true` (passes). One asserts it returns `false` (fails). The failing one is
there so you know what red looks like before you go chasing red of your own.

## Your first exercise

Make the failing test pass. There are two ways, and the difference between them
is the whole point of TDD:

1. **Fix the test.** The test is wrong — `returnsTrue` should return `true`.
   Change the assertion (or delete the test). Both tests are green, and the
   code still does what its name promises.
2. **Fix the code.** Make `returnsTrue()` return `false`. The second test goes
   green — and the first goes red. You can't satisfy both, because they
   contradict each other.

A test suite is a specification. When a test fails, the honest question is
always *"which one of us is wrong, the test or the code?"* — not *"how do I
make this go green?"*

## The TDD cycle

Once both tests are green, practise the loop properly. It has three steps:

1. **Red** — write a test for behaviour that doesn't exist yet. Run it. Watch it
   fail. (This step matters: a test you've never seen fail might not be testing
   anything.)
2. **Green** — write the smallest amount of code that makes it pass. Not the
   elegant version. The smallest one, even if it's embarrassing.
3. **Refactor** — now clean it up, with the tests there to tell you if you broke
   something.

Then repeat, one small behaviour at a time.

## Where to go next

This directory is named `stringcalculator` after the classic **String Calculator
kata** — the standard first exercise for learning TDD. The rules build up one
step at a time, which is exactly what you want when practising the red/green/
refactor loop.

Write a function `add(numbers)` that takes a string and returns a number. Do one
step at a time, and write the test *before* the code each time:

1. `add("")` returns `0`
2. `add("1")` returns `1`
3. `add("1,2")` returns `3`
4. Handle any amount of numbers: `add("1,2,3,4,5")` returns `15`
5. Handle newlines as separators too: `add("1\n2,3")` returns `6`
6. Support a custom delimiter: a string starting with `//;\n` means `;` is the
   separator, so `add("//;\n1;2")` returns `3`
7. Negative numbers throw an error naming the negatives found
8. Numbers larger than 1000 are ignored: `add("2,1001")` returns `2`

Create `src/add.js` and `test/add.test.js` and work through them in order.
Resist the urge to read ahead and design for step 8 while you're on step 2.

## Test-writing reference

The two things you need, both built into Node:

```js
import test from 'node:test';
import assert from 'node:assert/strict';
```

Assertions you'll reach for most:

```js
assert.equal(actual, expected);         // ===
assert.deepEqual(actual, expected);     // for objects and arrays
assert.ok(value);                       // truthy
assert.throws(() => add('-1'), /negative/);  // expects a throw
```

Grouping and skipping:

```js
test.skip('not ready yet', () => { /* ... */ });
test.todo('write this one');

test('a group of related cases', async (t) => {
  await t.test('one case', () => { /* ... */ });
  await t.test('another case', () => { /* ... */ });
});
```

Full docs: <https://nodejs.org/api/test.html>
