
export const defaultLegend = (LegendVisible = true) => {
  const defaultLegend = {
    show: LegendVisible,
    icon: 'circle',
    textStyle: {
      fontSize: 12,
      color: '#c8c8c8'
    }
  }

  return defaultLegend
}

export const defaultTooltip = (trigger = 'axis') => {
  return {
    trigger,
    axisPointer: {
      label: {
        show: true,
        backgroundColor: '#fff',
        color: '#556677',
        borderColor: 'rgba(0,0,0,0)',
        shadowOffsetY: 0
      },
      lineStyle: {
        width: 1
      }
    },
    padding: [10, 10],
  }
}
