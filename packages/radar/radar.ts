// import { EChartOption, EChartTitleOption } from 'echarts/lib/echarts'
import { EChartsOption, LegendComponentOption, TitleOption, TooltipOption } from 'echarts/types/dist/shared'
import { Columns, ObjectKey } from '../../utils/type'
import { isBoolean } from '../../utils/utils'
import { defaultLegend, defaultTooltip } from '../../utils/defaultChartConfig'

export interface radarBaseColumns {

}

export type RadarColumns = Columns & radarBaseColumns

export interface RadarDataSource<T extends any> {
  columns: Array<RadarColumns>
  rows: T
}

export interface radarSettings {
  title?: TitleOption
  tooltip?: TooltipOption | boolean
  legend?: LegendComponentOption | boolean
}

const radarTooltip = <T>(dataSource: RadarDataSource<T>, settings: radarSettings) => {
  const { tooltip = true } = settings
  let defaultTip = defaultTooltip('item')

  return isBoolean(tooltip) ? (
    tooltip ? defaultTip : {}
  ) : tooltip
}

const radarLegend = <T extends ObjectKey>(dataSource: RadarDataSource<T>, settings: radarSettings) => {
  const { legend = true } = settings

  return isBoolean(legend) ? defaultLegend() : legend
}

const radarSeries = <T extends ObjectKey>(dataSource: RadarDataSource<T>, settings: radarSettings) => {
}

const handleRadar = <T = {}>(
  dataSource: RadarDataSource<T>,
  settings: radarSettings,
) => {
  // const tooltip = radarTooltip<T>(dataSource, settings)
  // const legend = radarLegend<T>(dataSource, settings)
  // const series = radarSeries<T>(dataSource, settings)
  // const { title = {} } = settings

  const options: EChartsOption = {
    title: {
      text: '基础雷达图'
    },
    tooltip: {},
    legend: {
      // data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
    },
    // radar: {
    //   radius: '60%',
    //   shape: 'circle',
    //   name: {
    //     textStyle: {

    //       borderRadius: 3,
    //       padding: [3, 5]
    //     }
    //   },
    //   splitArea: {
    //     show: false
    //   },
    //   indicator: [
    //     { name: '销售（sales）' },
    //     { name: '管理（Administration）' },
    //     { name: '信息技术（Information Techology）' },
    //     { name: '客服（Customer Support）' },
    //     { name: '研发（Development）' },
    //     { name: '市场（Marketing）' }
    //   ]
    // },
    series: [{
      name: '预算 vs 开销（Budget vs spending）',
      type: 'radar',
      symbolSize: 5,
      lineStyle: {
        width: 2
      },
      // areaStyle: {normal: {}},
      data: [
        {
          value: [4300, 10000, 28000, 35000, 50000, 19000],
          name: '预算分配（Allocated Budget）'
        },
        {
          value: [5000, 14000, 28000, 31000, 42000, 21000],
          name: '实际开销（Actual Spending）'
        },
        {
          value: [2000, 1400, 2800, 3100, 4200, 2100],
          name: '实际开销（Actual Spending）22'
        }
      ]
    }]
  }

  return options
}

export default handleRadar
