<template>
    <div ref="thisModalRef" class="modal fade" id="adminEnvelopeDialogModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content border-0">
                <div class="modal-body p-0 align-items-center justify-content-center text-center">
                    <img src="@/assets/envelope_deco.png" class="img-fluid deco-radius" />
                    <div class="py-4">
                        <div class="text-light-green pb-1 my-3">收到來自管理員的一封信！</div>
                        <div class="py-4">
                            <button
                                id="open-btn"
                                class="btn bg-light-green text-white"
                                @click="open"
                            >開啟</button>
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
const dialogFunc = inject('dialogFunc')
const setAdminPostKey = inject('setAdminPostKey')

// 定義參數
const thisModalRef = ref()

// 確認鈕按下時
const open = () => {
    setAdminPostKey('ending');
    toggleAdminEnvelopeDialogModal();
    dialogFunc.toggleAdminPostDialogModal();
}

// 定義modal可被呼叫的方法，並Expose給父元素
let thisModal;
onMounted(() => { thisModal = new Modal(thisModalRef.value, {}) })
const toggleAdminEnvelopeDialogModal = () => {
    thisModal.toggle();
    adjustMultipleModalsLayer();
}
defineExpose({ toggleAdminEnvelopeDialogModal })
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

#open-btn {
    font-size: 18px;
    border-radius: 10px;
    padding: 2px 24px;
}
</style>