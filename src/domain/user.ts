/**
 * Copyleft (ɔ) 2023 Mauko Quiroga-Alvarado <public@mauko.me>
 * Licensed under the EUPL-1.2-or-later
 * For details: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
 */
import type { Email } from './email'
import type { UserMetrics } from './metrics'
import type { OrganizationReference, UserReference } from './reference'
import type { UserRole } from './role'

/**
 * @export
 * @interface User
 */
export interface User extends UserReference {
  /**
   * The user self description
   * @type {string}
   * @memberof User
   */
  about?: string
  /**
   *
   * @type {boolean}
   * @memberof User
   */
  active?: boolean
  /**
   * The user email
   * @type {Email}
   * @memberof User
   */
  email?: Email
  /**
   * The user identifier
   * @type {string}
   * @memberof User
   */
  id: string
  /**
   * The user metrics
   * @type {MyMetrics}
   * @memberof User
   */
  metrics?: UserMetrics
  /**
   * The organization the user belongs to
   * @type {Array<OrganizationReference>}
   * @memberof User
   */
  organizations?: OrganizationReference[]
  /**
   * Site wide user roles
   * @type {Array<string>}
   * @memberof User
   */
  roles?: Array<UserRole['name']>
  /**
   * The registration date
   * @type {string}
   * @memberof User
   */
  since: string
  /**
   * The user website
   * @type {string}
   * @memberof User
   */
  website?: string
}
