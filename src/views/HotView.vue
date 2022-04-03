<template>
    <div class="hot">
        <div
            v-masonry="'containerId'"
            transition-duration="0.1s"
            item-selector=".grid-item"
            percent-position="true"
            class="row row-cols-1 row-cols-md-2 row-cols-xxl-3 g-3 g-sm-5"
        >
            <div v-masonry-tile class="col grid-item" v-for="(post, index) in posts" :key="index">
                <PostCard :post="post"/>
            </div>
        </div>
    </div>
</template>

<script>
// 引入component "PostCard" 進行使用
import PostCard from '../components/PostCard.vue'

export default {
    components: {
        PostCard,
    }
};
</script>

<script setup>
import { inject } from 'vue';

// inject需要用的參數進行使用，需在parent或grand-parent進行provide
const posts = inject('hotPosts')
</script>
