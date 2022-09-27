import MockJS from 'mockjs'

export const RadarBaseMock = () => {
  return MockJS.mock({
    'columns': [{
        title: '速度',
        key: 'number1'
      },
      {
        title: '力量',
        key: 'number2'
      },
      {
        title: 'AOE',
        key: 'number3'
      },
      {
        title: '破甲',
        key: 'number4'
      },
      {
        title: '闪避',
        key: 'number5'
      },
      {
        title: '坦度',
        key: 'number6'
      }
    ],
    'rows|3-6': [
      {
        'number1|1000-20000': 10000,
        'number2|1000-20000': 8000,
        'number3|1000-20000': 5000,
        'number4|1000-20000': 3000,
        'number5|1000-20000': 2000,
        'number6|1000-20000': 9000
      }
    ]
  })
}