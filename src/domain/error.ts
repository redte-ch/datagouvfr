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
