import { BarSeriesOption } from 'echarts/types/dist/shared'
import { ObjectKey } from '@yyr1994/packages/utils/type'
import { HistogramColumns, HistogramDataSource, HistogramSettings } from './histogram'

export const waterFallSeries = <T>(
  dataSource: HistogramDataSource<T>,
  settings: HistogramSettings
) => {
  const { rows = [] } = dataSource
  const {
    labelShow = false,
    fallLegendName = '',
    fallBarColor = ''
  } = settings

  if (!Array.isArray(rows)) {
    console.warn('rows must be an array')
    return []
  }

  const waterRows: ObjectKey = rows[0] || {}

  const series: BarSeriesOption[] = []
  const seriesData: number[] = []
  let seriesDataTotal = 0
  const seriesDataAuxiliary: number[] = [0]
  for (let key in waterRows) {
    seriesData.push(waterRows[key])
    seriesDataTotal += waterRows[key]
  }

  let surplusNumber = seriesDataTotal
  seriesData.forEach(item => {
    surplusNumber = surplusNumber - item
    seriesDataAuxiliary.push(surplusNumber)
  })

  series[0] = {
    name: '',
    type: 'bar',
    stack: '总量',
    label: {
      show: false
    },
    itemStyle: {
      borderColor: 'rgba(0,0,0,0)',
      color: 'rgba(0,0,0,0)'
    },
    emphasis: {
      itemStyle: {
        barBorderColor: 'rgba(0,0,0,0)',
        color: 'rgba(0,0,0,0)'
      }
    },
    data: seriesDataAuxiliary
  }

  series[1] = {
    name: fallLegendName,
    type: 'bar',
    stack: '总量',
    label: {
      show: labelShow
    },
    itemStyle: {
      color: fallBarColor
    },
    backgroundStyle: {
      color: ''
    },
    data: [seriesDataTotal, ...seriesData]
  }

  return series
}

export const waterXAxis = <T>(columns: HistogramColumns[], settings: HistogramSettings) => {
  const {
    fallTotalName = '',
  } = settings

  const results: (string | number)[] = [ (fallTotalName || '总计') ]
  columns.forEach(item => {
    results.push(item.title)
  })

  return results
}