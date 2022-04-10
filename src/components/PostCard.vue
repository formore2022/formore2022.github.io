<template>
    <div class="card">
        <!-- MODAL點擊觸發區 -->
        <div
            class="cursor-pointer"
            @click="clickPost"
        >
            <!-- HEADER區 -->
            <div class="card-header border-0 bg-transparent px-2 pt-3 pb-2">
                <div class="row flex-nowrap align-items-center px-4">
                    <!-- Avatar欄 -->
                    <div class="col-auto">
                        <div class="avatar rounded-circle d-flex justify-content-center align-items-center">
                            {{ post.user[0] }}
                        </div>
                    </div>
                    <!-- 系名．ID欄 -->
                    <div class="col text-start">
                        <span>{{ post.department }}</span>
                        <svg class="mx-2" width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="3.13794" cy="3.5" r="3" fill="#303030"/>
                        </svg>
                        <span>@{{ post.user }}</span>
                    </div>
                    <!-- 垂直分隔欄 -->
                    <div class="col-auto d-flex" style="height: 40px">
                        <div class="vr"></div>
                    </div>
                    <!-- 日期欄 -->
                    <div class="col-auto">{{ dateAgoFilter(post.date_ago) }}</div>
                </div>
                <hr class="mb-0 opacity-75" />
            </div>
            
            <!-- BODY區 -->
            <div class="card-body">
                <h4 class="text-start mb-3 px-3">{{ post.title }}</h4>
                <div
                    class="card-text text-start px-3 "
                    v-html="parsePreviewContent(post.content)"
                ></div>
            </div>
            
            <!-- 圖片預覽區 -->
            <div v-show="coverimg" class="ratio ratio-16x9">
                <img :src="coverimg" class="img-fluid object-fit-cover"/>
            </div>
        </div>
        
        <!-- FOOTER區 -->
        <div class="card-footer border-0 bg-transparent px-2 py-3">
            <!-- 若有封面圖片，不顯示footer的hr -->
            <hr v-show="!coverimg" class="opacity-75" />
            <!-- 按鈕區 -->
            <div class="row mx-auto justify-content-center gx-2 gx-lg-4">
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
                    <span class="ps-2">{{ numberFilter(post.likes) }}</span>
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
                    <span class="ps-2">{{ numberFilter(post.comments) }}則</span>
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
                    <span class="ps-2">{{ numberFilter(post.shares) }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, inject } from 'vue';
import { numberFilter, dateAgoFilter, getFirstImageUrl, parsePreviewContent } from '@/common-functions.js';

// 讀入parent傳進來的參數
const props = defineProps(['post', 'type'])

// inject需要用的參數進行使用，需在parent或grand-parent進行provide
const user = inject('user')
const setCurrentPost = inject('setCurrentPost')
const togglePostDialogModal = inject('togglePostDialogModal')
const toggleDraftDialogModal = inject('toggleDraftDialogModal')

// 定義參數
const coverimg = computed(() => getFirstImageUrl(props.post?.content))

// 定義方法
const clickPost = () => {
    setCurrentPost(props.post);
    if (props.type==='post') togglePostDialogModal();
    else toggleDraftDialogModal();
}
const clickLike = () => {
    if (user.logged_in) {
        props.post.liked = !(props.post.liked || false);
        props.post.liked ? props.post.likes++ : props.post.likes--;
    }
}
</script>

<style scoped lang="scss">
.card {
    border-radius: 20px;

    .avatar {
        width: 40px;
        height: 40px;
        color: #fff;
        background: var(--dark-green-color);
    }

    .vr {
        background-color: var(--light-gray-color);
        opacity: 1;
    }

    hr {
        border-top: 1px solid var(--light-gray-color);
        opacity: 1;
    }

    h4 {
        font-size: 22px;
    }

    .card-text {
        color: var(--dark-gray-color);
        font-size: 14px;
    }

    .card-footer {
        font-size: 14px;
    }
}
</style>