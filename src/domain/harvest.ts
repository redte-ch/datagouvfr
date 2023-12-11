/**
 * Copyleft (ɔ) 2023 Mauko Quiroga-Alvarado <public@mauko.me>
 * Licensed under the EUPL-1.2-or-later
 * For details: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
 */
import type { HarvestConfig } from './config'
import type { HarvestError } from './error'
import type { Kwargs } from './kwargs'
import type {
  DatasetReference,
  OrganizationReference,
  UserReference
} from './reference'

/**
 * @export
 * @interface HarvestBackend
 */
export interface HarvestBackend {
  /**
   * The backend optional features
   * @type {Array<HarvestFeature>}
   * @memberof HarvestBackend
   */
  features?: HarvestFeature[]
  /**
   * The backend supported filters
   * @type {Array<HarvestFilter>}
   * @memberof HarvestBackend
   */
  filters?: HarvestFilter[]
  /**
   * The backend identifier
   * @type {string}
   * @memberof HarvestBackend
   */
  id?: HarvestBackendEnum
  /**
   * The backend display name
   * @type {string}
   * @memberof HarvestBackend
   */
  label?: string
}

/**
 * @export
 * @interface HarvestFeature
 */
export interface HarvestFeature {
  /**
   * The feature default state (true is enabled)
   * @type {string}
   * @memberof HarvestFeature
   */
  default?: string
  /**
   * Some details about the behavior
   * @type {string}
   * @memberof HarvestFeature
   */
  description?: string
  /**
   * The feature key
   * @type {string}
   * @memberof HarvestFeature
   */
  key?: string
  /**
   * A localized human-readable and descriptive label
   * @type {string}
   * @memberof HarvestFeature
   */
  label?: string
}

/**
 * @export
 * @interface HarvestFilter
 */
export interface HarvestFilter {
  /**
   * The filter details
   * @type {string}
   * @memberof HarvestFilter
   */
  description?: string
  /**
   * The filter key
   * @type {string}
   * @memberof HarvestFilter
   */
  key?: string
  /**
   * A localized human-readable label
   * @type {string}
   * @memberof HarvestFilter
   */
  label?: string
  /**
   * The filter expected type
   * @type {string}
   * @memberof HarvestFilter
   */
  type?: string
}

/**
 * @export
 * @interface HarvestItem
 */
export interface HarvestItem {
  /**
   * The item positional arguments
   * @type {Array<string>}
   * @memberof HarvestItem
   */
  args?: string[]
  /**
   * The item creation date
   * @type {string}
   * @memberof HarvestItem
   */
  created: string
  /**
   * ?
   * @type {DatasetReference}
   * @memberof HarvestItem
   */
  dataset?: DatasetReference
  /**
   * The item end date
   * @type {string}
   * @memberof HarvestItem
   */
  ended?: string
  /**
   * The item errors
   * @type {Array<HarvestError>}
   * @memberof HarvestItem
   */
  errors?: HarvestError[]
  /**
   * The item keyword arguments
   * @type {Kwargs}
   * @memberof HarvestItem
   */
  kwargs?: Kwargs
  /**
   * The item remote ID to process
   * @type {string}
   * @memberof HarvestItem
   */
  remote_id: string
  /**
   * The item start date
   * @type {string}
   * @memberof HarvestItem
   */
  started?: string
  /**
   * The item status
   * @type {string}
   * @memberof HarvestItem
   */
  status: HarvestItemStatusEnum
}

/**
 * @export
 * @interface HarvestJob
 */
export interface HarvestJob {
  /**
   * The job creation date
   * @type {string}
   * @memberof HarvestJob
   */
  created: string
  /**
   * The job end date
   * @type {string}
   * @memberof HarvestJob
   */
  ended?: string
  /**
   * The job initialization errors
   * @type {Array<HarvestError>}
   * @memberof HarvestJob
   */
  errors?: HarvestError[]
  /**
   * The job execution ID
   * @type {string}
   * @memberof HarvestJob
   */
  id: string
  /**
   * The job collected items
   * @type {Array<HarvestItem>}
   * @memberof HarvestJob
   */
  items?: HarvestItem[]
  /**
   * The source owning the job
   * @type {string}
   * @memberof HarvestJob
   */
  source: string
  /**
   * The job start date
   * @type {string}
   * @memberof HarvestJob
   */
  started?: string
  /**
   * The job status
   * @type {string}
   * @memberof HarvestJob
   */
  status: HarvestJobStatusEnum
}

/**
 * @export
 * @interface HarvestSource
 */
export interface HarvestSource {
  /**
   * Is this source active
   * @type {boolean}
   * @memberof HarvestSource
   */
  active: boolean
  /**
   * If enabled, datasets not present on the remote source will be
   * automatically archived
   * @type {boolean}
   * @memberof HarvestSource
   */
  autoarchive: boolean
  /**
   * The source backend
   * @type {string}
   * @memberof HarvestSource
   */
  backend: HarvestBackend['id']
  /**
   * The configuration as key-value pairs
   * @type {Config}
   * @memberof HarvestSource
   */
  config?: HarvestConfig
  /**
   * The source creation date
   * @type {string}
   * @memberof HarvestSource
   */
  created_at: string
  /**
   * The source deletion date
   * @type {string}
   * @memberof HarvestSource
   */
  deleted?: string
  /**
   * The source description
   * @type {string}
   * @memberof HarvestSource
   */
  description?: string
  /**
   * The source unique identifier
   * @type {string}
   * @memberof HarvestSource
   */
  id?: string
  /**
   * ?
   * @type {HarvestJob}
   * @memberof HarvestSource
   */
  last_job?: HarvestJob
  /**
   * The source display name
   * @type {string}
   * @memberof HarvestSource
   */
  name: string
  /**
   * ?
   * @type {OrganizationReference}
   * @memberof HarvestSource
   */
  organization?: OrganizationReference
  /**
   * ?
   * @type {UserReference}
   * @memberof HarvestSource
   */
  owner?: UserReference
  /**
   * The source schedule (interval or cron expression)
   * @type {string}
   * @memberof HarvestSource
   */
  schedule?: string
  /**
   * The source base URL
   * @type {string}
   * @memberof HarvestSource
   */
  url: string
  /**
   * ?
   * @type {HarvestSourceValidation}
   * @memberof HarvestSource
   */
  validation?: HarvestSourceValidation
}

/**
 * @export
 * @interface HarvestSourceValidation
 */
export interface HarvestSourceValidation {
  /**
   * ?
   * @type {UserReference}
   * @memberof HarvestSourceValidation
   */
  by?: UserReference
  /**
   * A comment about the validation. Required on rejection
   * @type {string}
   * @memberof HarvestSourceValidation
   */
  comment?: string
  /**
   * Date on which validation was performed
   * @type {string}
   * @memberof HarvestSourceValidation
   */
  on?: string
  /**
   * Is it validated or not
   * @type {string}
   * @memberof HarvestSourceValidation
   */
  state: HarvestSourceValidationStateEnum
}

export enum HarvestBackendEnum {
  CswDcat = 'csw-dcat',
  Dcat = 'dcat',
  Ods = 'ods',
  Maaf = 'maaf',
  Ckan = 'ckan',
  Dkan = 'dkan'
}

export enum HarvestItemStatusEnum {
  Pending = 'pending',
  Started = 'started',
  Done = 'done',
  Failed = 'failed',
  Skipped = 'skipped',
  Archived = 'archived'
}

export enum HarvestJobStatusEnum {
  Pending = 'pending',
  Initializing = 'initializing',
  Initialized = 'initialized',
  Processing = 'processing',
  Done = 'done',
  DoneErrors = 'done-errors',
  Failed = 'failed'
}

export enum HarvestSourceValidationStateEnum {
  Pending = 'pending',
  Accepted = 'accepted',
  Refused = 'refused'
}
