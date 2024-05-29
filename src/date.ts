/**
 * 获取给定年月的最后一天
 * @param year number
 * @param month number
 * @returns number
 */
export function getMonthEndDay(year: number, month: number): number {
  return 32 - new Date(year, month - 1, 32).getDate()
}
