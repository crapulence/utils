/**
 * 获取树形结构中满足条件的路径数组
 * @param tree 树形数组
 * @param fn 条件函数
 * @returns 满足条件的路径数组
 */
export function getPathByTree<T extends { children?: T[] }>(
  tree: T[],
  fn: (data: T) => boolean,
  path: T[] = [],
): T[] {
  if (!tree || tree.length === 0) {
    return []
  }

  for (const data of tree) {
    path.push(data)
    if (fn(data)) {
      return path
    }
    if (data.children) {
      const findChildren = getPathByTree(data.children, fn, path)
      if (findChildren.length > 0) {
        return findChildren
      }
    }
    path.pop()
  }
  return []
}

/**
 * 获取多个树形结构中满足条件的路径数组
 * @param trees 树形数组
 * @param fn 条件函数
 * @returns 满足条件的路径数组
 */
export function getPathByTrees<T extends { children?: T[] }>(
  trees: T[],
  fn: (data: T) => boolean,
  path: T[] = [],
  results: T[][] = [],
): T[][] {
  if (!trees || trees.length === 0) {
    return results
  }

  for (const tree of trees) {
    path.push(tree)
    if (fn(tree)) {
      results.push([...path])
    }
    if (tree.children) {
      getPathByTrees(tree.children, fn, path, results)
    }
    path.pop()
  }
  return results
}

/**
 * 遍历树节点
 */
export function walk<T extends { children?: T[] }>(list: T[], cb: (child: T, parent?: T) => unknown, parent?: T): void {
  for (const item of list) {
    cb(item, parent)
    if (item.children?.length) {
      walk(item.children, cb, item)
    }
  }
}
