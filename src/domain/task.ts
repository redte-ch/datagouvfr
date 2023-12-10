/**
 * Copyleft (ɔ) 2023 Mauko Quiroga-Alvarado <public@mauko.me>
 * Licensed under the EUPL-1.2-or-later
 * For details: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
 */

/**
 * @export
 * @interface Task
 */
export interface Task {
  /**
   * The exception thrown during execution
   * @type {string}
   * @memberof Task
   */
  exc?: string
  /**
   * Tha task execution ID
   * @type {string}
   * @memberof Task
   */
  id?: string
  /**
   * The task results if exists
   * @type {string}
   * @memberof Task
   */
  result?: string
  /**
   * Cron expression for hour
   * @type {string}
   * @memberof Task
   */
  status?: TaskStatusEnum
  /**
   * The execution traceback
   * @type {string}
   * @memberof Task
   */
  traceback?: string
}

export enum TaskStatusEnum {
  Started = 'STARTED',
  Retry = 'RETRY',
  Revoked = 'REVOKED',
  Success = 'SUCCESS',
  Received = 'RECEIVED',
  Pending = 'PENDING',
  Failure = 'FAILURE'
}
