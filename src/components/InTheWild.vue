<script>

export default {
  name: 'InTheWild',
  data() {
    return {
      isFirePit: false
    }
  },
  methods: {
    toggleFirePit() {
      this.isFirePit = !this.isFirePit
    }
  }
}
</script>

<template>
  <!-- In the Wild -->
  <div class="px-6 py-12 bg-gray-900 lg:p-24 dark:bg-gray-200">
    <div class="flex items-center justify-between w-full">
      <h1 class="text-white dark:text-gray-900 header">Dad Jokes in the Wild (West)! 🤠</h1>
      <span class="text-white cursor-pointer" @click="toggleFirePit">Warm up with a <span class="text-3xl">🔥</span></span>
      <div v-if="isFirePit" class="fixed top-0 bottom-0 left-0 right-0 z-10 w-full h-full bg-gray-900 bg-opacity-75 cursor-pointer overlay" @click="toggleFirePit">
        <div class="absolute transform -translate-x-1/2 -translate-y-1/2 select-none fire-gif test top-1/2 left-1/2">
          <img src="../assets/fire.gif" alt="FirePit Gif">
          <p class="mt-2 text-xl text-center text-white">I slept like a log last night and woke up in the firepit.</p>
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-between space-y-4 md:space-y-0 md:space-x-4 md:flex-row image">
      <div class="md:w-1/3">
        <img src="../assets/farside1.jpg" alt="Far Side Image">
        <p class="text-white dark:text-gray-900">credit:
          <a href="https://www.thefarside.com/" target="_blank" rel="noopener">
            The Far Side
          </a>
        </p>
      </div>

      <div class="md:w-1/3">
        <img src="../assets/han-leno.jpg" alt="Indian Hills Community Sign">
      </div>

      <img src="../assets/west.jpg" alt="Far Side Image" class="md:w-1/3">
    </div>
  </div>

  <!-- Hall of Shame -->
  <div class="px-6 py-12 bg-blue-500 lg:p-24">
    <h1 class="header">Dad Jokes Hall of Shame! 🙄</h1>
    <div class="flex flex-col justify-between space-y-4 md:flex-row md:space-y-0 md:space-x-4 image-alt">
      <div class="md:w-1/3">
        <img src="../assets/joke1.jpg" alt="Far Side Image">
      </div>
      <div class="md:w-1/3">
        <img src="../assets/joke2.jpg" alt="Far Side Image">
      </div>
      <div class="md:w-1/3">
        <img src="../assets/joke3.jpg" alt="Far Side Image">
      </div>
    </div>
    <p class="text-white">credit: <a href="https://www.amazon.com/Dad-Jokes-Shame-Gifts-Worst/dp/1681887606/ref=sr_1_1?dchild=1&keywords=dad+jokes+hall+of+shame&qid=1614209765&sr=8-1" target="_blank" rel="noopener" class="text-gray-900">Dad Jokes: Hall of Shame</a></p>
  </div>
</template>

<style scoped>
  .header {
  @apply mb-4 text-3xl md:text-4xl font-display
  }
  .image img {
    @apply border-4 dark:border-gray-900 border-white
  }

  .image-alt img {
    @apply border-4 dark:border-gray-900 border-white
  }
</style>