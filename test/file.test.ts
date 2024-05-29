import { expect, it } from 'vitest'
import { getFileExtension } from '../src/file'

it('should return the extension of a filename', () => {
  expect(getFileExtension('file.txt')).toBe('txt')
  expect(getFileExtension('file.jpg')).toBe('jpg')
  expect(getFileExtension('fi.le.ext.html')).toBe('html')
})
