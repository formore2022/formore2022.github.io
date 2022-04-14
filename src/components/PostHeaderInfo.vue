<template>
    <div class="d-flex flex-wrap align-items-center">
        <span class="info-text">{{ department ?? '' }}</span>
        <svg class="mx-2" width="10" height="10" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="3.13794" cy="3.5" r="3" fill="#C4C4C4"/>
        </svg>
        <span class="info-text">@{{ user ?? '' }}</span>
    </div>
    <div class="info-text">
        {{ date_ago!=null ? dateAgoFilter(date_ago) : '' }}
    </div>
</template>

<script setup>
import { dateAgoFilter } from '@/common-functions.js';
// 讀入parent傳進來的參數
const props = defineProps(['department', 'user', 'date_ago'])
</script>

<style scoped lang="scss">
.info-text {
    color: #000;
    font-size: 18px;
}
</style>