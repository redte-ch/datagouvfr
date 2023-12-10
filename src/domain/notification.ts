/**
 * Copyleft (ɔ) 2023 Mauko Quiroga-Alvarado <public@mauko.me>
 * Licensed under the EUPL-1.2-or-later
 * For details: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
 */

/**
 * @export
 * @interface Notification
 */
export interface Notification {
  /**
   * The notification creation datetime
   * @type {string}
   * @memberof Notification
   */
  created_on?: string
  /**
   * Key-Value details depending on notification type
   * @type {NotificationDetails}
   * @memberof Notification
   */
  details?: NotificationDetails
  /**
   * The notification type
   * @type {string}
   * @memberof Notification
   */
  type?: string
}

/**
 * @export
 * @interface NotificationDetails
 */
export type NotificationDetails = Record<string, unknown>
