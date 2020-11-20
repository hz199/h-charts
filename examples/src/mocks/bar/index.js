import MockJS from 'mockjs'

export const baseBarMock = (type = 'bar') => {
  return MockJS.mock({
    'columns': [{
        title: '蒸发量',
        key: 'evaporation',
        type: function () {
          return Math.random() > 0.5 ? 'bar': type
        }
      },
      {
        title: '降雨量',
        key: 'rainfall',
        type: function () {
          return Math.random() > 0.5 ? 'bar': type
        }
      }
    ],
    'xAxis': ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    'rows|12': [{
      'evaporation|100-1000': 800,
      'rainfall|500-2000': 1393
    }, ]
  })
}