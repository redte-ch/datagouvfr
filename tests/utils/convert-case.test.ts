import { expect, test } from '@jest/globals'

import { toCamel, toSnake } from '@/utils/convert-case'

interface Camel {
  metrics: {
    datasets: number
    maxDatasetFollowers: number
    publicService: number
  }
}

interface Snake {
  metrics: {
    datasets: number
    max_dataset_followers: number
    public_service: number
  }
}

const camel: Camel = {
  metrics: {
    datasets: 1,
    maxDatasetFollowers: 1,
    publicService: 1
  }
}

const snake: Snake = {
  metrics: {
    datasets: 1,
    max_dataset_followers: 1,
    public_service: 1
  }
}

test('convert to snake case', () => {
  const result = toSnake(camel)
  expect(result).toEqual(snake)
})

test('convert to camel case', () => {
  const result = toCamel(snake)
  expect(result).toEqual(camel)
})
