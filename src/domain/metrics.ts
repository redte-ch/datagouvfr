/**
 * Copyleft (ɔ) 2023 Mauko Quiroga-Alvarado <public@mauko.me>
 * Licensed under the EUPL-1.2-or-later
 * For details: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
 */

/**
 * @export
 * @interface Metrics
 */
export type Metrics = Record<string, number | string>

/**
 * @export
 * @interface DatasetMetrics
 */
export interface DatasetMetrics extends Partial<Metrics> {
  /**
   * The dataset\'s discussions number
   * @type {number}
   * @memberof DatasetMetrics
   */
  discussions: number
  /**
   * The dataset\'s followers number
   * @type {number}
   * @memberof DatasetMetrics
   */
  followers: number
  /**
   * The dataset\'s reuses number
   * @type {number}
   * @memberof DatasetMetrics
   */
  reuses: number
  /**
   * The dataset\'s views number
   * @type {number}
   * @memberof DatasetMetrics
   */
  views: number
}

/**
 * @export
 * @interface OrganizationMetrics
 */
export interface OrganizationMetrics extends Partial<Metrics> {
  /**
   * The organizations\'s datasets number
   * @type {number}
   * @memberof OrganizationMetrics
   */
  datasets: number
  /**
   * The organizations\'s followers number
   * @type {number}
   * @memberof OrganizationMetrics
   */
  followers: number
  /**
   * The organizations\'s members number
   * @type {number}
   * @memberof OrganizationMetrics
   */
  members: number
  /**
   * The organizations\'s reuses number
   * @type {number}
   * @memberof OrganizationMetrics
   */
  reuses: number
  /**
   * The organizations\'s views number
   * @type {number}
   * @memberof OrganizationMetrics
   */
  views: number
}

export interface ReuseMetrics extends Partial<Metrics> {
  /**
   * The reuse\'s discussions number
   * @type {number}
   * @memberof DatasetMetrics
   */
  discussions: number
  /**
   * The reuse\'s followers number
   * @type {number}
   * @memberof DatasetMetrics
   */
  followers: number
  /**
   * The reuse\'s datasets number
   * @type {number}
   * @memberof DatasetMetrics
   */
  datasets: number
  /**
   * The reuse\'s views number
   * @type {number}
   * @memberof DatasetMetrics
   */
  views: number
}

/**
 * @export
 * @interface SiteMetrics
 */
export interface SiteMetrics extends Partial<Metrics> {
  /**
   * The site datasets number
   * @type {number}
   * @memberof SiteMetrics
   */
  datasets: number
  /**
   * The site discussions number
   * @type {number}
   * @memberof SiteMetrics
   */
  discussions: number
  /**
   * The site followers number
   * @type {number}
   * @memberof SiteMetrics
   */
  followers: number
  /**
   * The site harvesters number
   * @type {number}
   * @memberof SiteMetrics
   */
  harvesters: number
  /**
   * ?
   * @type {number}
   * @memberof SiteMetrics
   */
  maxDatasetFollowers: number
  /**
   * ?
   * @type {number}
   * @memberof SiteMetrics
   */
  maxDatasetReuses: number
  /**
   * ?
   * @type {number}
   * @memberof SiteMetrics
   */
  maxOrgDatasets: number
  /**
   * ?
   * @type {number}
   * @memberof SiteMetrics
   */
  maxOrgFollowers: number
  /**
   * ?
   * @type {number}
   * @memberof SiteMetrics
   */
  maxOrgReuses: number
  /**
   * ?
   * @type {number}
   * @memberof SiteMetrics
   */
  maxReuseDatasets: number
  /**
   * ?
   * @type {number}
   * @memberof SiteMetrics
   */
  maxReuseFollowers: number
  /**
   * The site organizations number
   * @type {number}
   * @memberof SiteMetrics
   */
  organizations: number
  /**
   * ?
   * @type {number}
   * @memberof SiteMetrics
   */
  publicService: number
  /**
   * The site resources number
   * @type {number}
   * @memberof SiteMetrics
   */
  resources: number
  /**
   * The site reuses number
   * @type {number}
   * @memberof SiteMetrics
   */
  reuses: number
  /**
   * The site users number
   * @type {number}
   * @memberof SiteMetrics
   */
  users: number
}

/**
 * @export
 * @interface UserMetrics
 */
export interface UserMetrics extends Partial<Metrics> {
  /**
   * The user\'s datasets number
   * @type {number}
   * @memberof UserMetrics
   */
  datasets: number
  /**
   * The user\'s followers number
   * @type {number}
   * @memberof UserMetrics
   */
  followers: number
  /**
   * The user\'s following number
   * @type {number}
   * @memberof UserMetrics
   */
  following: number
  /**
   * The user\'s reuses number
   * @type {string}
   * @memberof UserMetrics
   */
  reuses: number
}

/**
 * @export
 * @interface MyMetrics
 */
export interface MyMetrics extends Partial<Metrics> {
  /**
   * The user\'s datasets number
   * @type {number}
   * @memberof MyMetrics
   */
  datasetsCount: number
  /**
   * The user\'s orgs datasets number
   * @type {number}
   * @memberof MyMetrics
   */
  datasetsOrgCount: number
  /**
   * The user\'s followers number
   * @type {number}
   * @memberof MyMetrics
   */
  followersCount: number
  /**
   * The user\'s organization followers number
   * @type {number}
   * @memberof MyMetrics
   */
  followersOrgCount: number
  /**
   * The user identifier
   * @type {string}
   * @memberof MyMetrics
   */
  id: string
  /**
   * The user\'s resources availability percentage
   * @type {number}
   * @memberof MyMetrics
   */
  resourcesAvailability: number
}
