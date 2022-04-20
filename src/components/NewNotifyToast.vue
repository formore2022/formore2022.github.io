<template>
    <div ref="thisToastRef" class="toast fade" id="newNotifyToast" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-body">你有新訊息！</div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Toast } from 'bootstrap';

// 定義參數
const thisToastRef = ref()
const show = ref(false)

// 定義modal可被呼叫的方法，並Expose給父元素
let thisToast;
onMounted(() => { thisToast = new Toast(thisToastRef.value, { delay: 2000 }) })
const showNewNotifyToast = () => {
    thisToast.show();
}
defineExpose({ showNewNotifyToast })
</script>

<style scoped lang="scss">
#newNotifyToast {
    position: fixed;
    top: 100px;
    right: 50px;
    width: auto;
    padding: 10px 30px;
    border: none;
    border-radius: 15px;
    background-color: #61b09f5A;

    .toast-body {
        color: var(--dark-green-color);
    }
}
</style>