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

import type { ClientOpts } from '@/config/opts.repo'
import { SiteAPI } from '@/controller/site-api'
import type { Activity } from '@/domain/activity'
import type { DataError } from '@/domain/error'
import type { Page } from '@/domain/page'
import { Client } from '@/infra/client'
import type { ClientRepo, Response } from '@/infra/client.repo'
import type { PageParams } from '@/infra/params.repo'

import page200 from '#/fixtures/v1/api/page-200.json'
import page404 from '#/fixtures/v1/api/page-404.json'
import pageSize200 from '#/fixtures/v1/api/pageSize-200.json'
import pageSize500 from '#/fixtures/v1/api/pageSize-500.json'
import { Schema } from '#/utils/schema'

const baseURL = 'https://example.lol/api/1'
const clientOpts: ClientOpts = { baseURL }
const client: ClientRepo = Client(clientOpts)
const site = SiteAPI(client)
const errorSchema = Schema('error', 'DataError')

const server = setupServer(
  http.get(`${baseURL}/activity`, ({ request }) => {
    const requestURL: string = request.url
    const url: URL = new URL(requestURL)
    const page: string | null = url.searchParams.get('page')
    const pageSize: string | null = url.searchParams.get('page_size')

    if (page === '10') {
      return HttpResponse.json(page200, { status: 200 })
    }

    if (page === '-1' || page === '5000000') {
      return HttpResponse.json(page404, { status: 404 })
    }

    if (pageSize === '10') {
      return HttpResponse.json(pageSize200, { status: 200 })
    }

    if (pageSize === '-1' || pageSize === '5000000') {
      return HttpResponse.json(pageSize500, { status: 500 })
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

describe('pagination params', () => {
  describe('page param', () => {
    test('when 10 pages', async () => {
      const params: PageParams = { page: 10 }
      const response = await site.getActivities(params)
      const { status, data: page } = response as Response<Page<Activity[]>>
      expect(status).toBe(200)
      expect(page.page).toBe(10)
      expect(page.nextPage).toMatch('page=11')
      expect(page.previousPage).toMatch('page=9')
    })

    test('when too few pages', async () => {
      const params: PageParams = { page: -1 }
      const response = await site.getActivities(params)
      const { status, data: page } = response as Response<DataError>
      expect(status).toBe(404)
      expect(errorSchema.errors(page)).toBeFalsy()
    })

    test('when too many pages', async () => {
      const params: PageParams = { page: 5000000 }
      const response = await site.getActivities(params)
      const { status, data: page } = response as Response<DataError>
      expect(status).toBe(404)
      expect(errorSchema.errors(page)).toBeFalsy()
    })
  })

  describe('page size param', () => {
    test('when 10 per page', async () => {
      const params: PageParams = { pageSize: 10 }
      const response = await site.getActivities(params)
      const { status, data: page } = response as Response<Page<Activity[]>>
      expect(status).toBe(200)
      expect(page.pageSize).toBe(10)
      expect(page.nextPage).toMatch('page_size=10')
    })

    test('when too few per page', async () => {
      const params: PageParams = { pageSize: -1 }
      const response = await site.getActivities(params)
      const { status, data: page } = response as Response<DataError>
      expect(status).toBe(500)
      expect(errorSchema.errors(page)).toBeFalsy()
    })

    test('when too many per page', async () => {
      const params: PageParams = { pageSize: 5000000 }
      const response = await site.getActivities(params)
      const { status, data: page } = response as Response<DataError>
      expect(status).toBe(500)
      expect(errorSchema.errors(page)).toBeFalsy()
    })
  })
})
