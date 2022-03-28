<template>
    <ul id="home-nav" class="nav mt-2 mt-sm-5 mx-1 mx-sm-5 px-4">
        <li class="nav-item mx-3">
            <router-link :class="navLinkClass('new')" to="/new">最新</router-link>
        </li>
        <li class="nav-item mx-3">
            <router-link :class="navLinkClass('hot')" to="/hot">熱門</router-link>
        </li>
    </ul>
    <div class="mx-5 py-5">
        <router-view/>
    </div>
    <PostDialog />
</template>

<script>
// 引入component "PostDialog" 進行使用
import PostDialog from '../components/PostDialog.vue'

export default {
    components: {
        PostDialog,
    }
};
</script>

<script setup>
import { useRoute } from "vue-router";
import { ref, reactive, computed, provide } from 'vue';
import { getNavLinkClass } from '@/common-functions.js';

// 讀入posts.json
import postsJson from '@/assets/posts.json';

// 定義參數
const posts = reactive(postsJson)
const hotPosts = computed(() => [...posts].sort((a, b) => b.likes - a.likes))
const newPosts = computed(() => [...posts].sort((a, b) => a.date_ago - b.date_ago))
const currentPost = ref({})
const clickCurrentPost = (post) => {
    currentPost.value = post
}

// 處理Route Link的Active Class判別
const route = useRoute();
const currentMatchesNames = computed(() => route.matched.map((s) => s.name));
const navLinkClass = (name) => getNavLinkClass(currentMatchesNames, name);

// provide參數給child component使用（vue3才有，避免children太多需層層傳遞）
provide('hotPosts', hotPosts);
provide('newPosts', newPosts);
provide('currentPost', currentPost);
provide('clickCurrentPost', clickCurrentPost);
</script>

<style scoped lang="scss">
#home-nav {
    font-size: 22px;
    border-bottom: 1px solid var(--light-gray-color);

    a {
        text-decoration: none;
        color: var(--dark-black-color);

        &.router-link-exact-active {
            color: var(--main-grean-color);
            border-bottom: 3px solid var(--main-grean-color);
        }
    }
}
</style>