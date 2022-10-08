import { Columns, ObjectKey, Tuple } from '@yyr1994/h-charts/packages/utils/type'
import { BarSeriesOption, EChartsOption, LineSeriesOption, TitleOption, TooltipOption, YAXisOption } from 'echarts/types/dist/shared'
import { columnsToObject, isBoolean } from '@yyr1994/h-charts/packages/utils/utils'
import { defaultLegend, defaultTooltip } from '@yyr1994/h-charts/packages/utils/defaultChartConfig'
import { waterFallSeries, waterXAxis } from './waterfall'

export interface HistogramBaseColumns {
  right?: boolean // line
  markMax?: boolean // 显示最大值标注
  markMin?: boolean // 显示最小值标注
  type?: 'line' | 'bar'
}

export type HistogramColumns = Columns & HistogramBaseColumns

export type LineBarSeriesOption = LineSeriesOption | BarSeriesOption

export interface HistogramDataSource<T extends any> {
  columns: Array<HistogramColumns>
  rows: Array<T>
  xAxis: Array<string>
}

export declare const AXIS_TYPES: {
  readonly value: 1
  readonly category: 1
  readonly time: 1
  readonly log: 1
}
export type OptionAxisType = keyof typeof AXIS_TYPES

export interface HistogramSettings {
  title?: TitleOption | TitleOption[]
  xAxisType?: OptionAxisType,
  xVisible?: boolean
  // 区域图形显示
  area?: boolean,
  // 是否是平滑曲线
  smooth?: boolean
  tooltip?: TooltipOption | boolean

  yFormatter?: Tuple<string | ((val: any) => string), 2>
  yVisible?: boolean
  yAxisName?: Array<string>

  LegendVisible?: boolean
  barGap?: string
  stack?: boolean
  labelShow?: boolean

  waterfall?: boolean
  fallTotalName?: string
  fallLegendName?: string
  fallBarColor?: string
}

const histogramXAxis = <T extends any>(dataSource: HistogramDataSource<T>, settings: HistogramSettings) => {
  const {
    xAxisType = 'category',
    xVisible = true,
    waterfall = false } = settings
  const { xAxis = [] } = dataSource

  return {
    type: xAxisType,
    data: waterfall ? waterXAxis(dataSource.columns, settings) : xAxis,
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

  const yAxisDefault: YAXisOption = {
    type: 'value',
    axisTick: {
      show: false
    },
    show: yVisible
  }

  const yAxisResult: YAXisOption[] = []

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
  const { tooltip = true, waterfall = false } = settings
  let defaultTip = defaultTooltip()

  if (waterfall) {
    const waterFallTooltip: TooltipOption = {
      formatter: (params: any) => {
        if (Array.isArray(params) && params.length >= 2) {
          const target = params[1]

          return `${target.name}<br/>${target.marker || ''}${target.seriesName} : <b style="font-weight: bold;color:#000">${target.value}</b>`
        }

        return ''
      }
    }

    defaultTip = Object.assign({}, waterFallTooltip, defaultTip)
  }

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

  if (!Array.isArray(rows)) {
    console.warn('rows must be an array')
    return []
  }

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

  const series: LineBarSeriesOption[] = []

  for (let key in dataSourceMap) {
    const currentHistogramColumns = histogramColumns[key]

    const barSeries: BarSeriesOption = {
      barGap,
      // stack,
      ...stack ? { stack: 'stack'}: {},
      label: {
        show: labelShow,
        color: '#314659'
      }
    }

    const lineSeries: LineSeriesOption = {
      smooth,
      symbolSize: 10,
      ...area ? {
        areaStyle: {
          opacity: 0.2
        }
      } : {}
    }

    const type = currentHistogramColumns.type || 'line'

    const seriesItem: LineBarSeriesOption = Object.assign({}, {
      name: currentHistogramColumns.title + '',
      type: type,
      yAxisIndex: currentHistogramColumns.right ? 1 : 0,
      data: dataSourceMap[key],
      markPoint: {
        data: []
      },
    }, type === 'line' ? lineSeries : {}, type === 'bar' ? barSeries : {})

    // 最大标记
    if (currentHistogramColumns.markMax) {
      seriesItem.markPoint?.data?.push({ name: '最大值', type: 'max' })
    }
    // 最小标记
    if (currentHistogramColumns.markMin) {
      seriesItem.markPoint?.data?.push({ name: '最小值', type: 'min' })
    }

    series.push(seriesItem)
  }

  return series
}

const histogramLegend = <T>(dataSource: HistogramDataSource<T>, settings: HistogramSettings) => {
  const { LegendVisible = true } = settings

  return defaultLegend(LegendVisible)
}

const handleHistogram = <T = any>(
  dataSource: HistogramDataSource<T>,
  settings: HistogramSettings,
  ariaShow = false
) => {
  const histogramColumns = columnsToObject<HistogramColumns>(dataSource.columns)

  const xAxis = histogramXAxis<T>(dataSource, settings)
  const yAxis = histogramYAxis<T>(dataSource, settings)
  const series = settings.waterfall
    ? waterFallSeries<T>(dataSource, settings) :
    histogramSeries<T>(dataSource, settings, histogramColumns)
  const tooltip = histogramTooltip<T>(dataSource, settings) as TooltipOption
  const legend = histogramLegend<T>(dataSource, settings)
  const { title = {} } = settings

  const options: EChartsOption = {
    aria: {
      decal: {
        show: ariaShow
      }
    },
    title,
    legend,
    xAxis,
    yAxis,
    series,
    tooltip
  }

  return options as EChartsOption
}

export default handleHistogram
