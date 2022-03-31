<template>
    <el-dialog v-model="reguserModalBoolen" title="注册账号">
        <template #footer>
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
                    <el-input minlength="6" maxlength="10" v-model="dynamicValidateForm.username" />
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
                    <el-input minlength="6" maxlength="10" v-model="dynamicValidateForm.password" />
                </el-form-item>
            </el-form>
            <span class="dialog-footer">
                <el-button @click="emit('reguser', false)">Cancel</el-button>
                <el-button type="primary" @click="submitForm(formRef)">Confirm</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script lang="ts" setup>
import { ref, defineEmits,reactive,inject } from 'vue'
import { ElMessageBox,ElMessage } from 'element-plus'
import type { FormInstance } from 'element-plus'
const $api = inject<any>('$api')
defineProps<{ reguserModalBoolen: boolean }>()
const formRef = ref<FormInstance>()
const dynamicValidateForm = reactive<{
    username: string,
    password: string
}>({
    username: '',
    password: ''
})
const dialogVisible = ref(true)
const emit = defineEmits(['reguser'])//取消窗口
const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            console.log(
                $api.post('/api/reguser',{
                    username:dynamicValidateForm.username,
                    password:dynamicValidateForm.password,}
                )
                .then(function () {
                    ElMessage({
                        type: 'success',
                        message: '注册成功',
                        showClose: true
                    });
                    emit('reguser', false)
                })
                .catch(function (error) {
                    console.log(error);
                })
            )
        }
    })
}
const handleClose = (done: () => void) => {
    ElMessageBox.confirm('Are you sure to close this dialog?')
        .then(() => {
            done()
        })
        .catch(() => {
            // catch error
        })
}
</script>
<style scoped>
.dialog-footer button:first-child {
    margin-right: 10px;
}
</style>