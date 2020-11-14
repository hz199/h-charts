export type ObjectKey<T = any> = {
  [x in (string | number)]: T
}

export type Tuple<T, L extends number> = T[] & { length: L }

export interface Columns {
  title: string | number
  key: string | number
}
