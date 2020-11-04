export type ObjectKey<T = any> = {
  [x in (string | number)]: T
}

export interface Columns {
  title: string | number
  key: string | number
}
