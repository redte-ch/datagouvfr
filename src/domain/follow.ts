/**
 * Copyleft (ɔ) 2023 Mauko Quiroga-Alvarado <public@mauko.me>
 * Licensed under the EUPL-1.2-or-later
 * For details: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
 */

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
