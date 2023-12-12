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
import type { PageParams } from '@/infra/params.repo'

/**
 * @export
 * @interface SiteAPIRepo
 */
export interface SiteAPIRepo {
  getActivities: (
    params: GetActivitiesParams
  ) => Promise<Response<Page<Activity[]> | DataError>>
  getMetrics: (id: string) => Promise<Response<DataError>>
  getOEmbed: (params: GetOEmbedParams) => Promise<Response<OEmbed | DataError>>
}

/**
 * @export
 * @interface GetActivitiesParams
 */
export interface GetActivitiesParams extends PageParams {
  /**
   * Filter activities for that particular user
   * @type {string}
   * @memberof GetActivitiesParams
   */
  user?: User['id']
  /**
   * Filter activities for that particular organization
   * @type {string}
   * @memberof GetActivitiesParams
   */
  organization?: Organization['id']
}

/**
 * @export
 * @interface GetOEmbedParams
 */
export interface GetOEmbedParams {
  /**
   * The URL to retrieve embedding information for
   * @type {string}
   * @memberof GetOEmbedParams
   */
  url: string
  /**
   * The maximum width of the embedded resource
   * @type {number}
   * @memberof GetOEmbedParams
   */
  maxwidth?: OEmbed['maxwidth']
  /**
   * The maximum height of the embedded resource
   * @type {number}
   * @memberof GetOEmbedParams
   */
  maxheight?: OEmbed['maxheight']
  /**
   * The required response format.
   * @type {string}
   * @memberof GetOEmbedParams
   */
  format: 'json'
}
