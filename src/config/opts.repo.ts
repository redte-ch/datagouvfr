/**
 * Copyleft (ɔ) 2023 Mauko Quiroga-Alvarado <public@mauko.me>
 * Licensed under the EUPL-1.2-or-later
 * For details: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
 */
import type { RequestConfig } from '@/infra/client.repo'

/**
 * @export
 * @interface BaseOpts
 */
export type BaseOpts = RequestConfig<any>

/**
 * @export
 * @interface ClientOpts
 */
export interface ClientOpts extends RequestConfig<any> {
  baseURL?: string
}
