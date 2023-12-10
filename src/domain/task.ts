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
