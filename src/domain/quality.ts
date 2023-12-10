/**
 * Copyleft (ɔ) 2023 Mauko Quiroga-Alvarado <public@mauko.me>
 * Licensed under the EUPL-1.2-or-later
 * For details: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
 */

/**
 * @export
 * @interface Quality
 */
export interface Quality {
  /**
   * ?
   * @type {boolean}
   * @memberof Quality
   */
  all_resources_available: boolean
  /**
   * ?
   * @type {boolean}
   * @memberof Quality
   */
  dataset_description_quality: boolean
  /**
   * ?
   * @type {boolean}
   * @memberof Quality
   */
  has_open_format: boolean
  /**
   * ?
   * @type {boolean}
   * @memberof Quality
   */
  has_resources: boolean
  /**
   * ?
   * @type {boolean}
   * @memberof Quality
   */
  license: boolean
  /**
   * ?
   * @type {boolean}
   * @memberof Quality
   */
  resources_documentation: boolean
  /**
   * ?
   * @type {number}
   * @memberof Quality
   */
  score: number
  /**
   * ?
   * @type {boolean}
   * @memberof Quality
   */
  spatial: boolean
  /**
   * ?
   * @type {boolean}
   * @memberof Quality
   */
  temporal_coverage: boolean
  /**
   * ?
   * @type {boolean}
   * @memberof Quality
   */
  update_frequency: boolean
  /**
   * ?
   * @type {boolean}
   * @memberof Quality
   */
  update_fulfilled_in_time: boolean
}
