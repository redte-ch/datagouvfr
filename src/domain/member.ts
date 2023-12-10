import type { UserReference } from './reference'

/**
 * @export
 * @interface Member
 */
export interface Member {
  /**
   * The member role in the organization
   * @type {string}
   * @memberof Member
   */
  role: MemberRoleEnum
  /**
   * ?
   * @type {UserReference}
   * @memberof Member
   */
  user?: UserReference
}

/**
 * @export
 * @interface MembershipRequest
 */
export interface MembershipRequest {
  /**
   * A request comment from the user
   * @type {string}
   * @memberof MembershipRequest
   */
  comment: string
  /**
   * The request creation date
   * @type {string}
   * @memberof MembershipRequest
   */
  created?: string
  /**
   *
   * @type {string}
   * @memberof MembershipRequest
   */
  id?: string
  /**
   * The current request status
   * @type {string}
   * @memberof MembershipRequest
   */
  status: MembershipRequestStatusEnum
  /**
   * ?
   * @type {UserReference}
   * @memberof MembershipRequest
   */
  user?: UserReference
}

/**
 * @export
 * @interface RefuseMembership
 */
export interface RefuseMembership {
  /**
   * The refusal comment.
   * @type {string}
   * @memberof RefuseMembership
   */
  comment?: string
}

export enum MemberRoleEnum {
  Admin = 'admin',
  Editor = 'editor'
}

export enum MembershipRequestStatusEnum {
  Pending = 'pending',
  Accepted = 'accepted',
  Refused = 'refused'
}
