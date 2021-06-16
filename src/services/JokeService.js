import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://icanhazdadjoke.com/',
  headers: {
    'Accept': 'application/json',
    'User-Agent': 'Dad Jokes - https://github.com/sethburtonhall/dad-jokes - https://sethhallcreative.com/'
  },
})

export default {
  getRandomJoke() {
     return apiClient.get('/')
  },
  getJokesBySearch(query) {
   return apiClient.get('/search?term=' + query)
  }
}