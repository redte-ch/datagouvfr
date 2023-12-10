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
