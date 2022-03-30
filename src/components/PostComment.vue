<template>
    <div>
        <hr class="opacity-75 my-3" />
        <div class="row align-items-center">
            <!-- Avatar欄 -->
            <div class="col-auto">
                <div :class="`avatar rounded-circle d-flex justify-content-center align-items-center ${bgGreen}`">
                    <img v-if="comment.is_formore" src="@/assets/formore_avatar.png" class="img-fluid" />
                    <span v-else>{{ comment.user ? comment.user[0] : '' }}</span>
                </div>
            </div>
            <!-- 系名．ID欄．日期欄 -->
            <div class="col-auto px-0 text-start info-area">
                <div class="info-text text-truncate">
                    @{{ comment.user }}
                </div>
                <div class="info-text">
                    {{ comment.date_ago ? dayAgoFilter(comment.date_ago) : '' }}
                </div>
            </div>
            <!-- 留言區 -->
            <div 
                class="col ps-0 text-start" 
                v-html="parseContent(comment)"
            ></div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';
import { numberFilter, dayAgoFilter, parseContent } from '@/common-functions.js';

// 讀入parent傳進來的參數
const props = defineProps(['comment'])
const bgGreen = computed(() => {
    return `bg-${props['comment'].is_formore ? 'light': 'dark'}-green`
})
</script>

<style scoped lang="scss">
.avatar {
    width: 50px;
    height: 50px;
    color: #fff;
    font-size: 22px;
}

.info-area {
    width: 130px;

    .info-text {
        color: #000;
    }
}
</style>