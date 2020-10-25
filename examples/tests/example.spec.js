import { mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

test('displays message', async () => {
  const wrapper = await mount(HelloWorld)
  expect(wrapper.find('p').text()).toBe(
    'For a guide and recipes on how to configure / customize this project, check out the vue-cli documentation.'
  )
})
