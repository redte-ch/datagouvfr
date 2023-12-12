/**
 * Copyleft (ɔ) 2023 Mauko Quiroga-Alvarado <public@mauko.me>
 * Licensed under the EUPL-1.2-or-later
 * For details: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
 */
import type { ErrorObject } from 'ajv'
import type { Schema as JSONSchema } from 'ts-json-schema-generator'

/**
 * @export
 * @interface SchemaRepo
 */
export interface SchemaRepo {
  path: string
  schema: JSONSchema
  errors: (data: unknown) => ErrorObject[] | boolean
}
