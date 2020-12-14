import { EChartOption, EChartTitleOption } from 'echarts/lib/echarts'
import { Columns, ObjectKey } from '../../utils/type'
import { isBoolean } from '../../utils/utils'
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
}

const pieTooltip = <T>(dataSource: PieDataSource<T>, settings: PieSettings) => {
  const { tooltip = true } = settings
  let defaultTip = defaultTooltip('item')

  return isBoolean(tooltip) ? (
    tooltip ? defaultTip : {}
  ) : tooltip
}

const pieLegend = <T>(dataSource: PieDataSource<T>, settings: PieSettings) => {
  const { legend = true } = settings

  return isBoolean(legend) ? defaultLegend() : legend
}

const handlePie = <T = {}>(
  dataSource: PieDataSource<T>,
  settings: PieSettings,
) => {
  const tooltip = pieTooltip<T>(dataSource, settings)
  const legend = pieLegend<T>(dataSource, settings)
  // console.log(dataSource, settings)
  const { title = {} } = settings

  const options = {
    title,
    tooltip,
    legend,
    series: [
      {
        name: '',
        type: 'pie',
        radius: '60%',
        center: ['25%', '50%'],
        data: [
          { value: 1048, name: '搜索引擎' },
          { value: 735, name: '直接访问' },
          { value: 580, name: '邮件营销' },
          { value: 484, name: '联盟广告' },
          { value: 300, name: '视频广告' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      },
      {
        name: '',
        type: 'pie',
        radius: '60%',
        center: ['75%', '50%'],
        data: [
          { value: 1048, name: '搜索引擎1' },
          { value: 735, name: '直接访问1' },
          { value: 580, name: '邮件营销1' },
          { value: 484, name: '联盟广告1' },
          { value: 300, name: '视频广告1' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  return options as EChartOption
}

export default handlePie
