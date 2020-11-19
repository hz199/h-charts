import { Columns, ObjectKey } from './type'

/**
 * 节流方法
 * @param fn 执行函数
 * @param interval 时间间隔 默认 500
 */
export function throttle(fn: Function, wait = 500) {
  let callback = fn
  let timerId: any = null

  // 是否是第一次执行
  let firstInvoke = false

  let context = function throttled() {
    let args = arguments

    // 如果是第一次触发，直接执行
    if (firstInvoke) {
      callback.apply(context, args)
      firstInvoke = false
      return
    }

    // 如果定时器已存在，直接返回。
    if (timerId) {
      return
    }

    timerId = setTimeout(function () {
      clearTimeout(timerId)
      timerId = null

      callback.apply(context, args)
    }, wait)
  }

  return context
}

export function debounce (fn: Function, delay = 500) {
  let timer:NodeJS.Timeout | null = null
  const self = function () {
    const args = arguments
    clearTimeout(timer!)
    timer = setTimeout(function () {
      fn.apply(self, args)
    }, delay)
  }

  return self
}

// type Partial<T> = { [P in keyof T]?: T[P] }

export function columnsToObject <T extends Columns>(columns: T[]) {
  const results: ObjectKey<T> = {}

  columns.forEach(column => {
    results[column.key] = column
  })

  return results
}

const toString = Object.prototype.toString
// toString.call(1) //[object Number]
// toString.call(undefined) //[object Undefined]
// toString.call(null) //[object Null]
// toString.call(false) //[object Boolean]
// toString.call("test") //[object String]
// toString.call({}) //[object Object]
// toString.call(/[a-z]/g) //[object RegExp]
// toString.call(function(){}) //[object Function]

export const isBoolean = (payload: any) => {
  return toString.call(payload) === '[object Boolean]'
}
