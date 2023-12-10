/**
 * Copyleft (ɔ) 2023 Mauko Quiroga-Alvarado <public@mauko.me>
 * Licensed under the EUPL-1.2-or-later
 * For details: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
 */

/**
 * @export
 * @interface DataError
 */
export interface DataError {
  /**
   *
   * @type {string}
   * @memberof DataError
   */
  message?: string
}

/**
 * @export
 * @interface HarvestError
 */
export interface HarvestError {
  /**
   * The error creation date
   * @type {string}
   * @memberof HarvestError
   */
  created_at: string
  /**
   * Optional details (ie. stacktrace)
   * @type {string}
   * @memberof HarvestError
   */
  details?: string
  /**
   * The error short message
   * @type {string}
   * @memberof HarvestError
   */
  message: string
}
