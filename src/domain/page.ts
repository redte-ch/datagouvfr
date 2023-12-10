import type { DataError } from './error'

/**
 * @export
 * @interface Page
 */
export interface Page<T> {
  /**
   * The page data
   * @type {Array}
   * @memberof Page
   */
  data?: T[] | DataError
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
   * @type {string}
   * @memberof Page
   */
  previousPage?: string
  /**
   * The total paginated items
   * @type {number}
   * @memberof Page
   */
  total: number
}
