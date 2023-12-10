/**
 * Copyleft (ɔ) 2023 Mauko Quiroga-Alvarado <public@mauko.me>
 * Licensed under the EUPL-1.2-or-later
 * For details: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
 */

import type { GeoJSON } from './geo'

/**
 * @export
 * @interface SpatialCoverage
 */
export interface SpatialCoverage {
  /**
   *
   * @type {GeoJSON}
   * @memberof SpatialCoverage
   */
  geom?: GeoJSON
  /**
   * The spatial/territorial granularity
   * @type {string}
   * @memberof SpatialCoverage
   */
  granularity?: string
  /**
   * The covered zones identifiers
   * @type {Array<string>}
   * @memberof SpatialCoverage
   */
  zones?: string[]
}

/**
 * @export
 * @interface TemporalCoverage
 */
export interface TemporalCoverage {
  /**
   * The temporal coverage end date
   * @type {string}
   * @memberof TemporalCoverage
   */
  end: string
  /**
   * The temporal coverage start date
   * @type {string}
   * @memberof TemporalCoverage
   */
  start: string
}
