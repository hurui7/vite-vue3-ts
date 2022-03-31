<script setup lang="ts">
import { ref } from 'vue'
import {useRouter,useRoute} from 'vue-router'
defineProps<{ msg: string }>()
const router = useRouter()
const count = ref(0)
const go = ()=>{
    router.push({
        name:'mainPage'
    })
}
</script>

<template>
    <h1>{{ msg }}</h1>
    <div class="par">
        阿斯顿发生
        <div class="son">
            dsgds
        </div>
    </div>
    <el-button class="sdfasdf" @click="go">Default</el-button>
</template>

<style scoped lang="scss">
 @import "./index"
</style>
