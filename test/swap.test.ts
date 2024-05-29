import { describe, expect, it } from 'vitest'
import { swap } from '../src/swap'

describe('swap', () => {
  it('should swap the elements at the given indices', () => {
    const arr = [1, 2, 3, 4, 5]
    const swappedArr = swap(arr, 1, 3)

    expect(swappedArr).toEqual([1, 4, 3, 2, 5])
    expect(arr).toEqual([1, 2, 3, 4, 5])
  })

  it('should not modify the original array', () => {
    const arr = ['a', 'b', 'c']
    const swappedArr = swap(arr, 0, 2)

    expect(swappedArr).toEqual(['c', 'b', 'a'])
    expect(arr).toEqual(['a', 'b', 'c'])
  })
})
