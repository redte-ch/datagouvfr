/**
 * Copyleft (ɔ) 2023 Mauko Quiroga-Alvarado <public@mauko.me>
 * Licensed under the EUPL-1.2-or-later
 * For details: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
 */

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
