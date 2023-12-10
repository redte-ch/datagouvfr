/**
 * Copyleft (ɔ) 2023 Mauko Quiroga-Alvarado <public@mauko.me>
 * Licensed under the EUPL-1.2-or-later
 * For details: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
 */

import { camelKeys, snakeKeys } from 'js-convert-case'

/**
 * @interface Options
 */
interface Options {
  recursive: boolean
}

/**
 * @const options
 * @type {Options}
 */
const options: Options = {
  recursive: true
}

/**
 * Convert object keys to camel case
 * @export
 * @param obj
 * @returns {object | null}
 */
export const toCamel = <T>(obj: T): object | null => {
  return camelKeys(obj, options)
}

/**
 * Convert object keys to snake case
 * @export
 * @param obj
 * @returns {object | null}
 */
export const toSnake = <T>(obj: T): object | null => {
  return snakeKeys(obj, options)
}
