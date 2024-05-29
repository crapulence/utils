/**
 * Extend interface props
 * interface A {
 *   x: string;
 * }
 * type B = Extend<A, { x: number }>;
 * => type B = { x: number; y: number; }
 */
export type Extend<T, U extends { [K in keyof U]: unknown }> = Omit<T, keyof U> & U
