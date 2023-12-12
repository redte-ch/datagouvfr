import getActivities from '#/fixtures/v1/site/getActivities.json'
import getMetrics from '#/fixtures/v1/site/getMetrics.json'
import { Schema } from '#/utils/schema'
import {
  afterAll,
  afterEach,
  beforeAll,
  expect,
  test
} from '@jest/globals'
import { HttpResponse, http } from 'msw'
import { setupServer } from 'msw/node'
import { v4 as uuid } from 'uuid'

import type { ClientOpts } from '@/config/opts.repo'
import { SiteAPI } from '@/controller/site-api'
import { Client } from '@/infra/client'
import type { ClientRepo } from '@/infra/client.repo'

const baseURL = 'https://example.lol/api/1'
const clientOpts: ClientOpts = { baseURL }
const client: ClientRepo = Client(clientOpts)
const site = SiteAPI(client)
const id = uuid()
const pageSchema = Schema('page', 'ActivityPage')
const errorSchema = Schema('error', 'DataError')

const server = setupServer(
  http.get(`${baseURL}/activity`, () => {
    return HttpResponse.json(getActivities, { status: 200 })
  }),

  http.get(`${baseURL}/metrics/${id}`, () => {
    return HttpResponse.json(getMetrics, { status: 501 })
  })
)

beforeAll(() => {
  server.listen()
})

afterEach(() => {
  server.resetHandlers()
})

afterAll(() => {
  server.close()
})

test('GET /activity', async () => {
  const { status, data: page } = await site.getActivities({})
  expect(status).toBe(200)
  expect(pageSchema.errors(page)).toBeFalsy()
})

test('GET /metrics/{id}', async () => {
  const { status, data: error } = await site.getMetrics(id)
  expect(status).toBe(501)
  expect(error.message).not.toBeFalsy()
  expect(errorSchema.errors(error)).toBeFalsy()
})


