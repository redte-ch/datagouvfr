/**
 * Copyleft (ɔ) 2023 Mauko Quiroga-Alvarado <public@mauko.me>
 * Licensed under the EUPL-1.2-or-later
 * For details: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
 */

import type { Badge } from './badge'

/**
 * @export
 * @interface Reference
 */
export interface Reference {
  /**
   * The object class
   * @type {string}
   * @memberof Reference
   */
  class: string
  /**
   * The object unique identifier
   * @type {string}
   * @memberof Reference
   */
  id: string
}

/**
 * @export
 * @interface DatasetReference
 */
export interface DatasetReference extends Reference {
  /**
   * An optional dataset acronym
   * @type {string}
   * @memberof DatasetReference
   */
  acronym?: string
  /**
   * The web page URL for this dataset
   * @type {string}
   * @memberof DatasetReference
   */
  page?: string
  /**
   * The dataset title
   * @type {string}
   * @memberof DatasetReference
   */
  title?: string
  /**
   * The API URI for this dataset
   * @type {string}
   * @memberof DatasetReference
   */
  uri?: string
}

/**
 * @export
 * @interface OrganizationReference
 */
export interface OrganizationReference extends Reference {
  /**
   * The organization acronym
   * @type {string}
   * @memberof OrganizationReference
   */
  acronym?: string
  /**
   * The organization badges
   * @type {Array<Badge>}
   * @memberof OrganizationReference
   */
  badges?: Badge[]
  /**
   * The organization logo URL
   * @type {string}
   * @memberof OrganizationReference
   */
  logo?: string
  /**
   * The organization logo thumbnail URL (100x100 and cropped version)
   * @type {string}
   * @memberof OrganizationReference
   */
  logo_thumbnail?: string
  /**
   * The organization name
   * @type {string}
   * @memberof OrganizationReference
   */
  name?: string
  /**
   * The organization web page URL
   * @type {string}
   * @memberof OrganizationReference
   */
  page?: string
  /**
   * The organization string used as permalink
   * @type {string}
   * @memberof OrganizationReference
   */
  slug: string
  /**
   * The organization API URI
   * @type {string}
   * @memberof OrganizationReference
   */
  uri?: string
}

/**
 * @export
 * @interface ReuseReference
 */
export interface ReuseReference extends Reference {
  /**
   * The reuse thumbnail (cropped) URL
   * @type {string}
   * @memberof ReuseReference
   */
  image?: string
  /**
   * The reuse thumbnail URL. This is the square (500x500) and cropped version.
   * @type {string}
   * @memberof ReuseReference
   */
  image_thumbnail?: string
  /**
   * The reuse page URL
   * @type {string}
   * @memberof ReuseReference
   */
  page?: string
  /**
   * The reuse title
   * @type {string}
   * @memberof ReuseReference
   */
  title?: string
  /**
   * The reuse API URI
   * @type {string}
   * @memberof ReuseReference
   */
  uri?: string
}

/**
 * @export
 * @interface UserReference
 */
export interface UserReference extends Reference {
  /**
   * The user avatar URL
   * @type {string}
   * @memberof UserReference
   */
  avatar?: string
  /**
   * The user avatar thumbnail URL (500x500 and cropped version)
   * @type {string}
   * @memberof UserReference
   */
  avatar_thumbnail?: string
  /**
   * The user first name
   * @type {string}
   * @memberof UserReference
   */
  first_name?: string
  /**
   * The user last name
   * @type {string}
   * @memberof UserReference
   */
  last_name?: string
  /**
   * The user profile page URL
   * @type {string}
   * @memberof UserReference
   */
  page?: string
  /**
   * The user permalink string
   * @type {string}
   * @memberof UserReference
   */
  slug: string
  /**
   * The user API URI
   * @type {string}
   * @memberof UserReference
   */
  uri: string
}
