export default [
  {
    title: '介绍',
    path: '/'
  },
  {
    title: '开始使用',
    path: '/start'
  },
  {
    title: '图表',
    children: [
      {
        title: 'ChartCore',
        path: '/chart'
      },
      {
        title: 'histogram 直方图',
        path: '/histogram'
      },
      {
        title: 'pie 饼状图',
        path: '/pie'
      },
      {
        title: 'Radar 雷达图',
        path: '/radar'
      },
    ]
  }
]