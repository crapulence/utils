export function descartes<T>(groups: T[][]): T[][] {
  return groups.reduce<T[][]>((a, b) => a.flatMap(x => b.map(y => [...x, y])), [[]])
}
