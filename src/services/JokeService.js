import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://dad-jokes.p.rapidapi.com',
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
    'x-rapidapi-host': import.meta.env.VITE_RAPID_API_HOST,
    "useQueryString": true,
  },
})

export default {
  getRandomJoke() {
   return apiClient.get('/random/joke')
  },
  getJokeByType(type) {
   return apiClient.get('/joke/type/' + type)
  },
  getJokesBySearch(query) {
   return apiClient.get('/joke/search/?term=' + query)
  }
}