import { expect, it } from 'vitest'
import { descartes } from '../src/descartes'

it('test descartes', () => {
  expect(descartes([[1, 2], [3, 4]])).toStrictEqual([[1, 3], [1, 4], [2, 3], [2, 4]])
  expect(descartes([
    ['男裤', '女裤'],
    ['黑色', '白色'],
    ['S', 'L'],
  ])).toStrictEqual([['男裤', '黑色', 'S'], ['男裤', '黑色', 'L'], ['男裤', '白色', 'S'], ['男裤', '白色', 'L'], ['女裤', '黑色', 'S'], ['女裤', '黑色', 'L'], ['女裤', '白色', 'S'], ['女裤', '白色', 'L']])
})
