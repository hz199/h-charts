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
      // {
      //   title: 'bar 柱状图',
      //   path: '/bar'
      // },
    ]
  }
]