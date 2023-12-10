/**
 * @export
 * @interface UploadStatus
 */
export interface UploadStatus {
  /**
   * ?
   * @type {string}
   * @memberof UploadStatus
   */
  error?: string
  /**
   * ?
   * @type {boolean}
   * @memberof UploadStatus
   */
  success?: boolean
}

/**
 * @export
 * @interface UploadedImage
 */
export interface UploadedImage {
  /**
   * ?
   * @type {string}
   * @memberof UploadedImage
   */
  image?: string
  /**
   * Whether the upload succeeded or not.
   * @type {boolean}
   * @memberof UploadedImage
   */
  success?: boolean
}
