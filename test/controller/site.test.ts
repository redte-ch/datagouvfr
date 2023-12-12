import {
  afterAll,
  afterEach,
  beforeAll,
  describe,
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

import getActivities200 from '#/fixtures/v1/site/getActivities-200.json'
import getMetrics501 from '#/fixtures/v1/site/getMetrics-501.json'
import getOEmbed200 from '#/fixtures/v1/site/getOEmbed-200.json'
import getOEmbed404 from '#/fixtures/v1/site/getOEmbed-404.json'
import { Schema } from '#/utils/schema'

const baseURL = 'https://example.lol/api/1'
const clientOpts: ClientOpts = { baseURL }
const client: ClientRepo = Client(clientOpts)
const site = SiteAPI(client)
const id = uuid()
const pageSchema = Schema('page', 'ActivityPage')
const errorSchema = Schema('error', 'DataError')
const oembedSchema = Schema('oembed', 'OEmbed')

const server = setupServer(
  http.get(`${baseURL}/activity`, () => {
    return HttpResponse.json(getActivities200, { status: 200 })
  }),

  http.get(`${baseURL}/metrics/${id}`, () => {
    return HttpResponse.json(getMetrics501, { status: 501 })
  }),

  http.get(`${baseURL}/oembed`, ({ request }) => {
    const requestURL: string = request.url
    const url: URL = new URL(requestURL)
    const param: string | null = url.searchParams.get('url')

    if (param === 'https://example.ok') {
      return HttpResponse.json(getOEmbed200, { status: 200 })
    }

    if (param === 'https://example.ko') {
      return HttpResponse.json(getOEmbed404, { status: 404 })
    }

    return HttpResponse.error()
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

describe('GET /oembed', () => {
  test('with a known url', async () => {
    const url = 'https://example.ok'
    const format = 'json' as const
    const params = { url, format }
    const { status, data: item } = await site.getOEmbed(params)
    expect(status).toBe(200)
    expect(oembedSchema.errors(item)).toBeFalsy()
  })

  test('with an unknown url', async () => {
    const url = 'https://example.ko'
    const format = 'json' as const
    const params = { url, format }
    const { status, data: error } = await site.getOEmbed(params)
    expect(status).toBe(404)
    expect(errorSchema.errors(error)).toBeFalsy()
  })
})
