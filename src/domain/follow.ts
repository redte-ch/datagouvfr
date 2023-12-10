import type { UserReference } from './reference'

/**
 * @export
 * @interface Follow
 */
export interface Follow {
  /**
   * ?
   * @type {UserReference}
   * @memberof Follow
   */
  follower?: UserReference
  /**
   * The follow object technical ID
   * @type {string}
   * @memberof Follow
   */
  id?: string
  /**
   * The date from which the user started following
   * @type {string}
   * @memberof Follow
   */
  since?: string
}
