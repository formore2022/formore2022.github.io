<template>
    <h4 v-if="title" class="text-start mb-3 px-4">{{ title }}</h4>
    <div
        :class="`card-text text-start px-4 pb-4 text-${title ? 'light' : 'dark'}-black`"
        v-html="parseContent(content)"
    ></div>
</template>

<script setup>
import { parseContent } from '@/common-functions.js';
// 讀入parent傳進來的參數
const props = defineProps(['title', 'content'])
</script>

<style scoped lang="scss">
h4 {
    font-size: 30px;
}

.card-text {
    font-size: 18px;
    line-height: 40px;
}
</style>