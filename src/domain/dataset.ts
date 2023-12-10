import type { Badge } from './badge'
import type { SpatialCoverage, TemporalCoverage } from './coverage'
import type { Extras } from './extras'
import type { Internals } from './internals'
import type { DatasetMetrics } from './metrics'
import type { Quality } from './quality'
import type { OrganizationReference, UserReference } from './reference'
import type { Resource, CommunityResource } from './resource'

/**
 * @export
 * @interface Dataset
 */
export interface Dataset {
  /**
   * An optional dataset acronym
   * @type {string}
   * @memberof Dataset
   */
  acronym?: string
  /**
   * The archival date if archived
   * @type {string}
   * @memberof Dataset
   */
  archived?: string
  /**
   * The dataset badges
   * @type {Array<Badge>}
   * @memberof Dataset
   */
  badges?: Badge[]
  /**
   * ?
   * @type {Array<CommunityResource>}
   * @memberof Dataset
   */
  community_resources?: CommunityResource[]
  /**
   * This date is computed between harvested creation date if any and site\'s
   * internal creation date
   * @type {string}
   * @memberof Dataset
   */
  created_at: string
  /**
   * The deletion date if deleted
   * @type {string}
   * @memberof Dataset
   */
  deleted?: string
  /**
   * The dataset description in markdown
   * @type {string}
   * @memberof Dataset
   */
  description: string
  /**
   * Extras attributes as key-value pairs
   * @type {Extras}
   * @memberof Dataset
   */
  extras?: Extras
  /**
   * Is the dataset featured
   * @type {boolean}
   * @memberof Dataset
   */
  featured?: boolean
  /**
   * The update frequency
   * @type {string}
   * @memberof Dataset
   */
  frequency: DatasetFrequency['id']
  /**
   * Next expected update date, you will be notified once that date is reached.
   * @type {string}
   * @memberof Dataset
   */
  frequency_date?: string
  /**
   * ?
   * @type {HarvestDatasetMetadata}
   * @memberof Dataset
   */
  harvest?: HarvestDatasetMetadata
  /**
   * The dataset identifier
   * @type {string}
   * @memberof Dataset
   */
  id?: string
  /**
   * ?
   * @type {Internals}
   * @memberof Dataset
   */
  internal?: Internals
  /**
   * The dataset last modification date
   * @type {string}
   * @memberof Dataset
   */
  last_modified: string
  /**
   * The resources last modification date
   * @type {string}
   * @memberof Dataset
   */
  last_update: string
  /**
   * The dataset license
   * @type {string}
   * @memberof Dataset
   */
  license?: string
  /**
   * The dataset metrics
   * @type {DatasetMetrics}
   * @memberof Dataset
   */
  metrics?: DatasetMetrics
  /**
   * ?
   * @type {OrganizationReference}
   * @memberof Dataset
   */
  organization?: OrganizationReference
  /**
   * ?
   * @type {UserReference}
   * @memberof Dataset
   */
  owner?: UserReference
  /**
   * The dataset page URL
   * @type {string}
   * @memberof Dataset
   */
  page: string
  /**
   * Is the dataset private to the owner or the organization
   * @type {boolean}
   * @memberof Dataset
   */
  private?: boolean
  /**
   * The dataset quality
   * @type {Quality}
   * @memberof Dataset
   */
  quality?: Quality
  /**
   * ?
   * @type {Array<Resource>}
   * @memberof Dataset
   */
  resources?: Resource[]
  /**
   * The dataset permalink string
   * @type {string}
   * @memberof Dataset
   */
  slug: string
  /**
   * ?
   * @type {SpatialCoverage}
   * @memberof Dataset
   */
  spatial?: SpatialCoverage
  /**
   * ?
   * @type {Array<string>}
   * @memberof Dataset
   */
  tags?: string[]
  /**
   * ?
   * @type {TemporalCoverage}
   * @memberof Dataset
   */
  temporal_coverage?: TemporalCoverage
  /**
   * The dataset title
   * @type {string}
   * @memberof Dataset
   */
  title: string
  /**
   * The dataset API URI
   * @type {string}
   * @memberof Dataset
   */
  uri: string
}

/**
 * @export
 * @interface DatasetFrequency
 */
export interface DatasetFrequency {
  /**
   * The frequency identifier
   * @type {string}
   * @memberof DatasetFrequency
   */
  id?: DatasetFrequencyEnum
  /**
   * The frequency display name
   * @type {string}
   * @memberof DatasetFrequency
   */
  label?: string
}

/**
 * @export
 * @interface HarvestDatasetMetadata
 */
export interface HarvestDatasetMetadata {
  /**
   * The reason the dataset has been archived
   * @type {string}
   * @memberof HarvestDatasetMetadata
   */
  archived?: string
  /**
   * The archive date
   * @type {string}
   * @memberof HarvestDatasetMetadata
   */
  archived_at?: string
  /**
   * Harvest backend used
   * @type {string}
   * @memberof HarvestDatasetMetadata
   */
  backend?: string
  /**
   * The ckan name property for ckan harvested dataset
   * @type {string}
   * @memberof HarvestDatasetMetadata
   */
  ckan_name?: string
  /**
   * The ckan source property for ckan harvested dataset
   * @type {string}
   * @memberof HarvestDatasetMetadata
   */
  ckan_source?: string
  /**
   * The dataset harvested creation date
   * @type {string}
   * @memberof HarvestDatasetMetadata
   */
  created_at?: string
  /**
   * The dct:identifier property from the harvested dataset
   * @type {string}
   * @memberof HarvestDatasetMetadata
   */
  dct_identifier?: string
  /**
   * The harvested domain
   * @type {string}
   * @memberof HarvestDatasetMetadata
   */
  domain?: string
  /**
   * The last harvest date
   * @type {string}
   * @memberof HarvestDatasetMetadata
   */
  last_update?: string
  /**
   * The dataset harvest last modification date
   * @type {string}
   * @memberof HarvestDatasetMetadata
   */
  modified_at?: string
  /**
   * boolean for geo in dataset features
   * @type {boolean}
   * @memberof HarvestDatasetMetadata
   */
  ods_geo?: boolean
  /**
   * boolean for ods has_records
   * @type {boolean}
   * @memberof HarvestDatasetMetadata
   */
  ods_has_records?: boolean
  /**
   * The ods reference for ods  harvested dataset
   * @type {string}
   * @memberof HarvestDatasetMetadata
   */
  ods_references?: string
  /**
   * The ods url for ods harvested dataset
   * @type {string}
   * @memberof HarvestDatasetMetadata
   */
  ods_url?: string
  /**
   * The dataset remote id on the source portal
   * @type {string}
   * @memberof HarvestDatasetMetadata
   */
  remote_id?: string
  /**
   * The dataset remote url
   * @type {string}
   * @memberof HarvestDatasetMetadata
   */
  remote_url?: string
  /**
   * The harvester id
   * @type {string}
   * @memberof HarvestDatasetMetadata
   */
  source_id?: string
  /**
   * The dataset harvested uri
   * @type {string}
   * @memberof HarvestDatasetMetadata
   */
  uri?: string
}

export enum DatasetFrequencyEnum {
  Unknown = 'unknown',
  Punctual = 'punctual',
  Continuous = 'continuous',
  Hourly = 'hourly',
  FourTimesADay = 'fourTimesADay',
  ThreeTimesADay = 'threeTimesADay',
  Semidaily = 'semidaily',
  Daily = 'daily',
  FourTimesAWeek = 'fourTimesAWeek',
  ThreeTimesAWeek = 'threeTimesAWeek',
  Semiweekly = 'semiweekly',
  Weekly = 'weekly',
  Biweekly = 'biweekly',
  ThreeTimesAMonth = 'threeTimesAMonth',
  Semimonthly = 'semimonthly',
  Monthly = 'monthly',
  Bimonthly = 'bimonthly',
  Quarterly = 'quarterly',
  ThreeTimesAYear = 'threeTimesAYear',
  Semiannual = 'semiannual',
  Annual = 'annual',
  Biennial = 'biennial',
  Triennial = 'triennial',
  Quinquennial = 'quinquennial',
  Irregular = 'irregular'
}
