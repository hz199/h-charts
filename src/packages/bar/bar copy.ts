import { EChartOption, EChartTitleOption } from 'echarts/lib/echarts'
import { defaultLegend } from '../../utils/defaultChartConfig'

export interface BarDataSource<T> {}

export interface BarSettings {
  title?: EChartTitleOption
  LegendVisible?: boolean
}

const getLineLegend = <T>(dataSource: BarDataSource<T>, settings: BarSettings) => {
  const { LegendVisible = true } = settings
  return defaultLegend(LegendVisible)
}

const barHandle = <T = any>(dataSource: BarDataSource<T>, settings: BarSettings) => {

  // const xAxis = getLineXAxis<T>(dataSource, settings)
  // const yAxis = getLineYAxis<T>(dataSource, settings)
  // const series = getLineSeries<T>(dataSource, settings, lineColumns)
  // const tooltip = getLineTooltip<T>(dataSource, settings)
  const legend = getLineLegend<T>(dataSource, settings)
  const { title = {} } = settings

  const options = {
    title,
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        label: {
          show: true,
          backgroundColor: '#fff',
          color: '#556677',
          borderColor: 'rgba(0,0,0,0)',
          shadowOffsetY: 0
        },
        lineStyle: {
          width: 0
        }
      },
      padding: [10, 10],
    },
    legend,
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01]
    },
    yAxis: {
      type: 'value',
      data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
    },
    series: [
      {
        name: '2011年',
        type: 'bar',
        data: [18203, 23489, 29034, 104970, 131744, 630230]
      },
      {
        name: '2012年',
        type: 'bar',
        data: [19325, 23438, 31000, 121594, 134141, 681807]
      }
    ]
  }

  return options as EChartOption
}

export default barHandle
