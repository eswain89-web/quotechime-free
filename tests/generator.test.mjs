import test from 'node:test';
import assert from 'node:assert/strict';
import { buildSequence, sequenceAsText } from '../src/generator.js';

test('creates the complete four-touch sequence', () => {
  const sequence = buildSequence({
    business: 'Blue Gum Plumbing', customer: 'Sam',
    service: 'tap replacement', amount: 1850,
    availability: '24 August', tone: 'warm',
  });
  assert.equal(sequence.length, 4);
  assert.match(sequence[0].body, /Blue Gum Plumbing/);
  assert.match(sequence[1].body, /\$1,850/);
  assert.match(sequenceAsText(sequence), /Close the loop/);
});

test('does not make network calls or require dependencies', async () => {
  const original = globalThis.fetch;
  globalThis.fetch = () => { throw new Error('Network call attempted'); };
  try {
    assert.equal(buildSequence({}).length, 4);
  } finally {
    globalThis.fetch = original;
  }
});
