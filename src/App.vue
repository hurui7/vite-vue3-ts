<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
    <router-view></router-view>
</template>

<style lang="scss">
#app {
    height: 100%;
}

html {
    background-color: $bg-color;
}
body,html{
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
}
</style>
