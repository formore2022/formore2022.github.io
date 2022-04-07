<template>
    <ul id="home-nav" class="nav mt-2 mt-sm-5 mx-1 mx-sm-5 px-4">
        <li v-for="subRoute in subRoutes" :key="subRoute.name" class="nav-item mx-3">
            <router-link :class="navLinkClass(subRoute.name)" :to="subRoute.path">{{ subRoute.text }}</router-link>
        </li>
    </ul>
    <div class="mx-1 mx-sm-5 py-3 py-sm-5">
        <router-view/>
    </div>
    <PostDialog ref="postDialogRef" :post="currentPost" />
    <EnvelopeDialog ref="envelopeDialogRef" />
    <AdminPostDialog ref="adminPostDialogRef" :admin-post-key="adminPostKey" />
</template>

<script>
// 引入component "PostDialog" 進行使用
import PostDialog from '../components/PostDialog.vue';
import EnvelopeDialog from '../components/EnvelopeDialog.vue';
import AdminPostDialog from '../components/AdminPostDialog.vue';

export default {
    components: {
        PostDialog,
        EnvelopeDialog,
        AdminPostDialog,
    }
};
</script>

<script setup>
import { useRoute } from "vue-router";
import { ref, reactive, computed, provide } from 'vue';
import { getNavLinkClass } from '@/common-functions.js';

// 讀入posts.json及admin_post.json
import postsJson from '@/assets/posts.json';
import adminPostsJson from '@/assets/admin_posts.json';

// -------------------- 定義參數 [BEGIN] --------------------
// Router Map
const subRoutes = ref([
    {
        name: 'new',
        path: '/new',
        text: '最新',
    },
    {
        name: 'hot',
        path: '/hot',
        text: '熱門',
    },
])

// Dialog Ref
const postDialogRef = ref()
const envelopeDialogRef = ref()
const adminPostDialogRef = ref()

// Post
const posts = reactive(postsJson)
const hotPosts = computed(() => [...posts].sort((a, b) => b.likes - a.likes))
const currentPost = ref({})                                // 目前點選的文章object reference
const setCurrentPost = (post) => currentPost.value = post  // setter
const adminPosts = reactive(adminPostsJson)                // 管理員文章objects
const adminPostKey = ref()                                 // 管理員文章key
const setAdminPostKey = (key) => adminPostKey.value = key  // setter

// -------------------- 定義參數 [ END ] --------------------

// 處理Route Link的Active Class判別
const route = useRoute();
const currentMatchesNames = computed(() => route.matched.map((s) => s.name))
const navLinkClass = (name) => getNavLinkClass(currentMatchesNames, name)

// provide參數給child component使用（vue3才有，避免children太多需層層傳遞）
provide('hotPosts', posts)
provide('setCurrentPost', setCurrentPost)
provide('adminPosts', adminPosts)
provide('setAdminPostKey', setAdminPostKey)
provide('togglePostDialogModal', ()=> postDialogRef.value.togglePostDialogModal())
provide('toggleEnvelopeDialogModal', ()=> envelopeDialogRef.value.toggleEnvelopeDialogModal())
provide('toggleAdminPostDialogModal', ()=> adminPostDialogRef.value.toggleAdminPostDialogModal())
</script>

<style scoped lang="scss">
#home-nav {
    font-size: 22px;
    border-bottom: 1px solid var(--light-gray-color);

    a {
        text-decoration: none;
        color: var(--dark-black-color);

        &.router-link-exact-active {
            color: var(--light-green-color);
            border-bottom: 4px solid var(--light-green-color);
        }
    }
}
</style>