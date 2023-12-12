import { expect, test } from '@jest/globals'

import type { Site } from '@/domain/site'

import { Schema } from '#/utils/schema'

const site: Site = {
  id: 'example.lol',
  metrics: {
    datasets: 1,
    discussions: 1,
    followers: 1,
    harvesters: 1,
    maxDatasetFollowers: 1,
    maxDatasetReuses: 1,
    maxOrgDatasets: 1,
    maxOrgFollowers: 1,
    maxOrgReuses: 1,
    maxReuseDatasets: 1,
    maxReuseFollowers: 1,
    organizations: 1,
    publicService: 1,
    resources: 1,
    reuses: 1,
    users: 1
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
