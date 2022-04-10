<template>
    <div>
        <div
            v-masonry="'containerId'"
            transition-duration="0.1s"
            item-selector=".grid-item"
            percent-position="true"
            class="row row-cols-1 row-cols-md-2 row-cols-xxl-3 g-3 g-sm-5"
        >
            <div v-masonry-tile class="col grid-item" v-for="(post, index) in posts" :key="index">
                <PostCard v-if="!post?.empty_post" :post="post" :type="'post'" />
                <EmptyCard v-else />
            </div>
        </div>
    </div>
</template>

<script>
// 引入component進行使用
import PostCard from '@/components/PostCard.vue'
import EmptyCard from '@/components/EmptyCard.vue'

export default {
    components: {
        PostCard,
        EmptyCard,
    }
};
</script>

<script setup>
import { computed, inject, reactive, watch } from 'vue';

// inject需要用的參數進行使用，需在parent或grand-parent進行provide
const hotPosts = inject('hotPosts')
const user = inject('user')
const reDrawPosts = inject('reDrawPosts')

// 若是登入狀態、多插一個空post DIV
const posts = computed(() => {
    if (user?.logged_in) {
        return [reactive({ empty_post: true })].concat(...hotPosts.value)
    } else {
        return [...hotPosts.value]
    }
})

// 監聽變數變化
watch(posts, (nV, oV) => reDrawPosts(), { immediate: true })
</script>
