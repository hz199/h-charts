import MockJS from 'mockjs'

export const baseBarMock = (type = 'bar') => {
  return MockJS.mock({
    'columns': [{
        title: '蒸发量',
        key: 'evaporation',
        type: 'bar'
      },
      {
        title: '降雨量',
        key: 'rainfall',
        type: 'bar'
      }
    ],
    'xAxis': ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    'rows|12': [{
      'evaporation|100-1000': 800,
      'rainfall|500-2000': 1393
    }, ]
  })
}

export const waterFallMock = () => {
  return MockJS.mock({
    'columns': [{
        title: '房租',
        key: 'number1'
      },
      {
        title: '水电费',
        key: 'number2'
      },
      {
        title: '交通费',
        key: 'number3'
      },
      {
        title: '伙食费',
        key: 'number4'
      },
      {
        title: '日用品数',
        key: 'number5'
      }
    ],
    'rows': [
      {
        'number1': 3000,
        'number2': 1000,
        'number3': 2000,
        'number4': 400,
        'number5': 600
      }
    ]
  })
}