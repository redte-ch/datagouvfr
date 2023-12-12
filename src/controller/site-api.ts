/**
 * Copyleft (ɔ) 2023 Mauko Quiroga-Alvarado <public@mauko.me>
 * Licensed under the EUPL-1.2-or-later
 * For details: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
 */
import type { Activity } from '@/domain/activity'
import type { DataError } from '@/domain/error'
import type { OEmbed } from '@/domain/oembed'
import type { Page } from '@/domain/page'
import { Client } from '@/infra/client'
import type { ClientRepo, RequestOpts, Response } from '@/infra/client.repo'

import type {
  GetActivitiesParams,
  GetOEmbedParams,
  SiteAPIRepo
} from './site-api.repo'

/**
 * Create a new Site Web API client
 * @export
 * @param {ClientRepo} client
 * @return {SiteAPIRepo}
 */
export const SiteAPI = (client: ClientRepo = Client()): SiteAPIRepo => {
  /**
   * Get the list of activities
   * @param {GetActivitiesParams} params
   * @return {Promise<Response<Page<Activity[]>>>}
   */
  const getActivities = async (
    params: GetActivitiesParams = {}
  ): Promise<Response<Page<Activity[]> | DataError>> => {
    const url = '/activity'
    const method = 'get'
    const requestOpts: RequestOpts<Page<Activity[]>> = { params, method, url }
    return await client<Page<Activity[]>>(requestOpts)
  }

  /**
   * Get the metrics for a given technical id
   * @deprecated
   * @param {string} id
   * @return {Promise<Response<DataError>>}
   */
  const getMetrics = async (id: string): Promise<Response<DataError>> => {
    const url = `/metrics/${id}`
    const method = 'get'
    const requestOpts: RequestOpts<DataError> = { method, url }
    return await client<DataError>(requestOpts)
  }

  /**
   * Get the oEmbed data for a given URL
   * @param {GetOEmbedParams} params
   * @return {Promise<Response<OEmbed>>}
   */
  const getOEmbed = async (
    params: GetOEmbedParams
  ): Promise<Response<OEmbed | DataError>> => {
    const url = '/oembed'
    const method = 'get'
    const requestOpts: RequestOpts<OEmbed> = { params, method, url }
    return await client<OEmbed>(requestOpts)
  }

  return { getActivities, getMetrics, getOEmbed }
}
