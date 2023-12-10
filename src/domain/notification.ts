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
