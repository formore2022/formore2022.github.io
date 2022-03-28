<template>
    <div class="post_dialog modal fade" id="postDialogModal" tabindex="-1">
        <div class="modal-dialog modal-lg modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header border-0 d-block">
                    <div class="row align-items-center px-4">
                        <!-- Avatar欄 -->
                        <div class="col-auto">
                            <div class="avatar rounded-circle d-flex justify-content-center align-items-center">
                                {{ post?.user ? post.user[0] : '' }}
                            </div>
                        </div>
                        <!-- 系名．ID欄．日期欄 -->
                        <div class="col text-start">
                            <div>
                                <span class="me-2">{{ post?.department }}</span>
                                <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="3.13794" cy="3.5" r="3" fill="#303030"/>
                                </svg>
                                <span class="ms-2">@{{ post?.user }}</span>
                            </div>
                            <div>
                                {{ post?.date_ago ? dateAgoFilter(post.date_ago) : '' }}
                            </div>
                        </div>
                        <!-- 關閉鈕 -->
                        <div class="col-auto">
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
                    <h4 class="text-start mb-3 px-3">{{ post?.title }}</h4>
                    <div
                        class="card-text text-start px-3"
                        v-html="parseContent(post)"
                    ></div>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { inject } from "vue";
import { dateAgoFilter, parseContent } from '@/common-functions.js';

// inject需要用的參數進行使用，需在parent或grand-parent進行provide
const post = inject('currentPost')
</script>

<style scoped lang="scss">
.modal-content {
    border-radius: 20px;

    .avatar {
        width: 40px;
        height: 40px;
        color: #fff;
        background: var(--avatar-green-color);
    }

    h4 {
        font-size: 30px;
    }

    .card-text {
        color: var(--content-text-color);
        font-size: 18px;
    }
}
</style>