import { Columns, ObjectKey, Tuple } from '../../utils/type'
import { EChartOption, EChartTitleOption } from 'echarts/lib/echarts'
import { columnsToObject, isBoolean } from '../../utils/utils'
import { defaultLegend, defaultTooltip } from '../../utils/defaultChartConfig'
export interface LineCustomsColumns {
  right?: boolean // line
  markMax?: boolean // 显示最大值标注
  markMin?: boolean // 显示最小值标注
}

export type LineColumns = Columns & LineCustomsColumns

export interface LineDataSource<T extends {}> {
  columns: Array<LineColumns>
  rows: Array<T>
  xAxis: Array<string>
}

export interface LineSettings {
  title?: EChartTitleOption
  xAxisType?: EChartOption.BasicComponents.CartesianAxis.Type
  xVisible?: boolean
  // 区域图形显示
  area?: boolean,
  // 是否是平滑曲线
  smooth?: boolean
  tooltip?: EChartOption.Tooltip | boolean

  yFormatter?: Tuple<string | ((val: any) => string), 2>
  yVisible?: boolean
  yAxisName?: Array<string>

  LegendVisible?: boolean
}

const getLineXAxis = <T>(dataSource: LineDataSource<T>, settings: LineSettings) => {
  const { xAxisType = 'category', xVisible = true } = settings
  const { xAxis = [] } = dataSource

  return {
    type: xAxisType,
    data: xAxis,
    show: xVisible
  }
}

const getLineYAxis = <T>(
  dataSource: LineDataSource<T>,
  settings: LineSettings) => {
  const {
    yVisible = true,
    yFormatter = ['{value}', '{value}'],
    yAxisName = []
  } = settings

  const yAxisDefault: EChartOption.YAxis = {
    type: 'value',
    axisTick: {
      show: false
    },
    show: yVisible
  }

  const yAxisResult: EChartOption.YAxis[] = []

  for (let i = 0; i < 2; i ++) {
    yAxisResult[i] = Object.assign({}, yAxisDefault, {
      position: i === 1 ? 'right' : 'left',
      axisLabel: {
        formatter: yFormatter[i]
      }
    })

    yAxisResult[i].name = yAxisName[i] || ''
  }

  return yAxisResult
}

const getLineTooltip = <T>(dataSource: LineDataSource<T>, settings: LineSettings) => {
  const { tooltip = true } = settings
  const defaultTip = defaultTooltip()

  return isBoolean(tooltip) ? (
    tooltip ? defaultTip : {}
  ) : tooltip
}

const getLineSeries = <T>(
  dataSource: LineDataSource<T>,
  settings: LineSettings,
  lineColumns: ObjectKey<LineColumns>) => {
  const { rows } = dataSource
  const { area, smooth = true } = settings
  const dataSourceMap: ObjectKey = {}

  rows.forEach(item => {
    for (let key in item) {
      if (!dataSourceMap[key]) {
        dataSourceMap[key] = []
        dataSourceMap[key].push(item[key])
      } else {
        dataSourceMap[key].push(item[key])
      }
    }
  })

  const series: EChartOption.Series[] = []

  for (let key in dataSourceMap) {
    const currentLineColumns = lineColumns[key]

    const markMax = currentLineColumns.markMax ? [{ name: '最大值', type: 'max' }] : []
    const markMin = currentLineColumns.markMin ? [{ name: '最小值', type: 'min' }] : []

    series.push({
      name: currentLineColumns.title + '',
      type: 'line',
      smooth,
      symbol: 'circle',
      symbolSize: 10,
      yAxisIndex: currentLineColumns.right ? 1 : 0,
      data: dataSourceMap[key],
      markPoint: {
        data: [
          ...markMax,
          ...markMin
        ]
      },
      ...area ? {
        areaStyle: {
          opacity: 0.1
        }
      } : {}
    })
  }

  return series
}

const getLineLegend = <T>(dataSource: LineDataSource<T>, settings: LineSettings) => {
  const { LegendVisible = true } = settings

  return defaultLegend(LegendVisible)
}

const lineHandle = <T = any>(dataSource: LineDataSource<T>, settings: LineSettings) => {
  const lineColumns = columnsToObject<LineColumns>(dataSource.columns)

  const xAxis = getLineXAxis<T>(dataSource, settings)
  const yAxis = getLineYAxis<T>(dataSource, settings)
  const series = getLineSeries<T>(dataSource, settings, lineColumns)
  const tooltip = getLineTooltip<T>(dataSource, settings)
  const legend = getLineLegend<T>(dataSource, settings)
  const { title = {} } = settings

  const options = {
    title,
    legend,
    xAxis,
    yAxis,
    series,
    tooltip
  }

  return options as EChartOption
}

export default lineHandle
