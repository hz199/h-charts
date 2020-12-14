import MockJS from 'mockjs'

export const basePieMock = () => {
  return MockJS.mock({
    'columns': [{ title: '余杭人数', key: 'number1'},{ title: '西湖人数', key: 'number2' },{ title: '下城人数', key: 'number3' }, { title: '萧山人数', key: 'number4' }],
    'rows': { 'number1|100-1000': 800, 'number2|1000-1500': 1393, 'number3|500-2000': 500, 'number4|500-2000': 500 },
  })
}