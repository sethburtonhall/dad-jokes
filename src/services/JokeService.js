import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://icanhazdadjoke.com/',
  headers: {
    'Accept': 'application/json'
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