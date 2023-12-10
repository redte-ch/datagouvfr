/**
 * @export
 * @interface Role
 */
export type Role = Record<string, string>

/**
 * @export
 * @interface OrganizationRole
 */
export interface OrganizationRole extends Partial<Role> {
  /**
   * The role identifier
   * @type {string}
   * @memberof OrganizationRole
   */
  id?: string
  /**
   * The role label
   * @type {string}
   * @memberof OrganizationRole
   */
  label?: string
}

/**
 * @export
 * @interface UserRole
 */
export interface UserRole extends Partial<Role> {
  /**
   * The role name
   * @type {string}
   * @memberof UserRole
   */
  name?: string
}
