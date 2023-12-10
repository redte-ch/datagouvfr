/**
 * Copyleft (ɔ) 2023 Mauko Quiroga-Alvarado <public@mauko.me>
 * Licensed under the EUPL-1.2-or-later
 * For details: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
 */

/**
 * @export
 * @interface Schema
 */
export interface Schema {
  /**
   * The schema identifier
   * @type {string}
   * @memberof Schema
   */
  id?: string
  /**
   * The schema display name
   * @type {string}
   * @memberof Schema
   */
  label?: string
  /**
   * The available versions of the schema
   * @type {Array<string>}
   * @memberof Schema
   */
  versions?: string[]
}
