import { Columns, ObjectKey } from '../../utils/type'
import { EChartOption } from 'echarts/lib/echarts'
import { columnsToObject, isBoolean } from '../../utils'

export interface LineDataSource<T extends {}> {
  columns: Array<Columns>
  rows: Array<T>
  xAxis: Array<string>
}

export interface LineSettings {
  xAxisType?: EChartOption.BasicComponents.CartesianAxis.Type

  area?: boolean,
  tooltip?: EChartOption.Tooltip | boolean

  yAxisType?: EChartOption.BasicComponents.CartesianAxis.Type
}

const getLineXAxis = <T>(dataSource: LineDataSource<T>, settings: LineSettings) => {
  const { xAxisType } = settings
  const { xAxis } = dataSource

  return {
    type: xAxisType,
    data: xAxis
  }
}

const getLineYAxis = <T>(dataSource: LineDataSource<T>, settings: LineSettings) => {
  const { yAxisType } = settings

  return {
    type: yAxisType,
  }
}

const getLineTooltip = <T>(dataSource: LineDataSource<T>, settings: LineSettings) => {
  const { tooltip = true } = settings
  const defaultTooltip = {
    trigger: 'axis',
    show: true,
    axisPointer: {
      type: 'line'
    }
  }

  return isBoolean(tooltip) ? (
    tooltip ? defaultTooltip : {}
  ) : tooltip
}

const getLineSeries = <T>(dataSource: LineDataSource<T>, settings: LineSettings) => {
  // const { yAxisType } = settings
  const { rows, columns } = dataSource
  const { area } = settings
  const dataSourceMap: ObjectKey = {}

  const lineColumns = columnsToObject(columns)

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
    series.push({
      name: lineColumns[key] + '',
      type: 'line',
      smooth: true,
      symbol: 'circle',
      symbolSize: 10,
      data: dataSourceMap[key],
      ...area ? {
        areaStyle: {
          opacity: 0.1
        }
      } : {}
    })
  }

  return series
}

const lineHandle = <T = any>(dataSource: LineDataSource<T>, settings: LineSettings) => {
  const xAxis = getLineXAxis<T>(dataSource, settings)
  const yAxis = getLineYAxis<T>(dataSource, settings)
  const series = getLineSeries<T>(dataSource, settings)
  const tooltip = getLineTooltip<T>(dataSource, settings)

  const options = {
    legend: {
      show: true,
      icon: 'circle',
      textStyle: {
        fontSize: 12,
        color: '#c8c8c8'
      },
    },
    xAxis,
    yAxis,
    series,
    tooltip
  }

  return options as EChartOption
}

export default lineHandle
