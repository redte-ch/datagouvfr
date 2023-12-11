/**
 * Copyleft (ɔ) 2023 Mauko Quiroga-Alvarado <public@mauko.me>
 * Licensed under the EUPL-1.2-or-later
 * For details: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
 */
import Ajv from 'ajv'
import type { ErrorObject } from 'ajv'
import { resolve } from 'path'
import { createGenerator } from 'ts-json-schema-generator'
import type { Schema as JSONSchema } from 'ts-json-schema-generator'

/**
 * @interface Schema
 */
interface Schema {
  path: string
  schema: JSONSchema
  errors: (data: unknown) => ErrorObject[] | boolean
}

/**
 * JSON Schema validator
 * @type {Ajv}
 */
const parser: Ajv = new Ajv({ allowUnionTypes: true })

/**
 * The base path for the project
 * @type {string}
 */
const basePath: string = resolve(__dirname, '../..')

/**
 * The path to the tsconfig.json file
 * @type {string}
 */
const tsconfig: string = `${basePath}/tsconfig.test.json`

/**
 * Resolve a domain model filepath
 * @param {string} name The domain name
 * @returns {string} The domain model filepath
 */
const resolvePath = (name: string): string => {
  return `${basePath}/src/domain/${name}.ts`
}

/**
 * Generate a JSON Schema from a domain model
 * @param {string} path The domain model filepath
 * @param {string} type The domain model type (default: '*')
 */
const toSchema = (path: string, type: string = '*'): JSONSchema => {
  return createGenerator({ path, tsconfig }).createSchema(type)
}

/**
 * Utility function to validate data against a JSON Schema
 * @param {string} name The domain model filename
 * @param {string} type The domain model type (default: '*')
 */
const schema = (name: string, type: string = '*'): Schema => {
  /**
   * The domain model filepath
   * @type {string}
   */
  const path: string = resolvePath(name)

  /**
   * The JSON Schema
   * @type {JSONSchema}
   */
  const schema: JSONSchema = toSchema(path, type)

  /**
   * The validation function
   * @param {unknown} data
   * @return boolean | ErrorObject[]
   */
  const errors = (data: unknown): ErrorObject[] | boolean => {
    const isValid = parser.validate(schema, data)
    const { errors } = parser
    if (errors !== undefined && errors !== null) return errors
    return !isValid
  }

  return { path, schema, errors }
}

/**
 * @export
 * @function Schema
 */
export { schema as Schema }