/**
 * 节流方法
 * @param fn 执行函数
 * @param interval 时间间隔 默认 500
 */
export function throttle(fn: Function, interval = 500) {
  const self = fn // 保存需要被延迟执行的函数的引用
  let timer: any = null
  let firstTime = true // 是否第一次调用

  const that = function(...args: any) {
    if (firstTime) {
      self.apply(that, args)
      return (firstTime = false)
    }

    if (timer) {
      return false
    }

    timer = setTimeout(function() {
      clearTimeout(timer!)
      timer = null
      self.apply(that, args)
    }, interval)
  }

  return that
}

/**
 * 防抖函数
 * @param fn
 * @param delay
 */
export function debounce(fn: Function, delay = 500) {
  let timer: NodeJS.Timeout | null
  return function(...args: any) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn(...args)
      timer = null
    }, delay)
  }
}
