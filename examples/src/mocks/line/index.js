import MockJS from 'mockjs'

export const baseLineMock = () => {
  return MockJS.mock({
    'columns': [{ title: '总计', key: 'sum'},{ title: '用户', key: 'user' },{ title: '数量', key: 'num' }
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
