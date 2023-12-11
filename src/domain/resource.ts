/**
 * Copyleft (ɔ) 2023 Mauko Quiroga-Alvarado <public@mauko.me>
 * Licensed under the EUPL-1.2-or-later
 * For details: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
 */
import type { Checksum } from './checksum'
import type { Extras } from './extras'
import type { Internals } from './internals'
import type { Metrics } from './metrics'
import type {
  DatasetReference,
  OrganizationReference,
  UserReference
} from './reference'
import type { Schema } from './schema'

/**
 * @export
 * @interface Resource
 */
export interface Resource {
  /**
   * @type {Checksum}
   * @memberof Resource
   */
  checksum?: Checksum
  /**
   * The resource creation date
   * @type {string}
   * @memberof Resource
   */
  created_at?: string
  /**
   * The resource markdown description
   * @type {string}
   * @memberof Resource
   */
  description?: string
  /**
   * Extra attributes as key-value pairs
   * @type {Extras}
   * @memberof Resource
   */
  extras?: Extras
  /**
   * The resource file size in bytes
   * @type {number}
   * @memberof Resource
   */
  filesize?: number
  /**
   * Whether the resource is an uploaded file, a remote file or an API
   * @type {string}
   * @memberof Resource
   */
  filetype: ResourceFileTypeEnum
  /**
   * The resource format
   * @type {string}
   * @memberof Resource
   */
  format: string
  /**
   *
   * @type {HarvestResourceMetadata}
   * @memberof Resource
   */
  harvest?: HarvestResourceMetadata
  /**
   * The resource unique ID
   * @type {string}
   * @memberof Resource
   */
  id?: string
  /**
   *
   * @type {Internals}
   * @memberof Resource
   */
  internal?: Internals
  /**
   * The resource last modification date
   * @type {string}
   * @memberof Resource
   */
  last_modified?: string
  /**
   * The permanent URL redirecting to the latest version of the resource. When the resource data is updated, the URL will change, the latest URL won\'t.
   * @type {string}
   * @memberof Resource
   */
  latest?: string
  /**
   * The resource metrics
   * @type {Metrics}
   * @memberof Resource
   */
  metrics?: Metrics
  /**
   * The resource mime type
   * @type {string}
   * @memberof Resource
   */
  mime?: string
  /**
   * An optional preview URL to be loaded as a standalone page (ie. iframe or new page)
   * @type {string}
   * @memberof Resource
   */
  preview_url?: string
  /**
   * Reference to the associated schema
   * @type {Schema}
   * @memberof Resource
   */
  schema?: Schema
  /**
   * The resource title
   * @type {string}
   * @memberof Resource
   */
  title: string
  /**
   * Resource type (documentation, API...)
   * @type {string}
   * @memberof Resource
   */
  type: ResourceType['id']
  /**
   * The resource URL
   * @type {string}
   * @memberof Resource
   */
  url: string
}

/**
 * @export
 * @interface ResourceType
 */
export interface ResourceType {
  /**
   * The resource type identifier
   * @type {string}
   * @memberof ResourceType
   */
  id?: ResourceTypeEnum
  /**
   * The resource type display name
   * @type {string}
   * @memberof ResourceType
   */
  label?: string
}

/**
 * @export
 * @interface CommunityResource
 */
export interface CommunityResource extends Resource {
  /**
   * The resource URL
   * @type {string}
   * @memberof CommunityResource
   */
  url: string
  /**
   *
   * @type {DatasetReference}
   * @memberof CommunityResource
   */
  dataset?: DatasetReference
  /**
   *
   * @type {OrganizationReference}
   * @memberof CommunityResource
   */
  organization?: OrganizationReference
  /**
   *
   * @type {UserReference}
   * @memberof CommunityResource
   */
  owner?: UserReference
}

/**
 * @export
 * @interface UploadedResource
 */
export interface UploadedResource extends Resource {
  /**
   * Whether the upload succeeded or not.
   * @type {boolean}
   * @memberof UploadedResource
   */
  success?: boolean
}

/**
 * @export
 * @interface HarvestResourceMetadata
 */
export interface HarvestResourceMetadata {
  /**
   * The resource harvested creation date
   * @type {string}
   * @memberof HarvestResourceMetadata
   */
  created_at?: string
  /**
   * The resource harvest last modification date
   * @type {string}
   * @memberof HarvestResourceMetadata
   */
  modified_at?: string
  /**
   * The ods type for ods harvest dataset: api, attachment or alternative_export
   * @type {string}
   * @memberof HarvestResourceMetadata
   */
  ods_type?: HarvestResourceMetadataOdsTypeEnum
  /**
   * The resource harvest uri
   * @type {string}
   * @memberof HarvestResourceMetadata
   */
  uri?: string
}

export enum ResourceFileTypeEnum {
  File = 'file',
  Remote = 'remote'
}

export enum ResourceTypeEnum {
  Main = 'main',
  Documentation = 'documentation',
  Update = 'update',
  Api = 'api',
  Code = 'code',
  Other = 'other'
}

export enum HarvestResourceMetadataOdsTypeEnum {
  Api = 'api',
  Attachment = 'attachment',
  AlternativeExport = 'alternative_export'
}
