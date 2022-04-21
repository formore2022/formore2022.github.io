<template>
    <ul id="for-post-nav" class="nav mt-2 mt-sm-5 mx-1 mx-sm-5 px-4">
        <li v-for="subRoute in subRoutes" :key="subRoute.name" class="nav-item mx-3">
            <router-link :class="navLinkClass(subRoute.name)" :to="subRoute.path">{{ subRoute.text }}</router-link>
        </li>
    </ul>
    <div class="mx-1 mx-sm-5 py-3 py-sm-5">
        <div>
            <div
                v-masonry="'containerId'"
                transition-duration="0.1s"
                item-selector=".grid-item"
                percent-position="true"
                class="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 g-3 g-sm-5"
            >
                <div v-masonry-tile class="col grid-item" v-for="(post, index) in posts" :key="index">
                    <PostCard :post="post" :type="'post'" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// 引入component進行使用
import PostCard from '@/components/PostCard.vue'

export default {
    components: {
        PostCard,
    }
};
</script>

<script setup>
import { useRoute } from "vue-router";
import { ref, inject, computed, watch } from 'vue';
import { getNavLinkClass } from '@/common-functions.js';

// inject需要用的參數進行使用，需在parent或grand-parent進行provide
const posts = inject('for02Posts')
const reDrawPosts = inject('reDrawPosts')

// Router Map
const subRoutes = ref([
    {
        name: 'for02',
        path: '/for02',
        text: 'For 靠背',
    },
])

// 處理Route Link的Active Class判別
const route = useRoute();
const currentMatchesNames = computed(() => route.matched.map((s) => s.name))
const navLinkClass = (name) => getNavLinkClass(currentMatchesNames, name)

// 監聽變數變化
watch(posts, (nV, oV) => reDrawPosts(), { immediate: true })
</script>

<style scoped lang="scss">
#for-post-nav {
    font-size: 22px;
    border-bottom: 1px solid var(--light-gray-color);

    a {
        text-decoration: none;
        color: var(--dark-black-color);

        &.active {
            color: var(--light-green-color);
            border-bottom: 4px solid var(--light-green-color);
        }
    }
}
</style>