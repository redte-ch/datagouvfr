/**
 * Copyleft (ɔ) 2023 Mauko Quiroga-Alvarado <public@mauko.me>
 * Licensed under the EUPL-1.2-or-later
 * For details: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
 */

import type { SiteMetrics } from './metrics'

/**
 * @export
 * @interface Site
 */
export interface Site {
  /**
   * The Site unique identifier
   * @type {string}
   * @memberof Site
   */
  id: string
  /**
   * The associated metrics
   * @type {SiteMetrics}
   * @memberof Site
   */
  metrics?: SiteMetrics
  /**
   * The site display title
   * @type {string}
   * @memberof Site
   */
  title: string
}
