function isObject (value) {
  const type = typeof value
  return value !== null && (type === 'object' || type === 'function')
}

// { a: [{ b: 2 }] } { a: [{ c: 2 }]} -> { a: [{b:2}, {c:2}]}
// merge({o: {a: 3}}, {o: {b:4}}) => {o: {a:3, b:4}}
function merge (source, other) {
  if (!isObject(source) || !isObject(other)) {
    return other === undefined ? source : other
  }
  return Object.keys({
    ...source,
    ...other
  }).reduce((acc, key) => {
    acc[key] = merge(source[key], other[key])
    return acc
  }, Array.isArray(source) ? [] : {})
}

// const a = [{ b: 2 }]
// const b = [{ c: 2 }]

const a = {
  a: 1,
  b: {
    c: 2,
    d: 3
  },
  f: [
    4, 5
  ],
}
const b = {
  a: 2,
  b: {
    c: 2,
    d: 5,
    h: 544
  },
  f: [
    4, 5,
    645,8679
  ],
}
console.log(merge(a, b))