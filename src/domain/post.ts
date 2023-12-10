import type { Dataset } from './dataset'
import type { UserReference } from './reference'
import type { Reuse } from './reuse'

/**
 * @export
 * @interface Post
 */
export interface Post {
  /**
   * HTML or markdown body type
   * @type {string}
   * @memberof Post
   */
  body_type?: string
  /**
   * The post content in Markdown
   * @type {string}
   * @memberof Post
   */
  content: string
  /**
   * The post creation date
   * @type {string}
   * @memberof Post
   */
  created_at?: string
  /**
   * An optional credit line (associated to the image)
   * @type {string}
   * @memberof Post
   */
  credit_to?: string
  /**
   * An optional link associated to the credits
   * @type {string}
   * @memberof Post
   */
  credit_url?: string
  /**
   * The post datasets
   * @type {Array<Dataset>}
   * @memberof Post
   */
  datasets?: Dataset[]
  /**
   * The post headline
   * @type {string}
   * @memberof Post
   */
  headline: string
  /**
   * The post identifier
   * @type {string}
   * @memberof Post
   */
  id?: string
  /**
   * The post image
   * @type {string}
   * @memberof Post
   */
  image?: string
  /**
   * The post last modification date
   * @type {string}
   * @memberof Post
   */
  last_modified?: string
  /**
   * The post name
   * @type {string}
   * @memberof Post
   */
  name: string
  /**
   *
   * @type {UserReference}
   * @memberof Post
   */
  owner?: UserReference
  /**
   * The post page URL
   * @type {string}
   * @memberof Post
   */
  page?: string
  /**
   * The post publication date
   * @type {string}
   * @memberof Post
   */
  published?: string
  /**
   * The post reuses
   * @type {Array<Reuse>}
   * @memberof Post
   */
  reuses?: Reuse[]
  /**
   * The post permalink string
   * @type {string}
   * @memberof Post
   */
  slug?: string
  /**
   * Some keywords to help in search
   * @type {Array<string>}
   * @memberof Post
   */
  tags?: string[]
  /**
   * The post API URI
   * @type {string}
   * @memberof Post
   */
  uri?: string
}
