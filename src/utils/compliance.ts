/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * ArchOS Core Deterministic AEC Compliance Engine
 * Validates spatial, zoning, and IBC 2024 building code invariants.
 */

export type OccupancyGroup = 'B' | 'M' | 'R-2' | 'A-1' | 'I-2';

export interface EgressAuditResult {
  isCompliant: boolean;
  maxAllowedDistanceFt: number;
  actualDistanceFt: number;
  marginFt: number;
  citation: string;
}

export interface SetbackAuditResult {
  isCompliant: boolean;
  front: { actual: number; required: number; pass: boolean };
  side: { actual: number; required: number; pass: boolean };
  rear: { actual: number; required: number; pass: boolean };
}

export interface FARAuditResult {
  isCompliant: boolean;
  actualFAR: number;
  maxFAR: number;
  utilizationRate: number;
}

/**
 * Validates travel distance according to IBC 2024 Section 1017.2
 */
export function calculateEgressCompliance(
  actualDistanceFt: number,
  hasSprinklers: boolean,
  occupancy: OccupancyGroup = 'R-2'
): EgressAuditResult {
  // IBC 2024 Table 1017.2 Exit Access Travel Distances
  let maxAllowed = 200;
  if (occupancy === 'R-2') {
    maxAllowed = hasSprinklers ? 250 : 200;
  } else if (occupancy === 'B') {
    maxAllowed = hasSprinklers ? 300 : 200;
  } else if (occupancy === 'M') {
    maxAllowed = hasSprinklers ? 250 : 200;
  } else if (occupancy === 'A-1') {
    maxAllowed = hasSprinklers ? 250 : 200;
  }

  const isCompliant = actualDistanceFt <= maxAllowed;
  return {
    isCompliant,
    maxAllowedDistanceFt: maxAllowed,
    actualDistanceFt,
    marginFt: maxAllowed - actualDistanceFt,
    citation: `IBC 2024 §1017.2 [Table 1017.2, Group ${occupancy}, ${hasSprinklers ? 'Sprinklered NFPA 13' : 'Non-Sprinklered'}]`,
  };
}

/**
 * Validates lot setback boundary offsets
 */
export function verifySetbackCompliance(
  front: { actual: number; required: number },
  side: { actual: number; required: number },
  rear: { actual: number; required: number }
): SetbackAuditResult {
  const frontPass = front.actual >= front.required;
  const sidePass = side.actual >= side.required;
  const rearPass = rear.actual >= rear.required;

  return {
    isCompliant: frontPass && sidePass && rearPass,
    front: { actual: front.actual, required: front.required, pass: frontPass },
    side: { actual: side.actual, required: side.required, pass: sidePass },
    rear: { actual: rear.actual, required: rear.required, pass: rearPass },
  };
}

/**
 * Calculates Floor Area Ratio (FAR) and lot coverage
 */
export function calculateFAR(
  grossFloorAreaSqFt: number,
  lotAreaSqFt: number,
  maxFAR: number
): FARAuditResult {
  if (lotAreaSqFt <= 0) {
    throw new Error('Lot area must be greater than zero');
  }
  const actualFAR = Number((grossFloorAreaSqFt / lotAreaSqFt).toFixed(2));
  return {
    isCompliant: actualFAR <= maxFAR,
    actualFAR,
    maxFAR,
    utilizationRate: Number(((actualFAR / maxFAR) * 100).toFixed(1)),
  };
}
