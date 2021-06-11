import { mount } from '@vue/test-utils'
import Home from '../../src/views/Home.vue'

describe('Home.vue', () => {
  it('renders header', () => {
    const wrapper = mount(Home)
    expect(wrapper.text()).toBe('This is the Home page')
  })
})
