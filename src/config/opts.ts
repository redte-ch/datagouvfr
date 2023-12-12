/**
 * Copyleft (ɔ) 2023 Mauko Quiroga-Alvarado <public@mauko.me>
 * Licensed under the EUPL-1.2-or-later
 * For details: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
 */
import type { BaseOpts } from './opts.repo'

/**
 * Basic options for the API client
 * @see https://axios-http.com/docs/req_config
 * @export
 * @const baseOpts
 * @type {BaseOpts}
 */
export const baseOpts: BaseOpts = {
  baseURL: 'https://demo.data.gouv.fr/api/1',
  validateStatus: (_status: number): true => true
}
