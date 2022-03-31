<template>
    <div class="login">
        <div class="container">
            <el-form
                ref="formRef"
                :model="dynamicValidateForm"
                label-width="120px"
                class="demo-dynamic"
            >
                <el-form-item
                    prop="username"
                    label="用户名"
                    :rules="[
                        {
                            required: true,
                            message: 'Please input username address',
                            trigger: 'blur',
                        },
                        {
                            type: 'string',
                            message: 'Please input correct username address',
                            trigger: ['blur', 'change'],
                        },
                        { min: 6, max: 10, message: 'Length should be 6 to 10', trigger: 'blur' },
                    ]"
                >
                    <el-input minlength='6' maxlength="10" v-model="dynamicValidateForm.username" />
                </el-form-item>
                <el-form-item
                    prop="password"
                    label="密码"
                    :rules="[
                        {
                            required: true,
                            message: 'Please input password',
                            trigger: 'blur',
                        },
                        {
                            type: 'string',
                            message: 'Please input correct password',
                            trigger: ['blur', 'change'],
                        },
                        { min: 6, max: 10, message: 'Length should be 6 to 10', trigger: 'blur' },
                    ]"
                >
                    <el-input minlength='6' maxlength="10" v-model="dynamicValidateForm.password" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm(formRef)">登录</el-button>
                    <el-button @click="reguser(true)">注册</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
    <reguserModal v-if="reguserModalBoolen" @reguser="reguser" :reguserModalBoolen="reguserModalBoolen"></reguserModal>
</template>
<script setup lang="ts">
import { reactive, ref, inject} from 'vue'
import {useRouter,useRoute} from 'vue-router'
import type { FormInstance } from 'element-plus'
import reguserModal from './reguserModal.vue'
import axios from 'axios';
import qs from 'qs'
// import http from '../../api/api'
const $api = inject<any>('$api')
// import { get } from '@vueuse/core';
const router = useRouter()
const formRef = ref<FormInstance>()
const dynamicValidateForm = reactive<{
    username: string,
    password: string
}>({
    username: '',
    password: ''
})
let go = ()=>{
    router.push({ path: 'mainPage' })
}
const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            console.log(
                $api.post('/api/login',{
                    username:dynamicValidateForm.username,
                    password:dynamicValidateForm.password,}
                )
                .then(function () {
                    go()
                })
                .catch(function (error) {
                    console.log(error);
                })
            )
        }
    })
}

let reguserModalBoolen = ref<boolean>(false)
let reguser = (x:boolean)=>{
    reguserModalBoolen.value = x
}
</script>
<style scoped lang="scss">
@import "./index";
</style>
