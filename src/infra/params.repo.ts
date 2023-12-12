/**
 * Copyleft (ɔ) 2023 Mauko Quiroga-Alvarado <public@mauko.me>
 * Licensed under the EUPL-1.2-or-later
 * For details: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
 */

/**
 * @export
 * @interface PageParams
 */
export interface PageParams {
  /**
   * The page to fetch
   * @type {number}
   * @memberof PageParams
   */
  page?: number | 1
  /**
   * The page size to fetch
   * @type {number}
   * @memberof PageParams
   */
  pageSize?: number | 20
}
