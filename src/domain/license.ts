/**
 * Copyleft (ɔ) 2023 Mauko Quiroga-Alvarado <public@mauko.me>
 * Licensed under the EUPL-1.2-or-later
 * For details: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
 */

/**
 * @export
 * @interface License
 */
export interface License {
  /**
   * Same alternative known titles (improve rematch)
   * @type {Array<string>}
   * @memberof License
   */
  alternate_titles?: string[]
  /**
   * Same alternative known URLs (improve rematch)
   * @type {Array<string>}
   * @memberof License
   */
  alternate_urls?: string[]
  /**
   * Some arbitrary flags
   * @type {Array<string>}
   * @memberof License
   */
  flags?: string[]
  /**
   * The license identifier
   * @type {string}
   * @memberof License
   */
  id: string
  /**
   * The license official maintainer
   * @type {string}
   * @memberof License
   */
  maintainer?: string
  /**
   * The resource title
   * @type {string}
   * @memberof License
   */
  title: string
  /**
   * The license official URL
   * @type {string}
   * @memberof License
   */
  url?: string
}
