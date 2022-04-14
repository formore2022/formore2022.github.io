<template>
    <div>
        <hr class="opacity-75 my-3" />
        <div
            class="cursor-pointer"
            @click="commentOnClick"
        >
            <div class="row flex-wrap flex-sm-nowrap align-items-center">
                <!-- Avatar欄 -->
                <div class="col-auto">
                    <div :class="`avatar rounded-circle d-flex justify-content-center align-items-center ${bgGreen}`">
                        <img v-if="comment?.is_formore" src="@/assets/formore_avatar.png" class="img-fluid rounded-circle" />
                        <span v-else>{{ comment?.user ? comment.user[0] : '' }}</span>
                    </div>
                </div>
                <!-- 系名．ID欄．日期欄 -->
                <div class="col col-sm-auto px-0 text-start info-area">
                    <div class="info-text text-truncate">
                        @{{ comment?.user }}
                    </div>
                    <div class="info-text">
                        {{ comment?.date_ago!=null ? dateAgoFilter(comment.date_ago) : '' }}
                    </div>
                </div>
                <!-- 留言區 -->
                <div 
                    class="col-12 col-sm ps-3 ps-sm-0 mt-2 mt-sm-0 text-break text-start" 
                    v-html="parseContent(comment?.content)"
                ></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, inject } from 'vue';
import { dateAgoFilter, parseContent } from '@/common-functions.js';

// 讀入parent傳進來的參數
const props = defineProps(['comment'])

// inject需要用的參數進行使用，需在parent或grand-parent進行provide
const dialogFunc = inject('dialogFunc')

// 定義參數
const bgGreen = computed(() => {
    return `bg-${props['comment'].is_formore ? 'light': 'dark'}-green`
})

// 按下comment時
const commentOnClick = () => {
    if (props.comment?.is_formore)
        dialogFunc.toggleMissingEnvelopeDialogModal();
}
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

    @media (max-width: 480px) {
        width: 100%;
    }

    .info-text {
        color: #000;
    }
}
</style>