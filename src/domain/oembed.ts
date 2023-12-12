/**
 * Copyleft (ɔ) 2023 Mauko Quiroga-Alvarado <public@mauko.me>
 * Licensed under the EUPL-1.2-or-later
 * For details: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
 */

/**
 * oEmbed is a format for allowing an embedded representation of a URL on third
 * party sites.
 * @see https://oembed.com/
 * @export
 * @interface OEmbed
 */
export interface OEmbed {
  /**
   * The oEmbed version number. This must be 1.0.
   * @type {string}
   * @memberof OEmbed
   */
  version: '1.0'
  /**
   * The type of resource. Must be "rich".
   * @type {string}
   * @memberof OEmbed
   */
  type: 'rich'
  /**
   * The width in pixels required to display the HTML.
   * @type {number}
   * @memberof OEmbed
   */
  width: number
  /**
   * The height in pixels required to display the HTML.
   * @type {number}
   * @memberof OEmbed
   */
  height: number
  /**
   * A maximum width in pixels for the embed.
   * @type {number}
   * @memberof OEmbed
   */
  maxwidth?: number
  /**
   * A maximum height in pixels for the embed.
   * @type {number}
   * @memberof OEmbed
   */
  maxheight?: number
  /**
   * The HTML required to display the resource.
   * @type {string}
   * @memberof OEmbed
   */
  html: string
}
