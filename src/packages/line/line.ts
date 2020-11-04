import { ObjectKey } from '../../utils/type'
import { EChartOption } from 'echarts/lib/echarts'

export interface Columns {
  title: string | number
  key: string | number
}

export interface LineDataSource<T = any> {
  columns: Array<Columns>
  rows: Array<T>
}

export interface LineSettings {
  xAxisType?: EChartOption.BasicComponents.CartesianAxis.Type
  yAxisType?: EChartOption.BasicComponents.CartesianAxis.Type
}

const getLineXAxis = (dataSource: LineDataSource, settings: LineSettings) => {
  const { xAxisType } = settings
  const { columns } = dataSource

  return {
    type: xAxisType,
    data: columns.map(item => item.title)
  }
}

const getLineYAxis = (dataSource: LineDataSource, settings: LineSettings) => {
  const { yAxisType } = settings

  return {
    type: yAxisType,
  }
}

const getLineSeries = (dataSource: LineDataSource, settings: LineSettings) => {
  // const { yAxisType } = settings
  const { rows, columns } = dataSource
  const dataSourceMap: ObjectKey = {}
  const keys = columns.forEach(item => {
    dataSourceMap[item.key] = {}
  })

  return rows.map(item => {
    return {
      data: [],
      type: 'line'
    }
  })
}

const lineHandle = (dataSource: LineDataSource, settings: LineSettings) => {
  const xAxis = getLineXAxis(dataSource, settings)
  const yAxis = getLineYAxis(dataSource, settings)
  const series = getLineSeries(dataSource, settings)

  const options = {
    legend: {},
    xAxis,
    yAxis,
    series,
    tooltip: {}
  }

  return options
}

export default lineHandle
