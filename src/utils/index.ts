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

export function columnsToObject (columns: Columns[]) {
  const results: ObjectKey<string | number> = {}

  columns.forEach(column => {
    results[column.key] = column.title
  })

  return results
}
