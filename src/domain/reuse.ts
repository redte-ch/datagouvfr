import type { Badge } from './badge'
import type { Dataset } from './dataset'
import type { Extras } from './extras'
import type { ReuseMetrics } from './metrics'
import type { OrganizationReference, UserReference } from './reference'

/**
 * @export
 * @interface Reuse
 */
export interface Reuse {
  /**
   * The reuse badges
   * @type {Array<Badge>}
   * @memberof Reuse
   */
  badges?: Badge[]
  /**
   * The reuse creation date
   * @type {string}
   * @memberof Reuse
   */
  created_at?: string
  /**
   * The reused datasets
   * @type {Array<Dataset>}
   * @memberof Reuse
   */
  datasets?: Dataset[]
  /**
   * The organization identifier
   * @type {string}
   * @memberof Reuse
   */
  deleted?: string
  /**
   * The reuse description in Markdown
   * @type {string}
   * @memberof Reuse
   */
  description: string
  /**
   * Extras attributes as key-value pairs
   * @type {Extras}
   * @memberof Reuse
   */
  extras?: Extras
  /**
   * Is the reuse featured
   * @type {boolean}
   * @memberof Reuse
   */
  featured?: boolean
  /**
   * The reuse identifier
   * @type {string}
   * @memberof Reuse
   */
  id?: string
  /**
   * The reuse thumbnail (cropped) URL
   * @type {string}
   * @memberof Reuse
   */
  image?: string
  /**
   * The reuse thumbnail URL (500x500 and cropped version)
   * @type {string}
   * @memberof Reuse
   */
  image_thumbnail?: string
  /**
   * The reuse last modification date
   * @type {string}
   * @memberof Reuse
   */
  last_modified?: string
  /**
   * The reuse metrics
   * @type {ReuseMetrics}
   * @memberof Reuse
   */
  metrics?: ReuseMetrics
  /**
   *
   * @type {OrganizationReference}
   * @memberof Reuse
   */
  organization?: OrganizationReference
  /**
   *
   * @type {UserReference}
   * @memberof Reuse
   */
  owner?: UserReference
  /**
   * The reuse page URL
   * @type {string}
   * @memberof Reuse
   */
  page?: string
  /**
   * Is the reuse private to the owner or the organization
   * @type {boolean}
   * @memberof Reuse
   */
  private?: boolean
  /**
   * The reuse permalink string
   * @type {string}
   * @memberof Reuse
   */
  slug?: string
  /**
   * Some keywords to help in search
   * @type {Array<string>}
   * @memberof Reuse
   */
  tags?: string[]
  /**
   * The reuse title
   * @type {string}
   * @memberof Reuse
   */
  title: string
  /**
   * The reuse topic
   * @type {string}
   * @memberof Reuse
   */
  topic: ReuseTopic['id']
  /**
   * The reuse type
   * @type {string}
   * @memberof Reuse
   */
  type: ReuseType['id']
  /**
   * The reuse API URI
   * @type {string}
   * @memberof Reuse
   */
  uri?: string
  /**
   * The reuse remote URL (website)
   * @type {string}
   * @memberof Reuse
   */
  url: string
}

/**
 * @export
 * @interface ReuseTopic
 */
export interface ReuseTopic {
  /**
   * The reuse topic identifier
   * @type {string}
   * @memberof ReuseTopic
   */
  id?: ReuseTopicEnum
  /**
   * The reuse topic display name
   * @type {string}
   * @memberof ReuseTopic
   */
  label?: string
}

/**
 * @export
 * @interface ReuseType
 */
export interface ReuseType {
  /**
   * The reuse type identifier
   * @type {string}
   * @memberof ReuseType
   */
  id?: ReuseTypeEnum
  /**
   * The reuse type display name
   * @type {string}
   * @memberof ReuseType
   */
  label?: string
}

export enum ReuseTopicEnum {
  Health = 'health',
  TransportAndMobility = 'transport_and_mobility',
  HousingAndDevelopment = 'housing_and_development',
  FoodAndAgriculture = 'food_and_agriculture',
  CultureAndRecreation = 'culture_and_recreation',
  EconomyAndBusiness = 'economy_and_business',
  EnvironmentAndEnergy = 'environment_and_energy',
  WorkAndTraining = 'work_and_training',
  PoliticsAndPublicLife = 'politics_and_public_life',
  SafetyAndSecurity = 'safety_and_security',
  EducationAndResearch = 'education_and_research',
  SocietyAndDemography = 'society_and_demography',
  LawAndJustice = 'law_and_justice',
  OpenDataTools = 'open_data_tools',
  Others = 'others'
}

export enum ReuseTypeEnum {
  Api = 'api',
  Application = 'application',
  Idea = 'idea',
  NewsArticle = 'news_article',
  Paper = 'paper',
  Post = 'post',
  Visualization = 'visualization',
  Hardware = 'hardware'
}
