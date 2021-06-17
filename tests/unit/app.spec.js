import { shallowMount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import App from '../../src/App.vue'
import JokeService from '../../src/services/JokeService.js'

const API = 'https://icanhazdadjoke.com/'
const $t = () => { }
const searchTerm = "job"

const randomJoke = JokeService.getRandomJoke = jest.fn(() =>
  Promise.resolve({
    data: {
      id: 'trjG61Dlqzd',
      joke: "Why was Santa's little helper feeling depressed? Because he has low elf esteem.",
      status: '200',
    },
  })
)

const randomJokeOnSearch = JokeService.getJokesBySearch('job') = jest.fn(() => Promise.resolve({
  data {
    test
  }
})
)

describe('App.vue', () => {
  it('renders header and returns a random joke when created', async () => {
    const wrapper = shallowMount(App, {
      mocks: { $t }
    })
    expect(wrapper.text()).toContain('Dad Jokes!!')
    await flushPromises()
    expect(randomJoke).toHaveBeenCalledTimes(1)
  })

  it('fetches joke when random joke button is clicked', async () => {
    const wrapper = shallowMount(App)
    wrapper.find('button').trigger('click')
    await flushPromises()
    expect(wrapper.find('#joke').exists()).toBe(true)
    expect(randomJoke).toHaveBeenCalledTimes(2)
  })

  it('fetches joke on search query', async () => {

  })
})