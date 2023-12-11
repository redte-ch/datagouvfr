import { expect, test } from '@jest/globals'

import type { Site } from '@/domain/site'
import { Schema } from '@/utils/schema'

const site: Site = {
  id: 'data.gouv.fr',
  metrics: {
    datasets: 46978,
    discussions: 12886,
    followers: 30355,
    harvesters: 308,
    maxDatasetFollowers: 154,
    maxDatasetReuses: 143,
    maxOrgDatasets: 1017,
    maxOrgFollowers: 636,
    maxOrgReuses: 85,
    maxReuseDatasets: 68,
    maxReuseFollowers: 324,
    organizations: 4855,
    publicService: 0,
    resources: 272685,
    reuses: 3657,
    users: 112867
  },
  title: 'data.gouv.fr'
}

test('resolve path', () => {
  const name = 'dataset'
  const schema = Schema(name)
  expect(schema.path).toMatch(`src/domain/${name}.ts`)
})

test('generate schema', () => {
  const name = 'dataset'
  const { schema } = Schema(name)
  const { definitions } = schema
  expect(definitions).toHaveProperty('Badge')
  expect(definitions).toHaveProperty('Dataset')
})

test('generate schema for a specific type', () => {
  const name = 'dataset'
  const type = 'Badge'
  const { schema } = Schema(name, type)
  const { definitions } = schema
  expect(definitions).toHaveProperty('Badge')
  expect(definitions).not.toHaveProperty('Dataset')
})

test('validate that data correspond to schemas', () => {
  const name = 'site'
  const schema = Schema(name)
  expect(schema.errors(site)).toBeFalsy()
})
