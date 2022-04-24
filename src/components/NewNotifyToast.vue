<template>
    <div v-if="user.logged_in && user.notifications?.main" id="newNotifyToast">
        <div class="toast-body">你有新訊息！</div>
    </div>
</template>

<script setup>
import { inject } from 'vue';

// inject需要用的參數進行使用，需在parent或grand-parent進行provide
const user = inject('user')
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
    transition: all 0.5s;

    @media (max-width: 768px) {
        top: 100px;
        right: 30px;
    }

    .toast-body {
        color: var(--dark-green-color);
    }
}
</style>