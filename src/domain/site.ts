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
