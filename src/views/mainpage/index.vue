<template>
    <div class="mainPage">
        <div class="imgHead">
            <img src="../../assets/head.jpg" alt="">
        </div>
        <div class="wordHead">
            <el-link @click="go('/mainPage/page')">
                首页
                <!-- <router-link to="/">首页</router-link> -->
            </el-link>
            <el-link @click="go('/mainPage/article')">文章</el-link>
        </div>
    </div>
    <div class="mainPageContainer">
        <router-view></router-view>
    </div>
</template>
<script setup lang="ts">
import {useRouter,useRoute} from 'vue-router'
const router = useRouter()
let go = (str:string)=>{
    router.push({ path: str })
}

</script>
<style scoped lang="scss">
 @import "./index"
</style>
