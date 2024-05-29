import { expect, it } from 'vitest'
import { getMonthEndDay } from '../src/date'

it('should return the last day of the month', () => {
  expect(getMonthEndDay(2024, 5)).toBe(31)
  expect(getMonthEndDay(2024, 2)).toBe(29)
})
