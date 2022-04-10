<template>
    <div ref="thisModalRef" class="modal fade" id="envelopeDialogModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content border-0">
                <div class="modal-body p-0 align-items-center justify-content-center text-center">
                    <img src="@/assets/envelope_deco.png" class="img-fluid deco-radius" />
                    <div class="py-4">
                        <div class="text-light-green pb-1">題目：_ _r _ _re</div>
                        <label id="input-area">
                            <input
                                class="form-control me-2 text-center"
                                type="search"
                                placeholder="請輸入空格中的4個文字"
                                v-model="envelopeAnswer"
                            />
                        </label>
                        <div class="py-4">
                            <button
                                id="confirm-btn"
                                class="btn bg-light-green text-white"
                                @click="confirm"
                            >確定</button>
                        </div>
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
const toggleAdminPostDialogModal = inject('toggleAdminPostDialogModal')
const setAdminPostKey = inject('setAdminPostKey')

// 定義參數
const thisModalRef = ref()
const envelopeAnswer = ref('')

// 確認鈕按下時
const confirm = () => {
    if (envelopeAnswer.value === 'FOMO') {
        envelopeAnswer.value = '';
        setAdminPostKey('missing');
        toggleEnvelopeDialogModal();
        toggleAdminPostDialogModal();
    }
}

// 定義modal可被呼叫的方法，並Expose給父元素
let thisModal;
onMounted(() => { thisModal = new Modal(thisModalRef.value, {}) })
const toggleEnvelopeDialogModal = () => {
    thisModal.toggle();
    adjustMultipleModalsLayer();
}
defineExpose({ toggleEnvelopeDialogModal })
</script>

<style scoped lang="scss">
.modal-content {
    font-size: 18px;
    background: #F4F0DA;
    border-radius: 20px !important;
}
.deco-radius {
    border-radius: 20px !important;
}

#input-area {
    position: relative;
    width: 55%;
    max-width: 350px;

    &::after {
        content: "";
        position: absolute;
        right: 15px;
        top: 0;
        bottom: 0;
        width: 16px;
        background: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 0C12.0333 0 9.13319 0.879735 6.66645 2.52796C4.19971 4.17618 2.27713 6.51886 1.14181 9.25975C0.00649921 12.0006 -0.290551 15.0166 0.288227 17.9263C0.867006 20.8361 2.29562 23.5088 4.3934 25.6066C6.49119 27.7044 9.16394 29.133 12.0736 29.7118C14.9834 30.2906 17.9994 29.9935 20.7403 28.8582C23.4811 27.7229 25.8238 25.8003 27.472 23.3335C29.1203 20.8668 30 17.9667 30 15C30 11.0217 28.4196 7.20644 25.6066 4.3934C22.7936 1.58035 18.9783 0 15 0ZM13.6875 6.28125C13.6875 5.93315 13.8258 5.59931 14.0719 5.35317C14.3181 5.10703 14.6519 4.96875 15 4.96875C15.3481 4.96875 15.6819 5.10703 15.9281 5.35317C16.1742 5.59931 16.3125 5.93315 16.3125 6.28125V17.5312C16.3125 17.8793 16.1742 18.2132 15.9281 18.4593C15.6819 18.7055 15.3481 18.8437 15 18.8437C14.6519 18.8437 14.3181 18.7055 14.0719 18.4593C13.8258 18.2132 13.6875 17.8793 13.6875 17.5312V6.28125ZM15 24.8437C14.6662 24.8437 14.34 24.7448 14.0625 24.5593C13.785 24.3739 13.5687 24.1104 13.441 23.802C13.3132 23.4937 13.2798 23.1544 13.3449 22.827C13.41 22.4997 13.5708 22.199 13.8068 21.963C14.0428 21.727 14.3434 21.5663 14.6708 21.5012C14.9981 21.4361 15.3374 21.4695 15.6458 21.5972C15.9541 21.7249 16.2177 21.9412 16.4031 22.2187C16.5885 22.4962 16.6875 22.8225 16.6875 23.1562C16.6875 23.6038 16.5097 24.033 16.1932 24.3495C15.8768 24.666 15.4476 24.8437 15 24.8437Z' fill='%23A4A2A2'/%3E%3C/svg%3E%0A") center / contain no-repeat;
    }

    input {
        font-size: 16px;
        height: 27px;
        padding: 10px 35px 10px 50px;
        border: none;
        border-radius: 37px;
        color: var(--gray-color) !important;

        &::placeholder {
            font-size: 16px;
            color: var(--gray-color) !important;
        }
    }
}

#confirm-btn {
    font-size: 18px;
    border-radius: 10px;
    padding: 2px 24px;
}
</style>