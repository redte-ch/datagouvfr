import type { Geometry, Feature, FeatureCollection } from 'geojson'

/**
 * @export
 * @interface GeoJSON
 */
export type GeoJSON = Geometry

/**
 * @export
 * @interface GeoJSONFeature
 */
export type GeoJSONFeature = Feature

/**
 * @export
 * @interface GeoJSONFeatureCollection
 */
export type GeoJSONFeatureCollection = FeatureCollection

/**
 * @export
 * @interface GeoLevel
 */
export interface GeoLevel {
  /**
   * The level identifier
   * @type {string}
   * @memberof GeoLevel
   */
  id: string
  /**
   * The level name
   * @type {string}
   * @memberof GeoLevel
   */
  name: string
}

/**
 * @export
 * @interface GeoGranularity
 */
export interface GeoGranularity {
  /**
   * The granularity identifier
   * @type {string}
   * @memberof GeoGranularity
   */
  id: string
  /**
   * The granularity name
   * @type {string}
   * @memberof GeoGranularity
   */
  name: string
}
