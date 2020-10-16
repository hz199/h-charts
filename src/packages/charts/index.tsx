import { App, defineComponent } from 'vue'

const hChart = defineComponent({
  name: 'hChart',
  render() {
    return <div>chart111</div>
  },
})

hChart.install = (app: App) => {
  app.component(hChart.name, hChart)
}

export default hChart