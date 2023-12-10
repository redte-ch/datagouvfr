/**
 * Copyleft (ɔ) 2023 Mauko Quiroga-Alvarado <public@mauko.me>
 * Licensed under the EUPL-1.2-or-later
 * For details: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
 */

/**
 * @export
 * @interface Suggestion
 */
export interface Suggestion {
  /**
   * The suggested object's id
   * @type {string}
   * @memberof Suggestion
   */
  id?: string
  /**
   * The object's permalink string
   * @type {string}
   * @memberof DatasetSuggestion
   */
  slug?: string
}

/**
 * @export
 * @interface DatasetSuggestion
 */
export interface DatasetSuggestion extends Suggestion {
  /**
   * An optional dataset acronym
   * @type {string}
   * @memberof DatasetSuggestion
   */
  acronym?: string
  /**
   * The dataset (organization) logo URL
   * @type {string}
   * @memberof DatasetSuggestion
   */
  image_url?: string
  /**
   * The web page URL for this dataset
   * @type {string}
   * @memberof DatasetSuggestion
   */
  page?: string
  /**
   * The dataset title
   * @type {string}
   * @memberof DatasetSuggestion
   */
  title?: string
}

/**
 * @export
 * @interface OrganizationSuggestion
 */
export interface OrganizationSuggestion extends Suggestion {
  /**
   * The organization acronym
   * @type {string}
   * @memberof OrganizationSuggestion
   */
  acronym?: string
  /**
   * The organization logo URL
   * @type {string}
   * @memberof OrganizationSuggestion
   */
  image_url?: string
  /**
   * The organization name
   * @type {string}
   * @memberof OrganizationSuggestion
   */
  name?: string
  /**
   * The organization web page URL
   * @type {string}
   * @memberof OrganizationSuggestion
   */
  page?: string
}

/**
 * @export
 * @interface ReuseSuggestion
 */
export interface ReuseSuggestion extends Suggestion {
  /**
   * The reuse thumbnail URL
   * @type {string}
   * @memberof ReuseSuggestion
   */
  image_url?: string
  /**
   * The reuse page URL
   * @type {string}
   * @memberof ReuseSuggestion
   */
  page?: string
  /**
   * The reuse title
   * @type {string}
   * @memberof ReuseSuggestion
   */
  title?: string
}

/**
 * @export
 * @interface TerritorySuggestion
 */
export interface TerritorySuggestion extends Omit<Suggestion, 'slug'> {
  /**
   * The territory main code
   * @type {string}
   * @memberof TerritorySuggestion
   */
  code: string
  /**
   * The territory administrative level
   * @type {string}
   * @memberof TerritorySuggestion
   */
  level: string
  /**
   * The territory name
   * @type {string}
   * @memberof TerritorySuggestion
   */
  name: string
  /**
   * The zone uri
   * @type {string}
   * @memberof TerritorySuggestion
   */
  uri: string
}

/**
 * @export
 * @interface UserSuggestion
 */
export interface UserSuggestion extends Suggestion {
  /**
   * The user avatar URL
   * @type {string}
   * @memberof UserSuggestion
   */
  avatar_url?: string
  /**
   * The user first name
   * @type {string}
   * @memberof UserSuggestion
   */
  first_name?: string
  /**
   * The user last name
   * @type {string}
   * @memberof UserSuggestion
   */
  last_name?: string
}
