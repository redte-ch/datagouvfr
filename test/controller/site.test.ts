import getActivities from '#/fixtures/v1/site/getActivities.json'
import getMetricsFor from '#/fixtures/v1/site/getMetricsFor.json'
import { afterAll, afterEach, beforeAll, expect, test } from '@jest/globals'
import type { AxiosRequestConfig } from 'axios'
import { HttpResponse, http } from 'msw'
import { setupServer } from 'msw/node'
import { v4 as uuid } from 'uuid'

import { Site } from '@/controller/site'
import { Schema } from '@/utils/schema'

const baseURL = 'https://example.lol/api/1'
const opts: AxiosRequestConfig = { baseURL }
const site = Site()
const id = uuid()
const pageSchema = Schema('page', 'ActivityPage')
const errorSchema = Schema('error', 'DataError')

const server = setupServer(
  http.get(`${baseURL}/activity`, () => {
    return HttpResponse.json(getActivities, { status: 200 })
  }),

  http.get(`${baseURL}/metrics/${id}`, () => {
    return HttpResponse.json(getMetricsFor, { status: 501 })
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
  const { status, data: page } = await site.getActivities(opts)
  expect(status).toBe(200)
  expect(pageSchema.errors(page)).toBeFalsy()
})

test('GET /metrics/{id}', async () => {
  const { status, data: error } = await site.getMetricsFor(id, opts)
  expect(status).toBe(501)
  expect(error.message).not.toBeFalsy()
  expect(errorSchema.errors(error)).toBeFalsy()
})
