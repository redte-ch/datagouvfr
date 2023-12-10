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
