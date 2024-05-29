/**
 * 交换数组中的2个位置
 */
export function swap<T>(arr: T[], indexA: number, indexB: number): T[] {
  const newArr = [...arr];
  [newArr[indexA], newArr[indexB]] = [newArr[indexB], newArr[indexA]]
  return newArr
}
