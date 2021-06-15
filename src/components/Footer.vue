<script>
export default {
  name: 'Footer'
}
</script>

<template>
  <div class="flex flex-col items-center w-full p-12 space-y-2 text-gray-900 lg:justify-between lg:space-y-0 lg:flex-row dark:text-white dark:bg-gray-900 ">
    <div class="flex flex-col space-y-2 text-center lg:items-start">
      <div>
        Made with 💖 by <a href="https://twitter.com/sethburtonhall/status/1403176619972386816" target="_blank">Seth Hall</a> as a part of <a href="https://virtualcoffee.io" target="_blank" class="text-pink-500">VirtualCoffee's</a> <a href="https://virtualcoffee.io/monthlychallenges/june-2021/" target="_blank">Monthly Challenge</a>
      </div>
      <div>Built with the
        <a href="https://dadjokes.io/" target="_blank">Dad Jokes API</a>
      </div>
    </div>

    <div class="flex items-center justify-center space-x-2 lg:justify-start lg:items-start">
      <a href="https://twitter.com/search?q=%23buildinginpublic&src=typeahead_click" target="_blank">
        <pre class="inline">#buildinginpublic</pre>
      </a>
      <a href="https://www.instagram.com/explore/tags/dadjokes/" target="_blank">
        <pre class="inline">#dadjokes</pre>
      </a>
    </div>
  </div>
</template>