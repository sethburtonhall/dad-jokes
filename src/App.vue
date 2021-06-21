<script>
import JokeService from './services/JokeService.js'
import MarqueeText from './components/MarqueeText.vue'
import InTheWild from './components/InTheWild.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {MarqueeText, InTheWild, Footer},
  data() {
    return {
      isDarkMode: false,
      isMarquee: false,
      heading: 'More Dad Jokes!!',
      subHeading: 'In celebration of all the hard joking dads out there. Happy Father\'s Day!! 🎉',
      searchTerm: '',
      searching: false,
      joke: {
        id: 'trjG61Dlqzd',
        joke: "What's the best thing about elevator jokes? They work on so many levels.",
        status: '200',
      },
    }
  },
  created() {
    this.searchTerm = ''
    JokeService.getRandomJoke()
    .then(response => {
      this.joke = response.data
    })
    .catch(error => {
      alert(error.message)
    })
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode
    },
    toggleMarquee() {
      this.isMarquee = !this.isMarquee
    },
    getJoke() {
      this.searchTerm = ''
      JokeService.getRandomJoke()
      .then(response => {
        this.joke = response.data
      })
      .catch(error => {
        alert(error)
      })
    },
    searchJokes() {
      JokeService.getJokesBySearch(this.searchTerm.toLowerCase())
      .then(response => {
        if (!response.data.results.length) {
          this.joke = undefined
          this.searching = false
        } else {
          this.joke = response.data.results[Math.floor(Math.random() * response.data.results.length)];
          this.searching = false
        }
      })
      .catch(error => {
        alert(error)
      })
    }
  },
  watch: {
    searchTerm() {
      this.searching = true
    }
  }
}
</script>

<template>
<div :class="{dark: isDarkMode}" class="bg-gray-900">
  <!-- Marquee -->
  <div class="relative z-10 w-full">
    <!-- Scrolling Text-->
    <div v-if="isMarquee" class="fixed flex items-center w-full overflow-hidden text-white bg-gray-900 marquee md:block bg-gradient-to-r from-purple-600 via-pink-600 to-gray-900 flex-nowrap whitespace-nowrap">
        <div :class="{pause: !isMarquee}" class="flex items-center marquee-inner">
          <MarqueeText />
          <MarqueeText />
          <MarqueeText />
          <MarqueeText />
        </div>
    </div>

    <!-- Toggle Marquee -->
    <div class="fixed left-0 w-auto py-2 text-left cursor-pointer select-none" @click="toggleMarquee">
      <span v-if="isMarquee" class="h-full p-1 pl-2 text-4xl pr-28 bg-gradient-to-r from-purple-600 via-purple-600">
        <span class="absolute">🤣</span>
        <span class="absolute inline-block toggle-marquee">🙄</span>
      </span>

      <span v-if="!isMarquee" class="h-full p-1 pl-2 pr-24 text-4xl ">
        <span class="absolute">🤪</span>
        <span class="absolute inline-block toggle-marquee flip">🤪</span>
      </span>
    </div>

    <!-- Toggle Dark Mode -->
    <div class="fixed right-0 w-auto py-2 text-right cursor-pointer select-none" @click="toggleDarkMode">
      <span v-if="isDarkMode && isMarquee" class="p-1 pl-24 pr-3 text-4xl bg-gradient-to-l from-gray-900 via-gray-900">🌝</span>
      <span v-if="isDarkMode && !isMarquee" class="p-1 pl-24 pr-3 text-4xl">🌝</span>
      <span v-if="!isDarkMode && isMarquee" class="p-1 pl-24 pr-3 text-4xl bg-gradient-to-l from-gray-900 via-gray-900">🌚</span>
      <span v-if="!isDarkMode && !isMarquee" class="p-1 pl-24 pr-2 text-4xl ">🌚</span>
    </div>
  </div>

  <!-- Main Content -->
  <div class="bg-gray-200 dark:bg-gray-900">
    <div :class="{'pt-28': isMarquee}" class="flex flex-col px-6 pt-16 lg:px-24">
      <div class="flex flex-col items-center">
        <!-- Heading -->
        <h1 class="text-5xl text-center text-transparent font-display md:text-7xl lg:text-9xl bg-clip-text bg-gradient-to-t from-pink-500 to-purple-600">
          {{heading}}
        </h1>

        <!-- SubHeading -->
        <h3 class="mb-4 text-lg text-center text-gray-900 lg:mb-8 lg:text-2xl dark:text-white">
          {{subHeading}}
        </h3>

        <!-- Nav -->
        <div id="nav" class="flex flex-col items-center justify-center w-full p-6 space-y-6 md:space-y-0 md:space-x-6 md:flex-row">
          <!-- Search -->
          <div class="flex items-center w-full bg-white rounded-md shadow-xl md:w-1/2">
            <input class="w-full px-6 py-4 leading-tight text-gray-900 rounded-full focus:outline-none" id="search" type="text" placeholder="Search Jokes" v-model="searchTerm" />
              <button v-if="searchTerm" id="search-joke" class="flex items-center justify-center w-12 h-12 p-2 text-2xl" @click="searchJokes">
                🔍
              </button>
          </div>

          <div class="text-gray-900 dark:text-white">or</div>

          <!-- Random Joke -->
          <button ref="random-joke-button" class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" @click="getJoke">
            Get Random Joke
          </button>
        </div>

      </div>

      <!-- Joke -->
      <div class="p-8 mt-4 mb-10 bg-gray-900 rounded-md lg:mt-10 lg:mb-16 dark:bg-gray-200 lg:p-12">
        <div v-if="!joke && !searching && searchTerm" class="flex justify-center text-xl text-white dark:text-gray-900 lg:text-3xl">Sorry, there are no <span class="px-2 underline">{{searchTerm}}</span> jokes and that is no joke. Please try your search again.</div>
        <div v-if="!joke && searching && !searchTerm" class="flex justify-center text-xl text-white dark:text-gray-900 lg:text-3xl">Please enter a search term.</div>
        <div v-if="!joke && searching && searchTerm" class="flex justify-center text-xl text-white dark:text-gray-900 lg:text-3xl">Please enter a search term.</div>
        <div v-if="joke">
          <div id="joke" class="flex flex-col items-center text-xl text-center text-gray-200 dark:text-gray-900 lg:text-3xl">
            <h2>{{joke.joke}}</h2>
          </div>
        </div>
      </div>

    </div>

    <InTheWild />
    <Footer />
  </div>
</div>
</template>