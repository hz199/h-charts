import { ECharts } from 'echarts/lib/echarts'
import hChart from './index'
export interface ChartData {
  chartInstance: ECharts | null;
}

export type HChart = typeof hChart
