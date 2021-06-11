<template>
  <div class="container flex justify-end mx-auto">
    <div id="nav" class="flex p-6 space-x-6">
      <router-link :to="{name: 'Home'}">Home</router-link>
      <router-link :to="{name: 'About'}">About</router-link>
    </div>
  </div>
  <div class="container mx-auto">
    <router-view />
  </div>
</template>

<script setup>
// import HelloWorld from './components/HelloWorld.vue'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>
