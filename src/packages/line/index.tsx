import { App, defineComponent } from 'vue'

const hLine = defineComponent({
  name: 'hLine',
  render() {
    return <div>chart</div>
  },
})

hLine.install = (app: App) => {
  app.component(hLine.name, hLine)
}

export default hLine