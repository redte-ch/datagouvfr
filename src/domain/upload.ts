/**
 * Copyleft (ɔ) 2023 Mauko Quiroga-Alvarado <public@mauko.me>
 * Licensed under the EUPL-1.2-or-later
 * For details: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
 */

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
