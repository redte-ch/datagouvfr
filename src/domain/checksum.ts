/**
 * @export
 * @interface Checksum
 */
export interface Checksum {
  /**
   * The hashing algorithm used to compute the checksum
   * @type {string}
   * @memberof Checksum
   */
  type?: ChecksumTypeEnum
  /**
   * The resulting checksum/hash
   * @type {string}
   * @memberof Checksum
   */
  value: string
}

export enum ChecksumTypeEnum {
  Sha1 = 'sha1',
  Sha2 = 'sha2',
  Sha256 = 'sha256',
  Md5 = 'md5',
  Crc = 'crc'
}
