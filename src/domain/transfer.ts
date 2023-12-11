/**
 * Copyleft (ɔ) 2023 Mauko Quiroga-Alvarado <public@mauko.me>
 * Licensed under the EUPL-1.2-or-later
 * For details: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
 */
import type { Reference } from './reference'

/**
 * @export
 * @interface Transfer
 */
export interface Transfer {
  /**
   * A comment about the transfer request
   * @type {string}
   * @memberof Transfer
   */
  comment?: string
  /**
   * The transfer request date
   * @type {string}
   * @memberof Transfer
   */
  created?: string
  /**
   * The transfer unique identifier
   * @type {string}
   * @memberof Transfer
   */
  id?: string
  /**
   *
   * @type {Reference}
   * @memberof Transfer
   */
  owner?: Reference
  /**
   *
   * @type {Reference}
   * @memberof Transfer
   */
  recipient?: Reference
  /**
   * A comment about the transfer response
   * @type {string}
   * @memberof Transfer
   */
  reponse_comment?: string
  /**
   * The transfer response date
   * @type {string}
   * @memberof Transfer
   */
  responded?: string
  /**
   * The current transfer request status
   * @type {string}
   * @memberof Transfer
   */
  status?: TransferStatusEnum
  /**
   *
   * @type {Reference}
   * @memberof Transfer
   */
  subject?: Reference
}

/**
 * @export
 * @interface TransferRequest
 */
export interface TransferRequest {
  /**
   * An explanation about the transfer request
   * @type {string}
   * @memberof TransferRequest
   */
  comment: string
  /**
   *
   * @type {Reference}
   * @memberof TransferRequest
   */
  recipient: Reference
  /**
   *
   * @type {Reference}
   * @memberof TransferRequest
   */
  subject: Reference
}

/**
 * @export
 * @interface TransferResponse
 */
export interface TransferResponse {
  /**
   * An optional comment about the transfer response
   * @type {string}
   * @memberof TransferResponse
   */
  comment?: string
  /**
   * The response
   * @type {string}
   * @memberof TransferResponse
   */
  response: TransferResponseResponseEnum
}

export enum TransferStatusEnum {
  Pending = 'pending',
  Accepted = 'accepted',
  Refused = 'refused'
}

export enum TransferResponseResponseEnum {
  Accept = 'accept',
  Refuse = 'refuse'
}
