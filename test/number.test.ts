import { expect, it } from 'vitest'
import { findMissingNumber } from '../src/number'

it('find missing number', () => {
  expect(findMissingNumber([1, 2, 4, 5, 6])).toStrictEqual([3])
  expect(findMissingNumber([1, 2, 4, 5, 6, 8, 9, 10, 11, 12])).toStrictEqual([3, 7])
})
