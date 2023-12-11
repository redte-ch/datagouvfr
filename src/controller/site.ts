/**
 * Copyleft (ɔ) 2023 Mauko Quiroga-Alvarado <public@mauko.me>
 * Licensed under the EUPL-1.2-or-later
 * For details: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
 */
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import Axios from 'axios'

import type { Activity } from '@/domain/activity'
import type { Page } from '@/domain/page'
import { toCamel } from '@/utils/convert-case'

type P = AxiosRequestConfig
type R<T> = Promise<AxiosResponse<T>>

/**
 * @interface Site
 */
interface Site {
  getActivities: (opts?: P) => R<Page<Activity[]>>
}

/**
 * Basic options for the Axios client
 * @const baseOpts
 * @type {AxiosRequestConfig}
 */
const baseOpts: P = {
  baseURL: 'https://demo.data.gouv.fr/api/1'
}

/**
 * Create a new Site Web API client
 * @param {AxiosInstance} client
 * @return {Site}
 */
const site = (client: AxiosInstance = Axios.create(baseOpts)): Site => {
  /**
   * Get the list of activities
   * @param opts
   * @return {Promise<AxiosResponse<Page<Activity[]>>>}
   */
  const getActivities = async (opts: P = {}): R<Page<Activity[]>> => {
    const method = 'get'
    const url = '/activity/'
    const request = { ...baseOpts, ...opts, method, url }
    const response = await client<Page<Activity[]>>(request)
    return { ...response, data: toCamel<Page<Activity[]>>(response.data) }
  }

  return { getActivities }
}

/**
 * @export
 * @function Site
 */
export { site as Site }
