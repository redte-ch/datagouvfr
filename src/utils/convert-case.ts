/**
 * Copyleft (ɔ) 2023 Mauko Quiroga-Alvarado <public@mauko.me>
 * Licensed under the EUPL-1.2-or-later
 * For details: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
 */
import { camelKeys, snakeKeys } from 'js-convert-case'

import type { Options } from './convert-case.repo'

/**
 * @const options
 * @type {Options}
 */
const options: Options = {
  recursive: true,
  recursiveInArray: true
}

/**
 * Convert object keys to camel case
 * @export
 * @param obj
 * @returns {object}
 */
export const toCamel = <T>(obj: unknown): T => {
  const keys = camelKeys(obj, options)
  if (keys === null) return obj as T
  return keys as T
}

/**
 * Convert object keys to snake case
 * @export
 * @param obj
 * @returns {object}
 */
export const toSnake = <T>(obj: unknown): T => {
  const keys = snakeKeys(obj, options)
  if (keys === null) return obj as T
  return keys as T
}
