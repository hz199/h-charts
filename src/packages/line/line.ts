import { Columns, ObjectKey, Tuple } from '../../utils/type'
import { EChartOption } from 'echarts/lib/echarts'
import { columnsToObject, isBoolean } from '../../utils'

export type YAxisType = 'KMB' | 'normal' | 'percent'

export interface LineCustomsColumns {
  right?: boolean // line
}

export type LineColumns = Columns & LineCustomsColumns

export interface LineDataSource<T extends {}> {
  columns: Array<LineColumns>
  rows: Array<T>
  xAxis: Array<string>
}

export interface LineSettings {
  xAxisType?: EChartOption.BasicComponents.CartesianAxis.Type
  // 区域图形显示
  area?: boolean,
  // 是否是平滑曲线
  smooth?: boolean
  tooltip?: EChartOption.Tooltip | boolean

  yFormatter?: Tuple<string | ((val: any) => string), 2>
  yVisible?: boolean
  yAxisName?: Array<string>
}

const getLineXAxis = <T>(dataSource: LineDataSource<T>, settings: LineSettings) => {
  const { xAxisType } = settings
  const { xAxis } = dataSource

  return {
    type: xAxisType,
    data: xAxis
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
  const defaultTooltip = {
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
  }

  return isBoolean(tooltip) ? (
    tooltip ? defaultTooltip : {}
  ) : tooltip
}

const getLineSeries = <T>(
  dataSource: LineDataSource<T>,
  settings: LineSettings,
  lineColumns: ObjectKey<LineColumns>) => {
  // const { yAxisType } = settings
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
    series.push({
      name: lineColumns[key].title + '',
      type: 'line',
      smooth,
      symbol: 'circle',
      symbolSize: 10,
      yAxisIndex: lineColumns[key].right ? 1 : 0,
      data: dataSourceMap[key],
      markPoint: {
        data: [
          {
            name: '最大值',
            type: 'max'
          },
          {
            name: '55',
            type: 'min'
          }
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

const lineHandle = <T = any>(dataSource: LineDataSource<T>, settings: LineSettings) => {
  const lineColumns = columnsToObject<LineColumns>(dataSource.columns)

  const xAxis = getLineXAxis<T>(dataSource, settings)
  const yAxis = getLineYAxis<T>(dataSource, settings)
  const series = getLineSeries<T>(dataSource, settings, lineColumns)
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
