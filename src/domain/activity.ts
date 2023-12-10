/**
 * Copyleft (ɔ) 2023 Mauko Quiroga-Alvarado <public@mauko.me>
 * Licensed under the EUPL-1.2-or-later
 * For details: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
 */

import type { Kwargs } from './kwargs'
import type { OrganizationReference, UserReference } from './reference'

/**
 * @export
 * @interface Activity
 */
export interface Activity {
  /**
   * ?
   * @type {UserReference}
   * @memberof Activity
   */
  actor?: UserReference
  /**
   * When the action has been performed
   * @type {string}
   * @memberof Activity
   */
  created_at?: string
  /**
   * The icon of the activity
   * @type {string}
   * @memberof Activity
   */
  icon: string
  /**
   * The key of the activity
   * @type {string}
   * @memberof Activity
   */
  key: string
  /**
   * Some action specific context
   * @type {Kwargs}
   * @memberof Activity
   */
  kwargs?: Kwargs
  /**
   * The label of the activity
   * @type {string}
   * @memberof Activity
   */
  label: string
  /**
   * ?
   * @type {OrganizationReference}
   * @memberof Activity
   */
  organization?: OrganizationReference
  /**
   * The activity target name
   * @type {string}
   * @memberof Activity
   */
  related_to: string
  /**
   * The activity target object identifier
   * @type {string}
   * @memberof Activity
   */
  related_to_id: string
  /**
   * The activity target object class name
   * @type {string}
   * @memberof Activity
   */
  related_to_kind: string
  /**
   * The activity target model
   * @type {string}
   * @memberof Activity
   */
  related_to_url: string
}
