import { expect, it } from 'vitest'
import { getPathByTree, getPathByTrees } from '../src/tree'

const data = [
  {
    label: 'a',
    value: '1',
    children: [
      {
        label: 'a-1',
        value: '1-1',
        children: [],
      },
      {
        label: 'a-2',
        value: '1-2',
        children: [
          {
            label: 'a-2-1',
            value: '1-2-1',
            children: [],
          },
        ],
      },
      {
        label: 'a-3',
        value: '1-3',
        children: [
          {
            label: 'a-3-1',
            value: '1-3-1',
            children: [],
          },
        ],
      },
    ],
  },
]

const data2 = [{ label: 'a', value: 1, children: [{ label: 'a-1', value: 2, children: [] }] }, { label: 'a', value: 1, children: [{ label: 'a-2', value: 2, children: [] }] }]

it('should return the correct array of paths', () => {
  expect(getPathByTree(data, item => item.label === 'a-2-1')).toMatchSnapshot()
})

it('should return multiple correct path arrays', () => {
  expect(getPathByTrees(data2, item => item.label === 'a')).toMatchSnapshot()
})
