<template>
    <ul id="home-nav" class="nav mt-2 mt-sm-5 mx-1 mx-sm-5 px-4">
        <li v-for="subRoute in subRoutes" :key="subRoute.name" class="nav-item mx-3">
            <router-link :class="navLinkClass(subRoute.name)" :to="subRoute.path">{{ subRoute.text }}</router-link>
        </li>
    </ul>
    <div class="mx-1 mx-sm-5 py-3 py-sm-5">
        <router-view/>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, computed } from 'vue';
import { getNavLinkClass } from '@/common-functions.js';

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

// 處理Route Link的Active Class判別
const route = useRoute();
const currentMatchesNames = computed(() => route.matched.map((s) => s.name))
const navLinkClass = (name) => getNavLinkClass(currentMatchesNames, name)
</script>

<style scoped lang="scss">
#home-nav {
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