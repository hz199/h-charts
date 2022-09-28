// import { EChartOption, EChartTitleOption } from 'echarts/lib/echarts'
import { EChartsOption, LegendComponentOption, PieSeriesOption, TitleOption, TooltipOption } from 'echarts/types/dist/shared'
import { Columns, ObjectKey } from '@yyr1994/h-charts/packages/utils/type'
import { isBoolean, isObject } from '@yyr1994/h-charts/packages/utils/utils'
import { defaultLegend, defaultTooltip } from '@yyr1994/h-charts/packages/utils/defaultChartConfig'

export interface PieBaseColumns {

}

export type PieColumns = Columns & PieBaseColumns

export interface PieDataSource<T extends any> {
  columns: Array<PieColumns>
  rows: T
}

export interface PieSettings {
  title?: TitleOption
  tooltip?: TooltipOption | boolean
  legend?: LegendComponentOption | boolean

  eRadius?: string // 外半径
  wRadius?: string // 内半径
  xOffset?: string
  yOffset?: string
  seriesName?: string
  hasBorder?: boolean
  borderRadius?: number
  labelFontSize?: number
  labelShow?: boolean

  roseType?: 'radius' | 'area'
}

const pieTooltip = <T>(dataSource: PieDataSource<T>, settings: PieSettings) => {
  const { tooltip = true } = settings
  let defaultTip = defaultTooltip('item')

  return isBoolean(tooltip) ? (
    tooltip ? defaultTip : {}
  ) : tooltip
}

const pieLegend = <T extends any>(dataSource: PieDataSource<T>, settings: PieSettings) => {
  const { legend = true } = settings

  return isBoolean(legend) ? defaultLegend() : legend
}

const pieSeries = <T extends any>(dataSource: PieDataSource<T>, settings: PieSettings) => {
  const { rows, columns } = dataSource
  const {
    eRadius = '60%',
    wRadius = '0%',
    xOffset = '50%',
    yOffset = '50%',
    seriesName = '',
    hasBorder = true,
    borderRadius = 6,
    labelFontSize,
    roseType = undefined,
    labelShow = true
  } = settings

  if (!isObject(rows)) {
    console.warn('rows must be a object')
    return
  }

  const seriesData: Array<{
    value: number
    name: string}> =[]

  columns.forEach(item => {
    const rowsData = rows as ObjectKey

    seriesData.push({
      value: rowsData[item.key],
      name: item.title + ''
    })
  })

  const series: PieSeriesOption[] = [
    {
      name: seriesName,
      type: 'pie',
      radius: [wRadius, eRadius],
      center: [xOffset, yOffset],
      data: seriesData.sort(function (a, b) {
        return a.value - b.value;
      }),
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        },
        label: {
          show: true,
          fontWeight: 'bold'
        }
      },
      label: {
        position: 'outside',
        fontSize: labelFontSize,
        show: labelShow,
        distanceToLabelLine: 5,
        formatter: '{b}：{d}%',
      },
      itemStyle: hasBorder ? {
        borderRadius: borderRadius,
        borderColor: '#f0f0f0',
        borderWidth: 2
      } : {},
      roseType,
      animationType: 'scale',
      animationEasing: 'elasticOut',
      animationDelay: function () {
        return Math.random() * 120;
      }
    }
  ]

  return series
}

const handlePie = <T extends any>(
  dataSource: PieDataSource<T>,
  settings: PieSettings,
  ariaShow?: boolean
) => {
  const tooltip = pieTooltip<T>(dataSource, settings) as TooltipOption
  const legend = pieLegend<T>(dataSource, settings) as LegendComponentOption
  const series = pieSeries<T>(dataSource, settings)
  const { title = {} } = settings

  const options: EChartsOption = {
    aria: {
      decal: {
        show: ariaShow
      }
    },
    title,
    tooltip,
    legend,
    series
  }

  return options
}

export default handlePie
