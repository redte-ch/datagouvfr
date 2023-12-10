import Ajv from 'ajv'
import { resolve } from 'path'
import { createGenerator } from 'ts-json-schema-generator'
import type { Schema as JSONSchema } from 'ts-json-schema-generator'

interface Schema {
  path: string
  schema: JSONSchema
  validate: (data: unknown) => boolean
}

const parser: Ajv = new Ajv()
const basePath = resolve(__dirname, '../..')
const tsconfig = `${basePath}/tsconfig.json`

const resolvePath = (name: string): string => {
  return `${basePath}/src/domain/${name}.ts`
}

const toSchema = (path: string, type: string = '*'): JSONSchema => {
  return createGenerator({ path, tsconfig }).createSchema(type)
}

const schema = (name: string, type: string = '*'): Schema => {
  const path = resolvePath(name)
  const schema = toSchema(path, type)
  const validate = parser.compile(schema)

  return { path, schema, validate }
}

export { schema as Schema }
