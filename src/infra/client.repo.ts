/**
 * Copyleft (ɔ) 2023 Mauko Quiroga-Alvarado <public@mauko.me>
 * Licensed under the EUPL-1.2-or-later
 * For details: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
 */
import type { AxiosRequestConfig, AxiosResponse } from 'axios'

/**
 * @export
 * @interface Response
 */
export type Response<T> = AxiosResponse<T>

/**
 * @export
 * @interface RequestOpts
 */
export type RequestOpts<T> = AxiosRequestConfig<T>

/**
 * @export
 * @interface RequestConfig
 */
export type RequestConfig<T> = AxiosRequestConfig<T>

/**
 * @export
 * @interface ClientRepo
 */
export type ClientRepo = <T>(
  requestOpts: RequestOpts<T>
) => Promise<Response<T>>
