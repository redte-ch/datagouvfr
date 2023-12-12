/**
 * Copyleft (ɔ) 2023 Mauko Quiroga-Alvarado <public@mauko.me>
 * Licensed under the EUPL-1.2-or-later
 * For details: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
 */
import Axios from 'axios'
import type { AxiosInstance } from 'axios'

import { baseOpts } from '@/config/opts'
import type { ClientOpts } from '@/config/opts.repo'
import { toCamel, toSnake } from '@/utils/convert-case'

import type {
  ClientRepo,
  RequestConfig,
  RequestOpts,
  Response
} from './client.repo'

/**
 * Parse request data and params to snake case
 * @param {RequestConfig} requestConfig
 * @return {RequestConfig}
 */
const parseRequest = <T>(requestConfig: RequestConfig<T>): RequestConfig<T> => {
  const { data, params } = requestConfig

  /**
   * If data and params are undefined, return the request config as is.
   */
  if (data === undefined && params === undefined) {
    return requestConfig
  }

  /**
   * If data is undefined, return the request config with params in snake case.
   */
  if (data === undefined) {
    return { ...requestConfig, params: toSnake(requestConfig.params) }
  }

  /**
   * If params is undefined, return the request config with data in snake case.
   */
  if (params === undefined) {
    return { ...requestConfig, data: toSnake(requestConfig.data) }
  }

  /**
   * If data and params are defined, return the request config with data and
   * params in snake case.
   */
  return {
    ...requestConfig,
    data: toSnake(requestConfig.data),
    params: toSnake(requestConfig.params)
  }
}

/**
 * Parse response data to camel case
 * @param {Response} response
 * @return {Response}
 */
const parseResponse = <T>(response: Response<T>): Response<T> => {
  const { data: responseData } = response

  /**
   * If data is undefined, return the response as is.
   */
  if (responseData === undefined) {
    return response
  }

  /**
   * If data is defined, return the response with data in camel case.
   */
  return { ...response, data: toCamel(response.data) }
}

/**
 * Create a Web API client.
 * @param {ClientOpts} clientOpts
 * @return {ClientRepo}
 */
export const Client = (clientOpts: ClientOpts = {}): ClientRepo => {
  /**
   * Make a request to the API.
   * @param {RequestOpts} requestOpts
   * @return {Promise<Response>}
   */
  return async <T>(requestOpts: RequestOpts<T>): Promise<Response<T>> => {
    /**
     * Merge request options with client options and base options.
     */
    const requestConfig: RequestConfig<T> = {
      ...baseOpts,
      ...clientOpts,
      ...requestOpts
    }
    /**
     * Parse request data and params to snake case.
     */
    const parsedRequest = parseRequest<T>(requestConfig)
    /**
     * Create an Axios instance.
     */
    const instance: AxiosInstance = Axios.create(parsedRequest)
    /**
     * Make the request.
     */
    const request = instance<T>(parsedRequest)
    /**
     * Wait for the response.
     */
    const response = await request
    /**
     * Parse response data to camel case.
     */
    return parseResponse<T>(response)
  }
}
