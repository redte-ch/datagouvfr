import type { Member } from './member'
import type { OrganizationMetrics } from './metrics'

/**
 * @export
 * @interface Organization
 */
export interface Organization {
  /**
   * The organization\'s business identification number.
   * @type {string}
   * @memberof Organization
   */
  business_number_id?: string
  /**
   * The organization creation date
   * @type {string}
   * @memberof Organization
   */
  created_at?: string
  /**
   * The organization deletion date if deleted
   * @type {string}
   * @memberof Organization
   */
  deleted?: string
  /**
   * The organization description in Markdown
   * @type {string}
   * @memberof Organization
   */
  description: string
  /**
   * The organization identifier
   * @type {string}
   * @memberof Organization
   */
  id: string
  /**
   * The organization last modification date
   * @type {string}
   * @memberof Organization
   */
  last_modified?: string
  /**
   * ?
   * @type {Array<Member>}
   * @memberof Organization
   */
  members?: Member[]
  /**
   * The organization metrics
   * @type {OrganizationMetrics}
   * @memberof Organization
   */
  metrics?: OrganizationMetrics
  /**
   * The organization website URL
   * @type {string}
   * @memberof Organization
   */
  url?: string
}
