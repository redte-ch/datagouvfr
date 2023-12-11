import { afterAll, afterEach, beforeAll, expect, test } from '@jest/globals'
import type { AxiosRequestConfig } from 'axios'
import { HttpResponse, http } from 'msw'
import { setupServer } from 'msw/node'

import { Site } from '@/controller/site'
import getActivities from '#/fixtures/v1/site/getActivities.json'
import { Schema } from '@/utils/schema'

const baseURL = 'https://example.lol/api/1'
const endpoint = 'activity'
const opts: AxiosRequestConfig = { baseURL }
const site = Site()
const schema = Schema('page', 'PageActivities')

const server = setupServer(
  http.get(`${baseURL}/${endpoint}/`, () => {
    return HttpResponse.json(getActivities, { status: 200 })
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
  expect(schema.errors(page)).toBeFalsy()
})
