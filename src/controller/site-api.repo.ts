/**
 * Copyleft (ɔ) 2023 Mauko Quiroga-Alvarado <public@mauko.me>
 * Licensed under the EUPL-1.2-or-later
 * For details: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
 */
import type { Activity } from '@/domain/activity'
import type { DataError } from '@/domain/error'
import type { OEmbed } from '@/domain/oembed'
import type { Organization } from '@/domain/organization'
import type { Page } from '@/domain/page'
import type { User } from '@/domain/user'
import type { Response } from '@/infra/client.repo'

/**
 * @export
 * @interface SiteAPIRepo
 */
export interface SiteAPIRepo {
  getActivities: (
    params: getActivitiesParams
  ) => Promise<Response<Page<Activity[]>>>
  getMetrics: (id: string) => Promise<Response<DataError>>
  getOEmbed: (params: getOEmbedParams) => Promise<Response<OEmbed>>
}

/**
 * @export
 * @interface getActivitiesParams
 */
export interface getActivitiesParams {
  /**
   * The page to fetch
   * @type {number}
   * @memberof getActivitiesParams
   */
  page?: number | 1
  /**
   * The page size to fetch
   * @type {number}
   * @memberof getActivitiesParams
   */
  pageSize?: number | 20
  /**
   * Filter activities for that particular user
   * @type {string}
   * @memberof getActivitiesParams
   */
  user?: User['id']
  /**
   * Filter activities for that particular organization
   * @type {string}
   * @memberof getActivitiesParams
   */
  organization?: Organization['id']
}

/**
 * @export
 * @interface getOEmbedParams
 */
export interface getOEmbedParams {
  /**
   * The URL to retrieve embedding information for
   * @type {string}
   * @memberof getOEmbedParams
   */
  url: string
  /**
   * The maximum width of the embedded resource
   * @type {number}
   * @memberof getOEmbedParams
   */
  maxwidth?: OEmbed['maxwidth']
  /**
   * The maximum height of the embedded resource
   * @type {number}
   * @memberof getOEmbedParams
   */
  maxheight?: OEmbed['maxheight']
  /**
   * The required response format.
   * @type {string}
   * @memberof getOEmbedParams
   */
  format: 'json'
}
