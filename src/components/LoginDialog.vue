<template>
    <div ref="thisModalRef" class="modal fade" id="loginModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content border-0">
                <div class="modal-header align-items-center border-0 mt-4 px-5">
                    <h4 class="col mb-0 text-light-green text-center">登入</h4>
                    <div class="col-auto btn-close-wrapper">
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                </div>
                <hr class="mt-4 mb-0" />
                <div class="modal-body p-0 align-items-center justify-content-center text-center">
                    <div class="px-3 px-md-5 mx-3 mx-md-5 pb-4">
                        <div id="error-msg" class="text-danger text-center my-2">
                            {{ errorMsg }}
                        </div>
                        <input
                            class="form-control"
                            placeholder="帳號"
                            v-model="account"
                        />
                        <div class="v-spacer"></div>
                        <input
                            class="form-control"
                            type="password"
                            placeholder="密碼"
                            v-model="password"
                        />
                        <div id="forget-password" class="text-light-green text-end my-2"><u>忘記密碼</u>？</div>
                        <button
                            id="login-btn"
                            class="btn bg-light-green text-white mt-4"
                            @click="login"
                        >登入</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, inject, onMounted } from 'vue';
import { Modal } from 'bootstrap';
import { adjustMultipleModalsLayer } from '@/common-functions.js';

// inject需要用的參數進行使用，需在parent或grand-parent進行provide
const user = inject('user')
const toggleLoginStatus = inject('toggleLoginStatus')

// 定義參數
const thisModalRef = ref()
const account = ref('')
const password = ref('')
const errorMsg = ref('')

// 確認鈕按下時
const login = () => {
    if (account.value.toLowerCase() === user.account.toLowerCase() 
        && password.value.toLowerCase() === user.password.toLowerCase()) {
        errorMsg.value = '';
        account.value = '';
        password.value = '';
        toggleLoginStatus();
        toggleLoginDialogModal();
    } else {
        errorMsg.value = '帳號或密碼錯誤，請重新填寫！';
    }
}

// 定義modal可被呼叫的方法，並Expose給父元素
let thisModal;
onMounted(() => { thisModal = new Modal(thisModalRef.value, {}) })
const toggleLoginDialogModal = () => {
    thisModal.toggle();
    adjustMultipleModalsLayer();
}
defineExpose({ toggleLoginDialogModal })
</script>

<style scoped lang="scss">
.modal-content {
    font-size: 18px;
    background: #DBE7E7;
    border-radius: 20px !important;

    .modal-header h4 {
        font-size: 28px;
        padding-left: 27px;
    }

    hr {
        border-top: 2px solid #FFF;
        background: none;
        border-bottom: 0;
        opacity: 1;
        margin-left: 3.5rem;
        margin-right: 3.5rem;
    }
}

input {
    font-size: 16px;
    padding: 10px 10px 10px 15px;
    border: none;
    border-radius: 10px;
    color: var(--dark-gray-color) !important;

    &::placeholder {
        font-size: 16px;
        color: var(--dark-gray-color) !important;
    }
}

#error-msg {
    font-size: 14px;
    height: 21px;
}

#forget-password {
    font-size: 14px;
}

.v-spacer {
    height: 35px;
}

#login-btn {
    font-size: 18px;
    border-radius: 10px;
    padding: 8px 35px;
}
</style>