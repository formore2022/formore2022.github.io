<template>
    <div class="hot">
        <div class="row row-cols-1 row-cols-md-2 row-cols-xxl-3 g-5">
            <div class="col" v-for="(post, index) in posts" :key="index">
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
