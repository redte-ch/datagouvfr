/**
 * Copyleft (ɔ) 2023 Mauko Quiroga-Alvarado <public@mauko.me>
 * Licensed under the EUPL-1.2-or-later
 * For details: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
 */
import type { Activity } from './activity'

/**
 * @export
 * @interface Page<T, U>
 */
export interface Page<T, U = T> {
  /**
   * The page data
   * @type {Array}
   * @memberof Page
   */
  data: T | U
  /**
   * The next page URL if exists
   * @type {string}
   * @memberof Page
   */
  nextPage?: string
  /**
   * The current page
   * @type {number}
   * @memberof Page
   */
  page: number
  /**
   * The page size used for pagination
   * @type {number}
   * @memberof Page
   */
  pageSize: number
  /**
   * The previous page URL if exists
   * @type {string | null}
   * @memberof Page
   */
  previousPage: string | null
  /**
   * The total paginated items
   * @type {number}
   * @memberof Page
   */
  total: number
}

/**
 * @export
 * @interface PageActivities
 */
export type PageActivities = Page<Activity[]>
