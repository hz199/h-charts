import { EChartOption } from 'echarts/lib/echarts'
import { Columns } from '../../utils/type'

export interface PieBaseColumns {

}

export type PieColumns = Columns & PieBaseColumns

export interface PieDataSource<T extends {}> {
  columns: Array<PieColumns>
  rows: T
}

export interface PieSettings {}

const handlePie = <T = any>(
  dataSource: PieDataSource<T>,
  settings: PieSettings,
) => {
  
  const options = {
    
  }

  return options as EChartOption
}

export default handlePie
