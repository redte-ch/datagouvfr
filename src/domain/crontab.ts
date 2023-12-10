/**
 * @export
 * @interface Crontab
 */
export interface Crontab {
  /**
   * Cron expression for day of month
   * @type {string}
   * @memberof Crontab
   */
  day_of_month: string
  /**
   * Cron expression for day of week
   * @type {string}
   * @memberof Crontab
   */
  day_of_week: string
  /**
   * Cron expression for hour
   * @type {string}
   * @memberof Crontab
   */
  hour: string
  /**
   * Cron expression for minute
   * @type {string}
   * @memberof Crontab
   */
  minute: string
  /**
   * Cron expression for month of year
   * @type {string}
   * @memberof Crontab
   */
  month_of_year: string
}
