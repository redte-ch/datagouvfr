/**
 * Copyleft (ɔ) 2023 Mauko Quiroga-Alvarado <public@mauko.me>
 * Licensed under the EUPL-1.2-or-later
 * For details: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
 */

import type { Dataset } from './dataset'
import type { Extras } from './extras'
import type { OrganizationReference, UserReference } from './reference'
import type { Reuse } from './reuse'

/**
 * @export
 * @interface Topic
 */
export interface Topic {
  /**
   * The topic creation date
   * @type {string}
   * @memberof Topic
   */
  created_at?: string
  /**
   * The topic datasets
   * @type {Array<Dataset>}
   * @memberof Topic
   */
  datasets?: Dataset[]
  /**
   * The topic description in Markdown
   * @type {string}
   * @memberof Topic
   */
  description: string
  /**
   * Extras attributes as key-value pairs
   * @type {Extras}
   * @memberof Topic
   */
  extras?: Extras
  /**
   * Is the topic featured
   * @type {boolean}
   * @memberof Topic
   */
  featured?: boolean
  /**
   * The topic identifier
   * @type {string}
   * @memberof Topic
   */
  id?: string
  /**
   * The topic name
   * @type {string}
   * @memberof Topic
   */
  name: string
  /**
   *
   * @type {OrganizationReference}
   * @memberof Topic
   */
  organization?: OrganizationReference
  /**
   *
   * @type {UserReference}
   * @memberof Topic
   */
  owner?: UserReference
  /**
   * The topic page URL
   * @type {string}
   * @memberof Topic
   */
  page?: string
  /**
   * Is the topic private
   * @type {boolean}
   * @memberof Topic
   */
  private?: boolean
  /**
   * The topic reuses
   * @type {Array<Reuse>}
   * @memberof Topic
   */
  reuses?: Reuse[]
  /**
   * The topic permalink string
   * @type {string}
   * @memberof Topic
   */
  slug?: string
  /**
   * Some keywords to help in search
   * @type {Array<string>}
   * @memberof Topic
   */
  tags: string[]
  /**
   * The topic API URI
   * @type {string}
   * @memberof Topic
   */
  uri?: string
}
