import { Columns, ObjectKey, Tuple } from '../../utils/type'
import { EChartOption, EChartTitleOption } from 'echarts/lib/echarts'
import { columnsToObject, isBoolean } from '../../utils/utils'
import { defaultLegend, defaultTooltip } from '../../utils/defaultChartConfig'
export interface HistogramBaseColumns {
  right?: boolean // line
  markMax?: boolean // 显示最大值标注
  markMin?: boolean // 显示最小值标注
  type?: 'line' | 'bar'
}

export type HistogramColumns = Columns & HistogramBaseColumns

export interface HistogramDataSource<T extends {}> {
  columns: Array<HistogramColumns>
  rows: Array<T>
  xAxis: Array<string>
  waterFall?: Object
}

export interface HistogramSettings {
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
  barGap?: string
  stack?: boolean
  labelShow?: boolean
  waterfall?: boolean
}

const histogramXAxis = <T>(dataSource: HistogramDataSource<T>, settings: HistogramSettings) => {
  const { xAxisType = 'category', xVisible = true } = settings
  const { xAxis = [] } = dataSource

  return {
    type: xAxisType,
    data: xAxis,
    show: xVisible
  }
}

const histogramYAxis = <T>(
  dataSource: HistogramDataSource<T>,
  settings: HistogramSettings) => {
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

const histogramTooltip = <T>(dataSource: HistogramDataSource<T>, settings: HistogramSettings) => {
  const { tooltip = true } = settings
  const defaultTip = defaultTooltip()

  return isBoolean(tooltip) ? (
    tooltip ? defaultTip : {}
  ) : tooltip
}

const histogramSeries = <T>(
  dataSource: HistogramDataSource<T>,
  settings: HistogramSettings,
  histogramColumns: ObjectKey<HistogramColumns>) => {
  const { rows = [] } = dataSource
  const {
    area,
    smooth = true,
    barGap = '20%',
    stack = false,
    labelShow = false
  } = settings
  const dataSourceMap: ObjectKey = {}

  rows.forEach(item => {
    for (let key in item) {
      const currentHistogramColumns = histogramColumns[key]

      if (!dataSourceMap[key] && currentHistogramColumns) {
        dataSourceMap[key] = []
      }

      if (currentHistogramColumns) {
        dataSourceMap[key].push(item[key])
      }
    }
  })

  const series: EChartOption.Series[] = []

  for (let key in dataSourceMap) {
    const currentHistogramColumns = histogramColumns[key]

    const barSeries = {
      barGap,
      stack,
      label: {
        show: labelShow,
        color: '#314659'
      }
    }

    const lineSeries = {
      smooth,
      symbolSize: 10,
      ...area ? {
        areaStyle: {
          opacity: 0.2
        }
      } : {}
    }

    const type = currentHistogramColumns.type || 'line'

    series.push({
      name: currentHistogramColumns.title + '',
      type,
      yAxisIndex: currentHistogramColumns.right ? 1 : 0,
      data: dataSourceMap[key],
      markPoint: {
        data: [
          ...currentHistogramColumns.markMax ? [{ name: '最大值', type: 'max' }] : [],
          ...currentHistogramColumns.markMin ? [{ name: '最小值', type: 'min' }] : []
        ]
      },
      ...type === 'line' ? lineSeries : {},
      ...type === 'bar' ? barSeries : {}
    })
  }

  return series
}

const histogramLegend = <T>(dataSource: HistogramDataSource<T>, settings: HistogramSettings) => {
  const { LegendVisible = true } = settings

  return defaultLegend(LegendVisible)
}

const histogramHandle = <T = any>(
  dataSource: HistogramDataSource<T>,
  settings: HistogramSettings,
  ariaShow = false
) => {
  const histogramColumns = columnsToObject<HistogramColumns>(dataSource.columns)

  const xAxis = histogramXAxis<T>(dataSource, settings)
  const yAxis = histogramYAxis<T>(dataSource, settings)
  const series = histogramSeries<T>(dataSource, settings, histogramColumns)
  const tooltip = histogramTooltip<T>(dataSource, settings)
  const legend = histogramLegend<T>(dataSource, settings)
  const { title = {} } = settings

  const options = {
    aria: {
      show: ariaShow
    },
    title,
    legend,
    xAxis,
    yAxis,
    series,
    tooltip
  }

  return options as EChartOption
}

export default histogramHandle