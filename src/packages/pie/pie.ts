import { EChartOption, EChartTitleOption } from 'echarts/lib/echarts'
import { Columns, ObjectKey } from '../../utils/type'
import { isBoolean, isObject } from '../../utils/utils'
import { defaultLegend, defaultTooltip } from '../../utils/defaultChartConfig'

export interface PieBaseColumns {

}

export type PieColumns = Columns & PieBaseColumns

export interface PieDataSource<T extends ObjectKey> {
  columns: Array<PieColumns>
  rows: T
}

export interface PieSettings {
  title?: EChartTitleOption
  tooltip?: EChartOption.Tooltip | boolean
  legend?: EChartOption.Legend | boolean

  eRadius?: string
  wRadius?: string
  xOffset?: string
  yOffset?: string
  toolTipName?: string
  hasBorder?: boolean
  labelFontSize?: number
}

const pieTooltip = <T>(dataSource: PieDataSource<T>, settings: PieSettings) => {
  const { tooltip = true } = settings
  let defaultTip = defaultTooltip('item')

  return isBoolean(tooltip) ? (
    tooltip ? defaultTip : {}
  ) : tooltip
}

const pieLegend = <T extends ObjectKey>(dataSource: PieDataSource<T>, settings: PieSettings) => {
  const { legend = true } = settings

  return isBoolean(legend) ? defaultLegend() : legend
}

const pieSeries = <T extends ObjectKey>(dataSource: PieDataSource<T>, settings: PieSettings) => {
  const { rows, columns } = dataSource
  const {
    eRadius = '60%',
    wRadius = '0%',
    xOffset = '50%',
    yOffset = '50%',
    toolTipName = '',
    hasBorder = true,
    labelFontSize
  } = settings

  if (!isObject(rows)) {
    console.warn('rows must be a object')
    return
  }

  const seriesData: Array<{
    value: number
    name: string}> =[]

  columns.forEach(item => {
    seriesData.push({
      value: rows[item.key],
      name: item.title + ''
    })
  })

  const series: EChartOption.Series[] = [
    {
      name: toolTipName,
      type: 'pie', // [eRadius, wRadius]
      radius: wRadius === '0%' ? eRadius: [eRadius, wRadius],
      center: [xOffset, yOffset],
      data: seriesData.sort(function (a, b) {
        return a.value - b.value;
      }),
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      },
      label: {
        show: true,
        position: wRadius === '0%' ? 'outside' : 'center',
        fontSize: labelFontSize
      },
      itemStyle: hasBorder ? {
        borderRadius: 6,
        borderColor: '#f0f0f0',
        borderWidth: 2
      } : {},
      roseType: 'radius',
      animationType: 'scale',
      animationEasing: 'elasticOut',
      animationDelay: function () {
        return Math.random() * 300;
      }
    }
  ]

  return series
}

const handlePie = <T = {}>(
  dataSource: PieDataSource<T>,
  settings: PieSettings,
) => {
  const tooltip = pieTooltip<T>(dataSource, settings)
  const legend = pieLegend<T>(dataSource, settings)
  const series = pieSeries<T>(dataSource, settings)
  const { title = {} } = settings

  const options = {
    title,
    tooltip,
    legend,
    series
  };

  return options as EChartOption
}

export default handlePie
