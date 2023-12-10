/**
 * Copyleft (ɔ) 2023 Mauko Quiroga-Alvarado <public@mauko.me>
 * Licensed under the EUPL-1.2-or-later
 * For details: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
 */

import type { ApiKey } from './apikey'
import type { User } from './user'

/**
 * @export
 * @interface Me
 */
export interface Me extends User {
  /**
   * The user API Key
   * @type {string}
   * @memberof Me
   */
  apikey?: ApiKey['apikey']
}
