import { columnsToObject, isBoolean } from '../../utils/utils'
import { EChartOption, EChartTitleOption } from 'echarts/lib/echarts'
import { defaultLegend, defaultTooltip } from '../../utils/defaultChartConfig'
import { Columns, ObjectKey } from '../../utils/type'
export interface BarCustomsColumns {
  // right?: boolean // line
  // markMax?: boolean // 显示最大值标注
  // markMin?: boolean // 显示最小值标注
  type?: 'line' | 'bar'
}

export type BarColumns = Columns & BarCustomsColumns
export interface BarDataSource<T> {
  columns: Array<BarColumns>
  rows: Array<T>
  xAxis: Array<string>
}

export interface BarSettings {
  title?: EChartTitleOption
  LegendVisible?: boolean
  tooltip?: boolean | EChartOption.Tooltip

  xAxisType?: EChartOption.BasicComponents.CartesianAxis.Type
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

const getBarXAxis = <T>(dataSource: BarDataSource<T>, settings: BarSettings) => {
  const { xAxis = [] } = dataSource
  const { xAxisType = 'category' } = settings

  return [
    {
      type: xAxisType,
      data: xAxis
    }
  ]
}

const getBarYAxis = <T>(dataSource: BarDataSource<T>, settings: BarSettings) => {
  return [
    {
      type: 'value'
    }
  ]
}

const getBarSeries = <T>(dataSource: BarDataSource<T>, settings: BarSettings, barColumnsObject: ObjectKey<BarColumns>) => {
  const { rows } = dataSource
  const dataSourceMap: ObjectKey = {}

  rows.forEach(item => {
    for (let key in item) {
      const currentBarColumns = barColumnsObject[key]
      if (!dataSourceMap[key] && currentBarColumns) {
        dataSourceMap[key] = []
      }
      if (currentBarColumns) {
        dataSourceMap[key].push(item[key])
      }
    }
  })

  const series: EChartOption.Series[] = []

  for (let key in dataSourceMap) {
    const currentBarColumns = barColumnsObject[key]

    series.push(
      {
        name: currentBarColumns.title + '',
        type: currentBarColumns.type || 'bar',
        data: dataSourceMap[key] || [],
        smooth: true,
        symbol: 'circle',
        symbolSize: 10,
      }
    )
  }

  return series
}

const barHandle = <T = any>(dataSource: BarDataSource<T>, settings: BarSettings) => {
  const barColumnsObject = columnsToObject<BarColumns>(dataSource.columns)
  // console.log(JSON.stringify(dataSource, null, 2))
  const xAxis = getBarXAxis<T>(dataSource, settings)
  const yAxis = getBarYAxis<T>(dataSource, settings)
  const series = getBarSeries<T>(dataSource, settings, barColumnsObject)
  const tooltip = getBarTooltip<T>(dataSource, settings)
  const legend = getLineLegend<T>(dataSource, settings)

  const { title = {} } = settings

  const options = {
    title,
    tooltip,
    legend,
    xAxis,
    yAxis,
    series
  }

  return options as EChartOption
}

export default barHandle
