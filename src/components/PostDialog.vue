<template>
    <div ref="thisModalRef" class="modal fade" id="postDialogModal" tabindex="-1">
        <div class="modal-dialog modal-lg">
            <div class="modal-content border-0">
                <div class="modal-header border-0 d-block">
                    <div class="row align-items-center px-4 mt-5">
                        <!-- Avatar欄 -->
                        <div class="col-auto">
                            <div class="avatar rounded-circle d-flex justify-content-center align-items-center">
                                {{ post?.user ? post.user[0] : '' }}
                            </div>
                        </div>
                        <!-- 系名．ID欄．日期欄 -->
                        <div class="col text-start">
                            <PostHeaderInfo :department="post?.department" :user="post?.user" :date_ago="post?.date_ago" />
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
                </div>
                <div class="modal-body">
                    <PostContent :title="post?.title" :content="post?.content" />
                </div>
                <div class="modal-footer d-block border-0 p-5 bg-light2">
                    <!-- 按鈕區 -->
                    <div class="row">
                        <div class="col text-start">
                            <div class="text-light-black">共{{ numberFilter(post?.comments) }}留言</div>
                        </div>
                        <div class="col">
                            <div class="row mx-auto justify-content-between gx-2 gx-lg-3">
                                <div class="col-auto d-flex justify-content-center align-items-center">
                                    <svg
                                        width="23"
                                        height="20"
                                        viewBox="0 0 26 23"
                                        :fill="user.logged_in && post?.liked ? 'red' : 'none'"
                                        @click="clickLike"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1.23437 8.50347C0.440508 4.789 1.56252 1.69007 6.15635 1.07453C10.7502 0.45899 12.6396 3.81588 12.5602 5.27514C12.5602 3.55057 15.8362 0.522666 19.5197 1.07453C24.1242 1.76436 24.6677 6.24825 23.6743 9.06064C22.6809 11.873 16.3795 17.9577 12.5602 21C8.78491 18.108 2.02824 12.2179 1.23437 8.50347Z"
                                            :stroke="user.logged_in && post?.liked ? 'red' : 'black'"
                                            stroke-width="2"
                                        />
                                    </svg>
                                    <span class="ps-2">{{ numberFilter(post?.likes) }}</span>
                                </div>
                                <div class="col-auto d-flex justify-content-center align-items-center">
                                    <svg
                                        width="21"
                                        height="20"
                                        viewBox="0 0 25 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M23.0184 22.5L17.9262 21.2373C6.72914 24.553 2.33132 18.2306 1.57907 14.7725C0.763854 11.025 1.57907 -0.558311 14.7725 1.8185C22.9571 3.29296 25.1594 12.161 22.1793 17.3876L23.0184 22.5Z"
                                            stroke="black"
                                            stroke-width="2"
                                        />
                                    </svg>
                                    <span class="ps-2">{{ numberFilter(post?.comments) }}則</span>
                                </div>
                                <div class="col-auto d-flex justify-content-center align-items-center">
                                    <svg
                                        width="21"
                                        height="20"
                                        viewBox="0 0 26 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M23.8235 1.71558H2.73828L11.2885 9.71128L13.6107 20.2845L23.8235 1.71558Z"
                                            stroke="black"
                                            stroke-width="2"
                                        />
                                        <path
                                            d="M23.8233 1.71558L11.5669 9.4742"
                                            stroke="black"
                                            stroke-width="2"
                                        />
                                    </svg>
                                    <span class="ps-2">{{ numberFilter(post?.shares) }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- 留言區 -->
                    <div v-for="(comment, index) in post?.comment_details" :key="index">
                        <PostComment :comment="comment" />
                    </div>
                    
                    <!-- 按鈕區 -->
                    <div class="row align-items-center mt-5">
                        <div class="col ps-0">
                            <input class="form-control" placeholder="留言..." />
                        </div>
                        <div class="col-auto pe-0">
                            <button
                                id="send-btn"
                                class="btn bg-light-green text-white"
                            >送出</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// 引入component進行使用
import PostHeaderInfo from './PostHeaderInfo.vue'
import PostContent from './PostContent.vue'
import PostComment from './PostComment.vue'

export default {
    components: {
        PostHeaderInfo,
        PostContent,
        PostComment,
    }
};
</script>

<script setup>
import { ref, inject, onMounted } from 'vue';
import { numberFilter, parseContent, adjustMultipleModalsLayer } from '@/common-functions.js';
import { Modal } from 'bootstrap';

// 讀入parent傳進來的參數
const props = defineProps(['post'])

// inject需要用的參數進行使用，需在parent或grand-parent進行provide
const user = inject('user')

// 定義參數
const thisModalRef = ref()

// 定義方法
const clickLike = () => {
    if (user.logged_in) {
        props.post.liked = !(props.post.liked || false);
        props.post.liked ? props.post.likes++ : props.post.likes--;
    }
}

// 定義modal可被呼叫的方法，並Expose給父元素
let thisModal;
onMounted(() => { thisModal = new Modal(thisModalRef.value, {}) })
const togglePostDialogModal = () => {
    thisModal.toggle();
    adjustMultipleModalsLayer();
}
defineExpose({ togglePostDialogModal })
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

    .btn-close-wrapper {
        margin-top: calc(-4rem - 9px);
        width: 90px;
        height: 115px;
        background: var(--light-green-color) !important;
        display: flex;
        flex-direction: column;
        justify-content: center;

        @media (max-width: 500px) {
            width: 40px;
            padding-left: 0;
            padding-right: 0;
        }

        .btn-close {
            color: #FFF !important;
            opacity: 1;
            background: transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23FFF'%3E%3Cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3E%3C/svg%3E") center/1em auto no-repeat;
            margin: 0 auto;
        }
    }

    input {
        font-size: 16px;
        padding: 10px 10px 10px 15px;
        border: none;
        border-radius: 10px;
        color: var(--dark-gray-color) !important;

        &::placeholder {
            font-size: 16px;
            color: var(--dark-gray-color) !important;
        }
    }
}

#send-btn {
    font-size: 17px;
    border-radius: 10px;
    padding: 8px 20px;
}
</style>