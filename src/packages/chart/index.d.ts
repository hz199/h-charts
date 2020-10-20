import { ECharts } from 'echarts/lib/echarts'

export interface ChartData {
  chartInstance: ECharts | null;
  el: HTMLDivElement | null
}