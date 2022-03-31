<template>
    <div class="page">
        <dynamicRelease></dynamicRelease>
        <div class="dynamic" v-for="dynamic in dynamicArr">{{ dynamic }}</div>
    </div>
</template>
<script setup lang="ts">
import dynamicRelease from './com/dynamicRelease.vue'
import { reactive, ref, inject, onMounted } from 'vue'
// import http from '../../api/api'
//获取日常信息的接口
const $api = inject<any>('$api')
let dynamicArr = ref<any>([])
// const getMessage = async () => {
//     let data = await $api.get('/api/message/getMessage')
//     console.log(data)
//     return data
// }
// dynamicArr = getMessage()
// dynamicArr = [1,2]
onMounted(() => {
    $api.get('/api/message/getMessage').then((res: any) => {
        dynamicArr.value = res
        console.log(dynamicArr)
    })
})
</script>

<style lang="scss" scoped>
@import "./index";
</style>
