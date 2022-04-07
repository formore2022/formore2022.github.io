<template>
    <div ref="thisModalRef" class="admin_post_dialog modal fade" id="adminPostDialogModal" tabindex="-1">
        <div class="modal-dialog modal-lg">
            <div class="modal-content border-0">
                <div class="modal-header border-0 d-block position-relative">
                    <div class="row align-items-center px-4 mt-5">
                        <!-- Avatar欄 -->
                        <div class="col-auto">
                            <div class="avatar rounded-circle d-flex justify-content-center align-items-center">
                                <img src="@/assets/formore_avatar.png" class="img-fluid" />
                            </div>
                        </div>
                        <!-- 系名．ID欄．日期欄 -->
                        <div class="col text-start">
                            <div class="d-flex align-items-center">
                                <span class="info-text me-2">管理員</span>
                                <svg width="10" height="10" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="3.13794" cy="3.5" r="3" fill="#C4C4C4"/>
                                </svg>
                                <span class="info-text ms-2">@Formore_2021</span>
                            </div>
                            <div class="info-text">
                                {{ post?.date_ago ? dateAgoFilter(post.date_ago) : '' }}
                            </div>
                        </div>
                        <!-- 關閉鈕 -->
                        <div class="col-auto btn-close-wrapper">
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                    </div>
                    <svg id="admin-logo" width="200" height="226" viewBox="0 0 266 300" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <rect width="266" height="300" fill="url(#pattern0)"/>
                        <defs>
                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlink:href="#image0_382_582" transform="translate(-0.0639098) scale(0.000275347)"/>
                            </pattern>
                            <image id="image0_382_582" width="4096" height="4096" xlink:href="@/assets/formore_bg_transparent.png"/>
                        </defs>
                    </svg>
                </div>
                <div class="modal-body">
                    <div
                        class="card-text text-start px-4 pb-4"
                        v-html="parseContent(post)"
                    ></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// 引入component "PostComment" 進行使用
import PostComment from './PostComment.vue'

export default {
    components: {
        PostComment,
    }
};
</script>

<script setup>
import { ref, computed, inject, onMounted } from 'vue';
import { numberFilter, dateAgoFilter, parseContent, adjustMultipleModalsLayer } from '@/common-functions.js';
import { Modal } from 'bootstrap';

// inject需要用的參數進行使用，需在parent或grand-parent進行provide
const adminPosts = inject('adminPosts')

// 讀入parent傳進來的參數
const props = defineProps(['adminPostKey'])

// 定義參數
const thisModalRef = ref()
const post = computed(() => adminPosts[props['adminPostKey']])

// 定義modal可被呼叫的方法，並Expose給父元素
let thisModal;
onMounted(() => { thisModal = new Modal(thisModalRef.value, {}) })
const toggleAdminPostDialogModal = () => {
    thisModal.toggle();
    adjustMultipleModalsLayer();
}
defineExpose({ toggleAdminPostDialogModal })
</script>

<style scoped lang="scss">
.modal-content {
    border-radius: 20px !important;

    .modal-footer {
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }

    .avatar {
        width: 60px;
        height: 60px;
        color: #fff;
        background: var(--light-green-color) !important;
        font-size: 18px;
    }

    h4 {
        font-size: 30px;
    }

    .info-text {
        color: #000;
        font-size: 18px;
    }

    .btn-close-wrapper {
        margin-top: calc(-4rem - 9px);
        width: 90px;
        height: 115px;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: end;
        padding-right: 0;
        z-index: 999;

        .btn-close {
            color: var(--dark-gray-color) !important;
            opacity: 1;
            background: transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%237A7A7A'%3E%3Cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3E%3C/svg%3E") center/1em auto no-repeat;
            margin-top: 1rem;
        }
    }

    .card-text {
        color: var(--dark-gray-color);
        font-size: 18px;
        line-height: 40px;
    }
}

#admin-logo {
    position: absolute;
    top: 0;
    right: 30px;
}
</style>