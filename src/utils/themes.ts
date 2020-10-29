
const colorPalette = [
  '#2ec7c9', '#b6a2de', '#5ab1ef', '#ffb980', '#d87a80',
  '#8d98b3', '#e5cf0d', '#97b552', '#95706d', '#dc69aa',
  '#07a2a4', '#9a7fd1', '#588dd5', '#f5994e', '#c05050',
  '#59678c', '#c9ab00', '#7eb00a', '#6f5553', '#c14089'
]
const $defaultTheme = {
  "color": colorPalette,
  "title": {
    "textStyle": {
      "fontWeight": 'normal',
      "color": '#008acd'
    }
  },
  "visualMap": {
    "itemWidth": 15,
    "color": ['#5ab1ef', '#e0ffff']
  },
  "toolbox": {
    "iconStyle": {
      "normal": {
        "borderColor": colorPalette[0]
      }
    }
  },
  "tooltip": {
    "backgroundColor": 'rgba(50,50,50,0.5)',
    "axisPointer": {
      "type": 'line',
      "lineStyle": {
        color: '#008acd'
      },
      crossStyle: {
        color: '#008acd'
      },
      shadowStyle: {
        color: 'rgba(200,200,200,0.2)'
      }
    }
  },
  dataZoom: {
    dataBackgroundColor: '#efefff',
    fillerColor: 'rgba(182,162,222,0.2)',
    handleColor: '#008acd'
  },
  grid: {
    borderColor: '#eee'
  },
  categoryAxis: {
    axisLine: {
      lineStyle: {
        color: '#008acd'
      }
    },
    splitLine: {
      lineStyle: {
        color: ['#eee']
      }
    }
  },
  valueAxis: {
    axisLine: {
      lineStyle: {
        color: '#008acd'
      }
    },
    splitArea: {
      show: true,
      areaStyle: {
        color: ['rgba(250,250,250,0.1)', 'rgba(200,200,200,0.1)']
      }
    },
    splitLine: {
      lineStyle: {
        color: ['#eee']
      }
    }
  },
  timeline: {
    lineStyle: {
      color: '#008acd'
    },
    controlStyle: {
      normal: {
        color: '#008acd'
      },
      emphasis: {
        color: '#008acd'
      }
    },
    symbol: 'emptyCircle',
    symbolSize: 3
  },
  line: {
    smooth: true,
    symbol: 'emptyCircle',
    symbolSize: 3
  },
  candlestick: {
    itemStyle: {
      normal: {
        color: '#d87a80',
        color0: '#2ec7c9',
        lineStyle: {
          color: '#d87a80',
          color0: '#2ec7c9'
        }
      }
    }
  },
  scatter: {
    symbol: 'circle',
    symbolSize: 4
  },
  "map": {
    "label": {
      "normal": {
        "textStyle": {
          "color": '#d87a80'
        }
      }
    },
    "itemStyle": {
      "normal": {
        "borderColor": '#eee',
        "areaColor": '#ddd'
      },
      "emphasis": {
        "areaColor": '#fe994e'
      }
    }
  },
  "graph": {
    "color": colorPalette
  },
  "gauge": {
    "axisLine": {
      "lineStyle": {
        "color": [
          [0.2, '#2ec7c9'],
          [0.8, '#5ab1ef'],
          [1, '#d87a80']
        ],
        "width": 10
      }
    },
    "axisTick": {
      "splitNumber": 10,
      "length": 15,
      "lineStyle": {
        "color": 'auto'
      }
    },
    "splitLine": {
      "length": 22,
      "lineStyle": {
        "color": 'auto'
      }
    },
    "pointer": {
      "width": 5
    }
  }
}

const $redTheme = {
  "color": [
    "#ed80a7",
    "#ead4e0",
    "#a8b7de",
    "#f0eefb",
    "#f2d643",
    "#ebdba4"
  ],
  "backgroundColor": "#fff",
  "textStyle": {},
  "title": {
    "textStyle": {
      "color": "#c73a64"
    },
    "subtextStyle": {
      "color": "#d35c7c"
    }
  },
  "line": {
    "itemStyle": {
      "normal": {
        "borderWidth": "2"
      }
    },
    "lineStyle": {
      "normal": {
        "width": "2"
      }
    },
    "symbolSize": "6",
    "symbol": "emptyCircle",
    "smooth": true
  },
  "radar": {
    "itemStyle": {
      "normal": {
        "borderWidth": "2"
      }
    },
    "lineStyle": {
      "normal": {
        "width": "2"
      }
    },
    "symbolSize": "6",
    "symbol": "emptyCircle",
    "smooth": true
  },
  "bar": {
    "itemStyle": {
      "normal": {
        "barBorderWidth": "1",
        "barBorderColor": "#ccc"
      },
      "emphasis": {
        "barBorderWidth": "1",
        "barBorderColor": "#ccc"
      }
    }
  },
  "pie": {
    "itemStyle": {
      "normal": {
        "borderWidth": "1",
        "borderColor": "#ccc"
      },
      "emphasis": {
        "borderWidth": "1",
        "borderColor": "#ccc"
      }
    }
  },
  "scatter": {
    "itemStyle": {
      "normal": {
        "borderWidth": "1",
        "borderColor": "#ccc"
      },
      "emphasis": {
        "borderWidth": "1",
        "borderColor": "#ccc"
      }
    }
  },
  "boxplot": {
    "itemStyle": {
      "normal": {
        "borderWidth": "1",
        "borderColor": "#ccc"
      },
      "emphasis": {
        "borderWidth": "1",
        "borderColor": "#ccc"
      }
    }
  },
  "parallel": {
    "itemStyle": {
      "normal": {
        "borderWidth": "1",
        "borderColor": "#ccc"
      },
      "emphasis": {
        "borderWidth": "1",
        "borderColor": "#ccc"
      }
    }
  },
  "sankey": {
    "itemStyle": {
      "normal": {
        "borderWidth": "1",
        "borderColor": "#ccc"
      },
      "emphasis": {
        "borderWidth": "1",
        "borderColor": "#ccc"
      }
    }
  },
  "funnel": {
    "itemStyle": {
      "normal": {
        "borderWidth": "1",
        "borderColor": "#ccc"
      },
      "emphasis": {
        "borderWidth": "1",
        "borderColor": "#ccc"
      }
    }
  },
  "gauge": {
    "itemStyle": {
      "normal": {
        "borderWidth": "1",
        "borderColor": "#ccc"
      },
      "emphasis": {
        "borderWidth": "1",
        "borderColor": "#ccc"
      }
    }
  },
  "candlestick": {
    "itemStyle": {
      "normal": {
        "color": "#c73a64",
        "color0": "transparent",
        "borderColor": "#ed80a7",
        "borderColor0": "#58c470",
        "borderWidth": "2"
      }
    }
  },
  "graph": {
    "itemStyle": {
      "normal": {
        "borderWidth": "1",
        "borderColor": "#ccc"
      }
    },
    "lineStyle": {
      "normal": {
        "width": 1,
        "color": "#aaaaaa"
      }
    },
    "symbolSize": "6",
    "symbol": "emptyCircle",
    "smooth": true,
    "color": [
      "#ed80a7",
      "#ead4e0",
      "#a8b7de",
      "#f0eefb",
      "#f2d643",
      "#ebdba4"
    ],
    "label": {
      "normal": {
        "textStyle": {
          "color": "#ffffff"
        }
      }
    }
  },
  "map": {
    "itemStyle": {
      "normal": {
        "areaColor": "#f3f3f3",
        "borderColor": "#999999",
        "borderWidth": 0.5
      },
      "emphasis": {
        "areaColor": "#ffb248",
        "borderColor": "#eb8146",
        "borderWidth": 1
      }
    },
    "label": {
      "normal": {
        "textStyle": {
          "color": "#893448"
        }
      },
      "emphasis": {
        "textStyle": {
          "color": "#893448"
        }
      }
    }
  },
  "geo": {
    "itemStyle": {
      "normal": {
        "areaColor": "#f3f3f3",
        "borderColor": "#999999",
        "borderWidth": 0.5
      },
      "emphasis": {
        "areaColor": "#ffb248",
        "borderColor": "#eb8146",
        "borderWidth": 1
      }
    },
    "label": {
      "normal": {
        "textStyle": {
          "color": "#893448"
        }
      },
      "emphasis": {
        "textStyle": {
          "color": "#893448"
        }
      }
    }
  },
  "categoryAxis": {
    "axisLine": {
      "show": true,
      "lineStyle": {
        "color": "#aaaaaa"
      }
    },
    "axisTick": {
      "show": false,
      "lineStyle": {
        "color": "#333"
      }
    },
    "axisLabel": {
      "show": true,
      "textStyle": {
        "color": "#999999"
      }
    },
    "splitLine": {
      "show": true,
      "lineStyle": {
        "color": [
          "#e6e6e6"
        ]
      }
    },
    "splitArea": {
      "show": false,
      "areaStyle": {
        "color": [
          "rgba(250,250,250,0.05)",
          "rgba(200,200,200,0.02)"
        ]
      }
    }
  },
  "valueAxis": {
    "axisLine": {
      "show": true,
      "lineStyle": {
        "color": "#aaaaaa"
      }
    },
    "axisTick": {
      "show": false,
      "lineStyle": {
        "color": "#333"
      }
    },
    "axisLabel": {
      "show": true,
      "textStyle": {
        "color": "#999999"
      }
    },
    "splitLine": {
      "show": true,
      "lineStyle": {
        "color": [
          "#e6e6e6"
        ]
      }
    },
    "splitArea": {
      "show": false,
      "areaStyle": {
        "color": [
          "rgba(250,250,250,0.05)",
          "rgba(200,200,200,0.02)"
        ]
      }
    }
  },
  "logAxis": {
    "axisLine": {
      "show": true,
      "lineStyle": {
        "color": "#aaaaaa"
      }
    },
    "axisTick": {
      "show": false,
      "lineStyle": {
        "color": "#333"
      }
    },
    "axisLabel": {
      "show": true,
      "textStyle": {
        "color": "#999999"
      }
    },
    "splitLine": {
      "show": true,
      "lineStyle": {
        "color": [
          "#e6e6e6"
        ]
      }
    },
    "splitArea": {
      "show": false,
      "areaStyle": {
        "color": [
          "rgba(250,250,250,0.05)",
          "rgba(200,200,200,0.02)"
        ]
      }
    }
  },
  "timeAxis": {
    "axisLine": {
      "show": true,
      "lineStyle": {
        "color": "#aaaaaa"
      }
    },
    "axisTick": {
      "show": false,
      "lineStyle": {
        "color": "#333"
      }
    },
    "axisLabel": {
      "show": true,
      "textStyle": {
        "color": "#999999"
      }
    },
    "splitLine": {
      "show": true,
      "lineStyle": {
        "color": [
          "#e6e6e6"
        ]
      }
    },
    "splitArea": {
      "show": false,
      "areaStyle": {
        "color": [
          "rgba(250,250,250,0.05)",
          "rgba(200,200,200,0.02)"
        ]
      }
    }
  },
  "toolbox": {
    "iconStyle": {
      "normal": {
        "borderColor": "#999999"
      },
      "emphasis": {
        "borderColor": "#666666"
      }
    }
  },
  "legend": {
    "textStyle": {
      "color": "#999999"
    }
  },
  "tooltip": {
    "axisPointer": {
      "lineStyle": {
        "color": "#cccccc",
        "width": 1
      },
      "crossStyle": {
        "color": "#cccccc",
        "width": 1
      }
    }
  },
  "timeline": {
    "lineStyle": {
      "color": "#893448",
      "width": 1
    },
    "itemStyle": {
      "normal": {
        "color": "#c73a64",
        "borderWidth": 1
      },
      "emphasis": {
        "color": "#d35c7c"
      }
    },
    "controlStyle": {
      "normal": {
        "color": "#893448",
        "borderColor": "#893448",
        "borderWidth": 0.5
      },
      "emphasis": {
        "color": "#893448",
        "borderColor": "#893448",
        "borderWidth": 0.5
      }
    },
    "checkpointStyle": {
      "color": "#ed80a7",
      "borderColor": "rgba(255,178,72,0.41)"
    },
    "label": {
      "normal": {
        "textStyle": {
          "color": "#893448"
        }
      },
      "emphasis": {
        "textStyle": {
          "color": "#893448"
        }
      }
    }
  },
  "visualMap": {
    "color": [
      "#c73a64",
      "#d35c7c",
      "#ed80a7",
      "#ead4e0",
      "#a8b7de",
      "#d9d6e3"
    ]
  },
  "dataZoom": {
    "backgroundColor": "rgba(255,255,255,0)",
    "dataBackgroundColor": "rgba(255,178,72,0.5)",
    "fillerColor": "rgba(255,178,72,0.15)",
    "handleColor": "#ffb248",
    "handleSize": "100%",
    "textStyle": {
      "color": "#333333"
    }
  },
  "markPoint": {
    "label": {
      "normal": {
        "textStyle": {
          "color": "#ffffff"
        }
      },
      "emphasis": {
        "textStyle": {
          "color": "#ffffff"
        }
      }
    }
  }
}

export const defaultTheme = {
  name: 'defaultTheme',
  value: $defaultTheme
}

export const redTheme = {
  name: 'redTheme',
  value: $redTheme
}
