import MockJS from 'mockjs'

export const baseLineMock = () => {
  return MockJS.mock({
    'columns': [{ title: '总计', key: 'sum', type: 'line'},{ title: '用户', key: 'user' },{ title: '数量', key: 'num' }
    ],
    'xAxis|6': ['@date("yyyy-MM-dd")'],
    'rows|6': [
      { 'sum|100-1000': 800, 'user|1000-1500': 1393, 'num|1200-2000': 1593 },
    ]
  })
}

export const doubleYLineMock = () => {
  return MockJS.mock({
    'columns': [{ title: '余杭人数', key: 'number1'},{ title: '西湖人数', key: 'number2' },{ title: '比率', key: 'ratio', right: true }
    ],
    'xAxis|6': ['@date("yyyy-MM-dd")'],
    'rows|6': [
      { 'number1|100-1000': 800, 'number2|1000-1500': 1393, 'ratio|0-100': 50 },
    ]
  })
}

export const xNumberYLineMock = () => {
  return MockJS.mock({
    'columns': [{ title: '余杭人数', key: 'number1'},{ title: '西湖人数', key: 'number2' },{ title: '其他', key: 'ratio' }
    ],
    'xAxis': [1, 3, 6, 7, 8, 11],
    'rows|6': [
      { 'number1|100-1000': 800, 'number2|1000-1500': 1393, 'ratio|500-1000': 50 },
    ]
  })
}

export const xTypeTimeLineMock = () => {
  let result = []
  let now = Date.parse(new Date())
  for (let i = 0; i < 10; i++) {
    let num1 = Math.floor(Math.random() * (3000 - 800 + 1) + 800)
    let num2 = Math.floor(Math.random() * (3000 - 800 + 1) + 100)
    let num3 = Math.floor(Math.random() * (3000 - 800 + 1) + 400)
    let times = now - i * 30 * 60 * 1000
    result.unshift({
      number1: [times, num1],
      number2: [times, num2],
      number3: [times, num3]
    })
  }

  return {
    'columns': [{ title: '余杭人数', key: 'number1'},{ title: '西湖人数', key: 'number2' },{ title: '下城人数', key: 'number3' }],
    'rows': result
  }
}

export const xTypeValueLineMock = () => {
  let result = []
  for (let i = 0; i < 10; i++) {
    let num1 = Math.floor(Math.random() * (3000 - 800 + 1) + 800)
    let num2 = Math.floor(Math.random() * (3000 - 800 + 1) + 100)
    let num3 = Math.floor(Math.random() * (3000 - 800 + 1) + 400)
    let times = i
    result.unshift({
      number1: [times, num1],
      number2: [times, num2],
      number3: [times, num3]
    })
  }

  return {
    'columns': [{ title: '余杭人数', key: 'number1'},{ title: '西湖人数', key: 'number2' },{ title: '下城人数', key: 'number3' }],
    'rows': result
  }
}

