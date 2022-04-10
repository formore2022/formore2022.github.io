<template>
    <ul id="my-draft-nav" class="nav mt-2 mt-sm-5 mx-1 mx-sm-5 px-4">
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
                class="row row-cols-1 row-cols-md-2 row-cols-xxl-3 g-3 g-sm-5"
            >
                <div v-masonry-tile class="col grid-item" v-for="(post, index) in posts" :key="index">
                    <PostCard v-if="!post?.empty_post" :post="post" :type="'draft'" />
                    <EmptyCard v-else />
                </div>
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
import { useRoute } from "vue-router";
import { ref, reactive, inject, computed, watch, onMounted } from 'vue';
import { getNavLinkClass } from '@/common-functions.js';

// inject需要用的參數進行使用，需在parent或grand-parent進行provide
const myDrafts = inject('myDrafts')
const user = inject('user')
const reDrawPosts = inject('reDrawPosts')

// 若是登入狀態、多插一個空post DIV
const posts = computed(() => {
    if (user?.logged_in) {
        return [reactive({ empty_post: true })].concat(...myDrafts.value)
    } else {
        return [...myDrafts.value]
    }
})

// Router Map
const subRoutes = ref([
    {
        name: 'myDraft',
        path: '/myDraft',
        text: '我的草稿',
    },
])

// 處理Route Link的Active Class判別
const route = useRoute();
const currentMatchesNames = computed(() => route.matched.map((s) => s.name))
const navLinkClass = (name) => getNavLinkClass(currentMatchesNames, name)

// 更新通知狀態
onMounted(() => { user.notifications.myDraft = false })

// 監聽變數變化
watch(posts, (nV, oV) => reDrawPosts(), { immediate: true })
</script>

<style scoped lang="scss">
#my-draft-nav {
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