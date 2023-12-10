/**
 * @export
 * @interface Interval
 */
export interface Interval {
  /**
   * The interval without unit
   * @type {number}
   * @memberof Interval
   */
  every: number
  /**
   * The period/interval type
   * @type {string}
   * @memberof Interval
   */
  period: IntervalPeriodEnum
}

export enum IntervalPeriodEnum {
  Days = 'days',
  Hours = 'hours',
  Minutes = 'minutes',
  Seconds = 'seconds',
  Microseconds = 'microseconds'
}
