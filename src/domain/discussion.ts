import type { Extras } from './extras'
import type { Reference, UserReference } from './reference'

/**
 * @export
 * @interface Discussion
 */
export interface Discussion {
  /**
   * The object class
   * @type {string}
   * @memberof Discussion
   */
  class: string
  /**
   * The discussion closing date
   * @type {string}
   * @memberof Discussion
   */
  closed?: string
  /**
   * ?
   * @type {UserReference}
   * @memberof Discussion
   */
  closed_by?: UserReference
  /**
   * The discussion creation date
   * @type {string}
   * @memberof Discussion
   */
  created?: string
  /**
   * ?
   * @type {Array<DiscussionMessage>}
   * @memberof Discussion
   */
  discussion?: DiscussionMessage[]
  /**
   * Extra attributes as key-value pairs
   * @type {Extras}
   * @memberof Discussion
   */
  extras?: Extras
  /**
   * The discussion identifier
   * @type {string}
   * @memberof Discussion
   */
  id?: string
  /**
   * ?
   * @type {Reference}
   * @memberof Discussion
   */
  subject?: Reference
  /**
   * The discussion title
   * @type {string}
   * @memberof Discussion
   */
  title?: string
  /**
   * The discussion API URI
   * @type {string}
   * @memberof Discussion
   */
  url?: string
  /**
   * ?
   * @type {UserReference}
   * @memberof Discussion
   */
  user?: UserReference
}

/**
 * @export
 * @interface DiscussionMessage
 */
export interface DiscussionMessage {
  /**
   * The message body
   * @type {string}
   * @memberof DiscussionMessage
   */
  content?: string
  /**
   * ?
   * @type {UserReference}
   * @memberof DiscussionMessage
   */
  posted_by?: UserReference
  /**
   * The message posting date
   * @type {string}
   * @memberof DiscussionMessage
   */
  posted_on?: string
}

/**
 * @export
 * @interface DiscussionResponse
 */
export interface DiscussionResponse {
  /**
   * Is this a closing response. Only subject owner can close
   * @type {boolean}
   * @memberof DiscussionResponse
   */
  close?: boolean
  /**
   * The comment to submit
   * @type {string}
   * @memberof DiscussionResponse
   */
  comment: string
}

/**
 * @export
 * @interface DiscussionStart
 */
export interface DiscussionStart {
  /**
   * The content of the initial comment
   * @type {string}
   * @memberof DiscussionStart
   */
  comment: string
  /**
   * Extras attributes as key-value pairs
   * @type {Extras}
   * @memberof DiscussionStart
   */
  extras?: Extras
  /**
   *
   * @type {Reference}
   * @memberof DiscussionStart
   */
  subject: Reference
  /**
   * The title of the discussion to open
   * @type {string}
   * @memberof DiscussionStart
   */
  title: string
}
