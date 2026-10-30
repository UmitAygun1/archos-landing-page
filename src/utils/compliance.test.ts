/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateEgressCompliance,
  verifySetbackCompliance,
  calculateFAR,
} from './compliance.ts';

test('IBC 2024 Table 1017.2 egress calculation for R-2 sprinklered', () => {
  const result = calculateEgressCompliance(184, true, 'R-2');
  assert.equal(result.isCompliant, true);
  assert.equal(result.maxAllowedDistanceFt, 250);
  assert.equal(result.marginFt, 66);
});

test('IBC 2024 egress calculation detects non-compliant egress path', () => {
  const result = calculateEgressCompliance(280, true, 'R-2');
  assert.equal(result.isCompliant, false);
  assert.equal(result.marginFt, -30);
});

test('Setback verification passes when all offsets meet or exceed requirements', () => {
  const setbacks = verifySetbackCompliance(
    { actual: 25, required: 20 },
    { actual: 12, required: 10 },
    { actual: 30, required: 25 }
  );
  assert.equal(setbacks.isCompliant, true);
  assert.equal(setbacks.front.pass, true);
  assert.equal(setbacks.side.pass, true);
  assert.equal(setbacks.rear.pass, true);
});

test('Setback verification flags encroachment violation', () => {
  const setbacks = verifySetbackCompliance(
    { actual: 18, required: 20 }, // Encroachment by 2 ft
    { actual: 12, required: 10 },
    { actual: 30, required: 25 }
  );
  assert.equal(setbacks.isCompliant, false);
  assert.equal(setbacks.front.pass, false);
});

test('Floor Area Ratio (FAR) calculates accurately', () => {
  const far = calculateFAR(90000, 30000, 3.5);
  assert.equal(far.actualFAR, 3.0);
  assert.equal(far.isCompliant, true);
  assert.equal(far.utilizationRate, 85.7);
});
