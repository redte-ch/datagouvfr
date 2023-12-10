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
