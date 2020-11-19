import { isBoolean } from '../../utils/utils'
import { EChartOption, EChartTitleOption } from 'echarts/lib/echarts'
import { defaultLegend, defaultTooltip } from '../../utils/defaultChartConfig'

export interface BarDataSource<T> { }

export interface BarSettings {
  title?: EChartTitleOption
  LegendVisible?: boolean
  tooltip?: boolean | EChartOption.Tooltip
}

const getLineLegend = <T>(dataSource: BarDataSource<T>, settings: BarSettings) => {
  const { LegendVisible = true } = settings
  return defaultLegend(LegendVisible)
}

const getBarTooltip = <T>(dataSource: BarDataSource<T>, settings: BarSettings) => {
  const { tooltip = true } = settings
  const defaultTip = defaultTooltip()

  return isBoolean(tooltip) ? (
    tooltip ? defaultTip : {}
  ) : tooltip
}

const barHandle = <T = any>(dataSource: BarDataSource<T>, settings: BarSettings) => {

  // const xAxis = getLineXAxis<T>(dataSource, settings)
  // const yAxis = getLineYAxis<T>(dataSource, settings)
  // const series = getLineSeries<T>(dataSource, settings, lineColumns)
  const tooltip = getBarTooltip<T>(dataSource, settings)
  const legend = getLineLegend<T>(dataSource, settings)
  const { title = {} } = settings
  console.log(dataSource)

  const options = {
    title,
    tooltip,
    legend,
    xAxis: [
      {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '蒸发量',
        type: 'bar',
        data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
      },
      {
        name: '降水量',
        type: 'line',
        symbolSize: 10,
        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
      }
    ]
  }

  return options as EChartOption
}

export default barHandle
