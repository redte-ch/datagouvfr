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

const parseRequest = <T>(requestConfig: RequestConfig<T>): RequestConfig<T> => {
  const { data: requestData } = requestConfig

  if (requestData === undefined) {
    return requestConfig
  }

  return { ...requestConfig, data: toSnake(requestConfig.data) }
}

const parseResponse = <T>(response: Response<T>): Response<T> => {
  const { data: responseData } = response

  if (responseData === undefined) {
    return response
  }

  return { ...response, data: toCamel(response.data) }
}

const Client = (clientOpts: ClientOpts = {}): ClientRepo => {
  return async <T>(requestOpts: RequestOpts<T>): Promise<Response<T>> => {
    const requestConfig: RequestConfig<T> = {
      ...baseOpts,
      ...clientOpts,
      ...requestOpts
    }
    const parsedRequest = parseRequest<T>(requestConfig)
    const instance: AxiosInstance = Axios.create(parsedRequest)
    const request = instance<T>(parsedRequest)
    const response = await request
    return parseResponse<T>(response)
  }
}

export { Client }
