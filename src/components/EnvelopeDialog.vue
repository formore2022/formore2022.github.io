<template>
    <div ref="thisModalRef" class="envelope_dialog modal fade" id="envelopeDialogModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content border-0">
                <div class="modal-body">
                    <h4 class="text-start mb-3 px-4">HEADER</h4>
                    <div class="card-text text-start px-4">TEST</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Modal } from 'bootstrap';
import { adjustMultipleModalsLayer } from '@/common-functions.js';

// 定義參數
const thisModalRef = ref()

// 定義modal可被呼叫的方法，並Expose給父元素
let thisModal;
onMounted(() => { thisModal = new Modal(thisModalRef.value, {}) })
const toggleEnvelopeDialogModal = () => {
    thisModal.toggle();
    adjustMultipleModalsLayer();
}
defineExpose({ toggleEnvelopeDialogModal });
</script>

<style scoped lang="scss">
.modal-content {
    border-radius: 20px !important;
}
</style>