export type ObjectKey<T = any> = {
  [x in (string | number)]: T
}