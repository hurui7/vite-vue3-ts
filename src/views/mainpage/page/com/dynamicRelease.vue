<template>
    <div class="dynamicRelease">
        <el-input
            v-model="textarea"
            :rows="3"
            type="textarea"
            placeholder="Please input"
            maxlength="300"
        />
        <div class="dyBtn">
             <el-button type="primary" @click="sendMessage">Primary</el-button>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const textarea = ref('')
 const sendMessage = ()=>{
     console.log(textarea.value)
 }
</script>
<style scoped lang="scss">
 @import "./index"
</style>
