<template>
    <!-- 上方導航列 -->
    <nav class="navbar fixed-top navbar-expand-md navbar-dark bg-light-green py-0 vw-100">
        <div class="container-fluid">
            <!-- 小於LG時的漢堡鈕 -->
            <label for="sidebar-toggle" type="button" id="sidebarCollapse" class="navbar-toggler" @click="reDrawPosts">
                <i class="fas fa-align-left"></i>
                <span class="navbar-toggler-icon"></span>
            </label>

            <!-- 主導覽列內容 -->
            <a class="navbar-brand p-0" href="/"><img src="@/assets/banner.png" height="65"/></a>
            <div class="row collapse navbar-collapse justify-content-between py-3 py-lg-0 pe-0 pe-sm-4">
                <!-- 搜尋區 -->
                <div class="col text-start">
                    <div class="d-none d-md-block">
                        <label id="search-area">
                            <input
                                class="form-control me-2"
                                type="search"
                                placeholder="搜尋more貼文"
                            />
                        </label>
                    </div>
                </div>
                <!-- 訊息 -->
                <div v-if="user.logged_in" class="col-auto px-2">
                    <svg width="28" height="25" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31.4991 10.3323C29.9429 5.51167 26.4977 2.45883 21.6719 0.962869C15.2945 -1.01293 9.40728 0.016564 4.32643 4.37967C1.95341 6.38084 0.446996 9.18158 0.109955 12.219C0.0844229 12.3534 0.0476488 12.4856 0 12.6142V14.6939C0.377207 16.0146 0.586429 17.414 1.17591 18.6381C1.79746 19.9306 2.79317 21.0507 3.59798 22.2644C3.75069 22.5036 3.92479 22.8586 3.8637 23.1008C3.46817 24.7349 3.00392 26.3408 2.58089 27.9615C2.50454 28.2586 2.39 28.6538 2.52591 28.8529C2.63892 29.0148 3.10776 29.0207 3.39945 28.9762C5.99549 28.5924 8.52967 27.8838 10.939 26.8682C11.2438 26.7657 11.5725 26.7507 11.8858 26.8251C17.7929 27.9868 23.1333 26.9083 27.6766 22.9314C30.0575 20.8516 31.5083 18.2251 31.887 15.0891C31.9143 14.9553 31.9521 14.8237 32 14.6954V12.6156C31.8351 11.8565 31.7373 11.0736 31.4991 10.3323ZM7.4235 15.7695C7.14594 15.7713 6.87074 15.7198 6.61362 15.6181C6.3565 15.5164 6.12249 15.3664 5.92495 15.1768C5.72741 14.9871 5.5702 14.7614 5.46232 14.5126C5.35443 14.2639 5.29798 13.9968 5.29618 13.7268C5.29437 13.4568 5.34725 13.1891 5.4518 12.939C5.55635 12.6889 5.71052 12.4613 5.90551 12.2691C6.1005 12.0769 6.33249 11.924 6.58823 11.8191C6.84397 11.7141 7.11845 11.6592 7.39601 11.6575C7.67357 11.6557 7.94877 11.7071 8.20589 11.8088C8.46301 11.9105 8.69703 12.0605 8.89457 12.2502C9.09211 12.4399 9.24931 12.6655 9.35719 12.9143C9.46508 13.1631 9.52153 13.4301 9.52334 13.7001C9.52514 13.9701 9.47226 14.2378 9.36771 14.4879C9.26316 14.738 9.10899 14.9657 8.914 15.1578C8.71901 15.35 8.48703 15.5029 8.23129 15.6079C7.97555 15.7128 7.70106 15.7677 7.4235 15.7695ZM16.0183 15.7695C15.6006 15.773 15.1911 15.656 14.8417 15.4333C14.4923 15.2105 14.2186 14.8921 14.0551 14.5181C13.8916 14.1441 13.8457 13.7314 13.9233 13.3321C14.0008 12.9327 14.1982 12.5647 14.4906 12.2745C14.783 11.9842 15.1573 11.7848 15.5661 11.7013C15.975 11.6179 16.4001 11.6542 16.7877 11.8056C17.1754 11.957 17.5083 12.2168 17.7442 12.5522C17.9802 12.8875 18.1087 13.2834 18.1136 13.6897C18.1251 13.9624 18.0791 14.2346 17.9783 14.4893C17.8776 14.7441 17.7243 14.976 17.5278 15.1709C17.3313 15.3658 17.0959 15.5194 16.836 15.6224C16.5761 15.7253 16.2973 15.7754 16.0168 15.7695H16.0183ZM24.5704 15.7695C24.0098 15.7648 23.4742 15.5436 23.0812 15.1547C22.6883 14.7658 22.4703 14.2409 22.4751 13.6956C22.48 13.1504 22.7073 12.6293 23.1071 12.247C23.507 11.8648 24.0465 11.6527 24.607 11.6575C25.1676 11.6622 25.7033 11.8833 26.0962 12.2723C26.4891 12.6612 26.7072 13.186 26.7023 13.7313C26.6974 14.2766 26.4701 14.7977 26.0703 15.1799C25.6705 15.5621 25.1309 15.7742 24.5704 15.7695Z" fill="#94DBD7"/>
                    </svg>
                </div>
                <!-- 通知 -->
                <div v-if="user.logged_in" class="col-auto px-2 position-relative">
                    <div class="dropdown">
                        <svg 
                            width="21" 
                            height="25" 
                            class="cursor-pointer dropdown-toggle" 
                            @click="user.notifications.main = false"
                            data-bs-toggle="dropdown" 
                            viewBox="0 0 27 32" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M26.206 22.9089C25.4555 22.3087 24.7363 21.6649 23.9944 21.053C23.8149 20.9167 23.6664 20.7426 23.559 20.5424C23.4515 20.3422 23.3877 20.1207 23.3718 19.8931C23.116 16.5553 23.8437 13.1828 22.9852 9.85954C22.8601 9.36946 22.8545 8.80689 22.6612 8.31971C22.1444 6.93507 21.3283 5.68705 20.2736 4.6684C19.219 3.64975 17.9528 2.88668 16.5692 2.43589C16.3958 2.37499 16.1883 2.31989 16.0007 2.2416C15.9142 1.62246 15.6126 1.05558 15.1509 0.644173C14.6892 0.232762 14.098 0.00416738 13.4849 0C12.8733 0.00136479 12.2825 0.226161 11.8194 0.633655C11.3563 1.04115 11.0517 1.60438 10.9606 2.2213C10.8389 2.28527 10.7113 2.33675 10.5797 2.37499C6.59988 3.58133 3.44733 7.49615 3.6321 12.6347C3.71454 14.9227 3.6321 17.2165 3.64632 19.5045C3.66491 19.8295 3.60025 20.1539 3.4587 20.4458C3.31715 20.7376 3.10358 20.9869 2.83899 21.169C2.19085 21.6388 1.58251 22.1666 0.954275 22.6653C0.625181 22.9046 0.364533 23.229 0.199152 23.6051C0.0337713 23.9813 -0.0303674 24.3956 0.0133413 24.8054C0.129892 26.0118 1.0822 27.0267 2.66274 27.0209C9.75245 26.9977 16.8393 27.0209 23.929 27.0209C24.345 27.0411 24.7619 27.0119 25.1713 26.9339C25.593 26.852 25.982 26.6461 26.2906 26.3416C26.5992 26.0372 26.8138 25.6473 26.9082 25.2201C27.1299 24.3299 26.9735 23.5121 26.206 22.9089Z" fill="#94DBD7"/>
                            <path d="M13.4847 32C14.5402 32 15.5524 31.5723 16.2988 30.8109C17.0452 30.0495 17.4645 29.0169 17.4645 27.9402H9.50488C9.50488 29.0169 9.92418 30.0495 10.6705 30.8109C11.4169 31.5723 12.4292 32 13.4847 32Z" fill="#94DBD7"/>
                        </svg>
                        <ul class="dropdown-menu dropdown-menu-center arrow-up">
                            <li v-for="(notify, index) in notifications" :key="index">
                                <router-link
                                    class="dropdown-item py-3"
                                    :to="notify.to ?? '#'"
                                    @click="onNotifyClick(notify.click)"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        :width="notify.icon.width"
                                        :height="notify.icon.height"
                                        :viewBox="notify.icon.viewBox"
                                        :fill="notify.icon.fill"
                                    >
                                        <path v-for="(path, index) in notify.icon.paths" :key="index"
                                            :d="path.d"
                                            :fill="path.fill"
                                            :stroke="path.stroke"
                                            :stroke-width="path.strokeWidth"
                                            :stroke-linecap="path.strokeLinecap"
                                            :stroke-linejoin="path.strokeLinejoin"
                                        />
                                    </svg>
                                    {{ notify.content }}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <span v-if="user.notifications.main" class="notify-badge position-absolute translate-middle rounded-circle">
                        <span class="visually-hidden">New alerts</span>
                    </span>
                </div>
                <!-- 大頭貼 -->
                <div v-if="user.logged_in" class="col-auto px-2">
                    <div class="user-avatar rounded-circle d-flex justify-content-center align-items-center">
                        <img src="@/assets/user_avatar.png" class="img-fluid rounded-circle" />
                    </div>
                </div>
            </div>

            <!-- 登出/登入 -->
            <div v-if="user.logged_in" class="col-auto">
                <button
                    id="login-btn"
                    class="btn bg-dark-green text-white me-0 me-lg-5"
                    @click="toggleLoginStatus"
                >登出</button>
            </div>
            <div v-if="!user.logged_in" class="col-auto">
                <button
                    id="login-btn"
                    class="btn bg-dark-green text-white me-0 me-md-3 me-lg-5"
                    @click="dialogFunc.toggleLoginDialogModal"
                >登入</button>
            </div>
        </div>
    </nav>

    <!-- 主內容區 -->
    <div id="main" class="container-fluid">
        <input id='sidebar-toggle' type='checkbox' hidden="true" />

        <div id="wrapper" class="row flex-nowrap">
            <!-- 左側邊欄 -->
            <div id="sidebar" class="col-auto text-white bg-light1 py-3">

                <!-- 資訊區 -->
                <div class="side-navbar d-flex d-sm-none row mx-3 align-items-center mb-4">
                    <!-- 大頭貼 -->
                    <div v-if="user.logged_in" class="col-auto px-2">
                        <div class="user-avatar rounded-circle d-flex justify-content-center align-items-center">
                            <img src="@/assets/user_avatar.png" class="img-fluid rounded-circle" />
                        </div>
                    </div>
                    <!-- 訊息 -->
                    <div v-if="user.logged_in" class="col px-2">
                        <svg width="28" height="25" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.4991 10.3323C29.9429 5.51167 26.4977 2.45883 21.6719 0.962869C15.2945 -1.01293 9.40728 0.016564 4.32643 4.37967C1.95341 6.38084 0.446996 9.18158 0.109955 12.219C0.0844229 12.3534 0.0476488 12.4856 0 12.6142V14.6939C0.377207 16.0146 0.586429 17.414 1.17591 18.6381C1.79746 19.9306 2.79317 21.0507 3.59798 22.2644C3.75069 22.5036 3.92479 22.8586 3.8637 23.1008C3.46817 24.7349 3.00392 26.3408 2.58089 27.9615C2.50454 28.2586 2.39 28.6538 2.52591 28.8529C2.63892 29.0148 3.10776 29.0207 3.39945 28.9762C5.99549 28.5924 8.52967 27.8838 10.939 26.8682C11.2438 26.7657 11.5725 26.7507 11.8858 26.8251C17.7929 27.9868 23.1333 26.9083 27.6766 22.9314C30.0575 20.8516 31.5083 18.2251 31.887 15.0891C31.9143 14.9553 31.9521 14.8237 32 14.6954V12.6156C31.8351 11.8565 31.7373 11.0736 31.4991 10.3323ZM7.4235 15.7695C7.14594 15.7713 6.87074 15.7198 6.61362 15.6181C6.3565 15.5164 6.12249 15.3664 5.92495 15.1768C5.72741 14.9871 5.5702 14.7614 5.46232 14.5126C5.35443 14.2639 5.29798 13.9968 5.29618 13.7268C5.29437 13.4568 5.34725 13.1891 5.4518 12.939C5.55635 12.6889 5.71052 12.4613 5.90551 12.2691C6.1005 12.0769 6.33249 11.924 6.58823 11.8191C6.84397 11.7141 7.11845 11.6592 7.39601 11.6575C7.67357 11.6557 7.94877 11.7071 8.20589 11.8088C8.46301 11.9105 8.69703 12.0605 8.89457 12.2502C9.09211 12.4399 9.24931 12.6655 9.35719 12.9143C9.46508 13.1631 9.52153 13.4301 9.52334 13.7001C9.52514 13.9701 9.47226 14.2378 9.36771 14.4879C9.26316 14.738 9.10899 14.9657 8.914 15.1578C8.71901 15.35 8.48703 15.5029 8.23129 15.6079C7.97555 15.7128 7.70106 15.7677 7.4235 15.7695ZM16.0183 15.7695C15.6006 15.773 15.1911 15.656 14.8417 15.4333C14.4923 15.2105 14.2186 14.8921 14.0551 14.5181C13.8916 14.1441 13.8457 13.7314 13.9233 13.3321C14.0008 12.9327 14.1982 12.5647 14.4906 12.2745C14.783 11.9842 15.1573 11.7848 15.5661 11.7013C15.975 11.6179 16.4001 11.6542 16.7877 11.8056C17.1754 11.957 17.5083 12.2168 17.7442 12.5522C17.9802 12.8875 18.1087 13.2834 18.1136 13.6897C18.1251 13.9624 18.0791 14.2346 17.9783 14.4893C17.8776 14.7441 17.7243 14.976 17.5278 15.1709C17.3313 15.3658 17.0959 15.5194 16.836 15.6224C16.5761 15.7253 16.2973 15.7754 16.0168 15.7695H16.0183ZM24.5704 15.7695C24.0098 15.7648 23.4742 15.5436 23.0812 15.1547C22.6883 14.7658 22.4703 14.2409 22.4751 13.6956C22.48 13.1504 22.7073 12.6293 23.1071 12.247C23.507 11.8648 24.0465 11.6527 24.607 11.6575C25.1676 11.6622 25.7033 11.8833 26.0962 12.2723C26.4891 12.6612 26.7072 13.186 26.7023 13.7313C26.6974 14.2766 26.4701 14.7977 26.0703 15.1799C25.6705 15.5621 25.1309 15.7742 24.5704 15.7695Z" fill="#3c8585"/>
                        </svg>
                    </div>
                    <!-- 通知 -->
                    <div v-if="user.logged_in" class="col px-2 position-relative">
                        <div class="dropdown">
                            <svg 
                                width="21" 
                                height="25" 
                                class="cursor-pointer dropdown-toggle" 
                                @click="user.notifications.main = false"
                                data-bs-toggle="dropdown" 
                                viewBox="0 0 27 32" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M26.206 22.9089C25.4555 22.3087 24.7363 21.6649 23.9944 21.053C23.8149 20.9167 23.6664 20.7426 23.559 20.5424C23.4515 20.3422 23.3877 20.1207 23.3718 19.8931C23.116 16.5553 23.8437 13.1828 22.9852 9.85954C22.8601 9.36946 22.8545 8.80689 22.6612 8.31971C22.1444 6.93507 21.3283 5.68705 20.2736 4.6684C19.219 3.64975 17.9528 2.88668 16.5692 2.43589C16.3958 2.37499 16.1883 2.31989 16.0007 2.2416C15.9142 1.62246 15.6126 1.05558 15.1509 0.644173C14.6892 0.232762 14.098 0.00416738 13.4849 0C12.8733 0.00136479 12.2825 0.226161 11.8194 0.633655C11.3563 1.04115 11.0517 1.60438 10.9606 2.2213C10.8389 2.28527 10.7113 2.33675 10.5797 2.37499C6.59988 3.58133 3.44733 7.49615 3.6321 12.6347C3.71454 14.9227 3.6321 17.2165 3.64632 19.5045C3.66491 19.8295 3.60025 20.1539 3.4587 20.4458C3.31715 20.7376 3.10358 20.9869 2.83899 21.169C2.19085 21.6388 1.58251 22.1666 0.954275 22.6653C0.625181 22.9046 0.364533 23.229 0.199152 23.6051C0.0337713 23.9813 -0.0303674 24.3956 0.0133413 24.8054C0.129892 26.0118 1.0822 27.0267 2.66274 27.0209C9.75245 26.9977 16.8393 27.0209 23.929 27.0209C24.345 27.0411 24.7619 27.0119 25.1713 26.9339C25.593 26.852 25.982 26.6461 26.2906 26.3416C26.5992 26.0372 26.8138 25.6473 26.9082 25.2201C27.1299 24.3299 26.9735 23.5121 26.206 22.9089Z" fill="#3c8585"/>
                                <path d="M13.4847 32C14.5402 32 15.5524 31.5723 16.2988 30.8109C17.0452 30.0495 17.4645 29.0169 17.4645 27.9402H9.50488C9.50488 29.0169 9.92418 30.0495 10.6705 30.8109C11.4169 31.5723 12.4292 32 13.4847 32Z" fill="#3c8585"/>
                            </svg>
                            <ul class="dropdown-menu dropdown-menu-center arrow-up">
                                <li v-for="(notify, index) in notifications" :key="index">
                                    <router-link
                                        class="dropdown-item py-3"
                                        :to="notify.to ?? '#'"
                                        @click="onNotifyClick(notify.click)"
                                    >
                                        <div class="row">
                                            <div class="col-auto">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    :width="notify.icon.width"
                                                    :height="notify.icon.height"
                                                    :viewBox="notify.icon.viewBox"
                                                    :fill="notify.icon.fill"
                                                >
                                                    <path v-for="(path, index) in notify.icon.paths" :key="index"
                                                        :d="path.d"
                                                        :fill="path.fill"
                                                        :stroke="path.stroke"
                                                        :stroke-width="path.strokeWidth"
                                                        :stroke-linecap="path.strokeLinecap"
                                                        :stroke-linejoin="path.strokeLinejoin"
                                                    />
                                                </svg>
                                            </div>
                                            <div class="col ps-0 text-wrap text-justify">{{ notify.content }}</div>
                                        </div>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                        <span v-if="user.notifications.main" class="notify-badge position-absolute translate-middle rounded-circle">
                            <span class="visually-hidden">New alerts</span>
                        </span>
                    </div>
                </div>

                <!-- 主路由 -->
                <ul class="nav flex-column align-items-start">
                    <li v-for="mainRoute in mainRoutes" :key="mainRoute.name" class="nav-item">
                        <router-link :class="navLinkClass(mainRoute.name)" :to="mainRoute.path">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                :width="mainRoute.icon.width"
                                :height="mainRoute.icon.height"
                                :viewBox="mainRoute.icon.viewBox"
                                :fill="mainRoute.icon.fill"
                            >
                                <path v-for="(path, index) in mainRoute.icon.paths" :key="index"
                                    :d="path.d"
                                    :fill="navLinkClass(mainRoute.name).active && path.fill ? '#3C8585': path.fill"
                                    :stroke="path.stroke"
                                    :stroke-width="path.strokeWidth"
                                    :stroke-linecap="path.strokeLinecap"
                                    :stroke-linejoin="path.strokeLinejoin"
                                />
                            </svg>
                            <span class="ms-2">{{ mainRoute.text }}</span>
                        </router-link>
                    </li>
                </ul>

                <!-- 精選版 -->
                <hr class="my-4 opacity-75" />

                <div class="text-start text-light-green nav-sub-title mt-2 mb-3 ps-3">
                    Formore精選版
                </div>

                <ul class="nav flex-column align-items-start">
                    <li v-for="route in secondRoutes" :key="route.name" class="nav-item">
                        <router-link :class="navLinkClass(route.name)" :to="route.path">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                :width="route.icon.width"
                                :height="route.icon.height"
                                :viewBox="route.icon.viewBox"
                                :fill="route.icon.fill"
                            >
                                <path v-for="(path, index) in route.icon.paths" :key="index"
                                    :d="path.d"
                                    :fill="navLinkClass(route.name).active && path.fill ? '#3C8585': path.fill"
                                    :stroke="path.stroke"
                                    :stroke-width="path.strokeWidth"
                                    :stroke-linecap="path.strokeLinecap"
                                    :stroke-linejoin="path.strokeLinejoin"
                                />
                            </svg>
                            <span class="ms-2">{{ route.text }}</span>
                        </router-link>
                    </li>
                </ul>

                <!-- 個人版 -->
                <hr v-if="user.logged_in" class="my-4 opacity-75" />

                <div v-if="user.logged_in" class="text-start text-light-green nav-sub-title mt-2 mb-3 ps-3">
                    {{ user.username }}的Formore
                </div>

                <ul v-if="user.logged_in" class="nav flex-column align-items-start">
                    <li v-for="route in personalRoutes" :key="route.name" class="nav-item">
                        <router-link
                            :class="navLinkClass(route.name)"
                            :to="route.path"
                            class="position-relative"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                :width="route.icon.width"
                                :height="route.icon.height"
                                :viewBox="route.icon.viewBox"
                                :fill="route.icon.fill"
                            >
                                <path v-for="(path, index) in route.icon.paths" :key="index"
                                    :d="path.d"
                                    :fill="navLinkClass(route.name).active && path.fill ? '#3C8585': path.fill"
                                    :stroke="path.stroke"
                                    :stroke-width="path.strokeWidth"
                                    :stroke-linecap="path.strokeLinecap"
                                    :stroke-linejoin="path.strokeLinejoin"
                                />
                            </svg>
                            <span class="ms-2">{{ route.text }}</span>
                            <span v-if="route.name==='myPost' || route.name==='myDraft'">({{ unread(route.name) }})</span>
                            <span
                                v-if="user.notifications[route.name]"
                                class="notify-badge 
                                position-absolute 
                                translate-middle 
                                p-1 
                                border 
                                border-light 
                                rounded-circle"
                            ><span class="visually-hidden">New alerts</span></span>
                        </router-link>
                    </li>
                </ul>
            </div>

            <!-- 右側內容 -->
            <div id="content" class="col">
                <router-view />
            </div>
        </div>
    </div>

    <!-- DIALOG 區 -->
    <PostDialog ref="postDialogRef" :post="currentPost" />
    <DraftDialog ref="draftDialogRef" :post="currentPost" />
    <AdminPostDialog ref="adminPostDialogRef" :post="currentAdminPost" />
    <MissingEnvelopeDialogModal ref="missingEnvelopeDialogRef" />
    <AdminEnvelopeDialogModal ref="adminEnvelopeDialogRef" />
    <LoginDialog ref="loginDialogRef" />
    
    <!-- TOAST 區 -->
    <NewNotifyToast ref="newNotifyToastRef" />
</template>

<script>
// 引入component進行使用
import PostDialog from '@/components/PostDialog.vue';
import DraftDialog from '@/components/DraftDialog.vue';
import AdminPostDialog from '@/components/AdminPostDialog.vue';
import MissingEnvelopeDialogModal from '@/components/MissingEnvelopeDialog.vue';
import AdminEnvelopeDialogModal from '@/components/AdminEnvelopeDialog.vue';
import LoginDialog from '@/components/LoginDialog.vue';
import NewNotifyToast from '@/components/NewNotifyToast.vue';

export default {
    components: {
        PostDialog,
        DraftDialog,
        AdminPostDialog,
        MissingEnvelopeDialogModal,
        AdminEnvelopeDialogModal,
        LoginDialog,
        NewNotifyToast,
    }
};
</script>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref, reactive, computed, inject, provide } from 'vue';
import { getNavLinkClass } from '@/common-functions.js';

// 讀入user.json、posts.json、admin_post.json及notifications.json
import userJson from '@/assets/user.json';
import postsJson from '@/assets/posts.json';
import for01PostsJson from '@/assets/for_01_posts.json';
import for02PostsJson from '@/assets/for_02_posts.json';
import for03PostsJson from '@/assets/for_03_posts.json';
import adminPostsJson from '@/assets/admin_posts.json';
import notificationsJson from '@/assets/notifications.json';

// inject需要用的參數進行使用，需在parent或grand-parent進行provide
//（APP的上層就是AppCreate時use的那些plugin們）
const redrawVueMasonry = inject('redrawVueMasonry')

// Router Map
const mainRoutes = ref([
    {
        name: 'home',
        path: '/hot',
        text: '首頁',
        icon: {
            width: 23,
            height: 24,
            viewBox: "0 0 23 24",
            fill: "none",
            paths: [
                {
                    d: "M12.5814 1.08927C12.1485 0.709876 11.5871 0.5 11.0051 0.5C10.4232 0.5 9.86182 0.709876 9.42894 1.08927L0.781421 8.66892C0.535553 8.8846 0.338927 9.1483 0.204305 9.44291C0.0696835 9.73753 7.57174e-05 10.0565 0 10.379V21.1994C0 21.8096 0.248475 22.3947 0.690764 22.8262C1.13305 23.2576 1.73292 23.5 2.35841 23.5H5.50297C6.12846 23.5 6.72833 23.2576 7.17062 22.8262C7.61291 22.3947 7.86138 21.8096 7.86138 21.1994V15.0645C7.86138 14.8611 7.94421 14.6661 8.09164 14.5223C8.23907 14.3785 8.43902 14.2977 8.64752 14.2977H13.3643C13.5728 14.2977 13.7728 14.3785 13.9202 14.5223C14.0677 14.6661 14.1505 14.8611 14.1505 15.0645V21.1994C14.1505 21.8096 14.399 22.3947 14.8413 22.8262C15.2835 23.2576 15.8834 23.5 16.5089 23.5H19.6535C20.2789 23.5 20.8788 23.2576 21.3211 22.8262C21.7634 22.3947 22.0119 21.8096 22.0119 21.1994V10.379C22.0118 10.0565 21.9422 9.73753 21.8076 9.44291C21.6729 9.1483 21.4763 8.8846 21.2304 8.66892L12.5829 1.08927H12.5814Z",
                    fill: "#303030",
                    stroke: null,
                    strokeWidth: null,
                    strokeLinecap: null,
                    strokeLinejoin: null,
                }
            ]
        }
    },
    {
        name: 'about',
        path: '#',
        text: '發文規定',
        icon: {
            width: 23,
            height: 24,
            viewBox: "0 0 23 24",
            fill: "none",
            paths: [
                {
                    d: "M11.5 0.5C9.22552 0.5 7.00211 1.17446 5.11095 2.4381C3.21978 3.70174 1.7458 5.49779 0.87539 7.59914C0.00498273 9.70049 -0.222756 12.0128 0.220974 14.2435C0.664704 16.4743 1.75997 18.5234 3.36828 20.1317C4.97658 21.74 7.02568 22.8353 9.25646 23.279C11.4872 23.7228 13.7995 23.495 15.9009 22.6246C18.0022 21.7542 19.7983 20.2802 21.0619 18.3891C22.3255 16.4979 23 14.2745 23 12C23 8.95001 21.7884 6.02494 19.6317 3.86827C17.4751 1.7116 14.55 0.5 11.5 0.5ZM10.4938 5.31562C10.4938 5.04875 10.5998 4.79281 10.7885 4.6041C10.9772 4.41539 11.2331 4.30937 11.5 4.30937C11.7669 4.30937 12.0228 4.41539 12.2115 4.6041C12.4002 4.79281 12.5063 5.04875 12.5063 5.31562V13.9406C12.5063 14.2075 12.4002 14.4634 12.2115 14.6521C12.0228 14.8409 11.7669 14.9469 11.5 14.9469C11.2331 14.9469 10.9772 14.8409 10.7885 14.6521C10.5998 14.4634 10.4938 14.2075 10.4938 13.9406V5.31562ZM11.5 19.5469C11.2441 19.5469 10.994 19.471 10.7812 19.3288C10.5685 19.1867 10.4027 18.9846 10.3047 18.7482C10.2068 18.5118 10.1812 18.2517 10.2311 18.0007C10.281 17.7498 10.4042 17.5192 10.5852 17.3383C10.7661 17.1574 10.9966 17.0341 11.2476 16.9842C11.4986 16.9343 11.7587 16.9599 11.9951 17.0579C12.2315 17.1558 12.4336 17.3216 12.5757 17.5344C12.7179 17.7471 12.7938 17.9972 12.7938 18.2531C12.7938 18.5962 12.6574 18.9253 12.4148 19.1679C12.1722 19.4106 11.8431 19.5469 11.5 19.5469Z",
                    fill: "#303030",
                    stroke: null,
                    strokeWidth: null,
                    strokeLinecap: null,
                    strokeLinejoin: null,
                }
            ]
        }
    },
])
const secondRoutes = ref([
    {
        name: 'for01',
        path: '/for01',
        text: 'For 知識',
        icon: {
            width: 23,
            height: 20,
            viewBox: "0 0 31 27",
            fill: "none",
            paths: [
                {
                    d: "M26.1666 9.875V7.125C26.1666 5.6125 24.9666 4.375 23.4999 4.375H19.4999C19.4999 2.0925 17.7133 0.25 15.4999 0.25C13.2866 0.25 11.4999 2.0925 11.4999 4.375H7.49992C6.03325 4.375 4.83325 5.6125 4.83325 7.125V9.875C2.61992 9.875 0.833252 11.7175 0.833252 14C0.833252 16.2825 2.61992 18.125 4.83325 18.125V23.625C4.83325 25.1375 6.03325 26.375 7.49992 26.375H23.4999C24.9666 26.375 26.1666 25.1375 26.1666 23.625V18.125C28.3799 18.125 30.1666 16.2825 30.1666 14C30.1666 11.7175 28.3799 9.875 26.1666 9.875ZM23.4999 23.625H7.49992V7.125H23.4999V23.625ZM11.4999 15.375C10.3933 15.375 9.49992 14.4537 9.49992 13.3125C9.49992 12.1713 10.3933 11.25 11.4999 11.25C12.6066 11.25 13.4999 12.1713 13.4999 13.3125C13.4999 14.4537 12.6066 15.375 11.4999 15.375ZM21.4999 13.3125C21.4999 14.4537 20.6066 15.375 19.4999 15.375C18.3933 15.375 17.4999 14.4537 17.4999 13.3125C17.4999 12.1713 18.3933 11.25 19.4999 11.25C20.6066 11.25 21.4999 12.1713 21.4999 13.3125ZM10.1666 18.125H20.8333V20.875H10.1666V18.125Z",
                    fill: "#303030",
                    stroke: null,
                    strokeWidth: null,
                    strokeLinecap: null,
                    strokeLinejoin: null,
                }
            ]
        }
    },
    {
        name: 'for02',
        path: '/for02',
        text: 'For 靠背',
        icon: {
            width: 23,
            height: 21,
            viewBox: "0 0 28 26",
            fill: "none",
            paths: [
                {
                    d: "M0.631836 14.8816C0.552734 14.2723 0.5 13.6527 0.5 13.023C0.5 7.48789 3.64824 2.66875 8.30996 0.114456L9.18008 1.88164V13.9523L8.21504 14.8816H0.631836ZM27.5 13.9523C27.5 14.8816 26.535 15.8109 25.5699 15.8109H17.8549C18.3348 17.6695 18.8199 19.523 18.8199 20.4523C18.8199 22.3109 17.8549 24.1645 17.375 24.6316C17.3645 24.6418 16.8951 25.0938 15.9301 25.0938C14.4852 25.0938 14.4852 23.7023 14.4852 23.7023C14.4852 23.677 14.0053 21.3816 14.0053 20.4523C14.0053 19.523 12.0752 15.8109 11.1102 14.8816L10.1451 14.4195V1.41953L11.1102 0.957424H21.715C23.6451 0.957424 24.6102 1.88672 24.6102 2.81602C24.6102 3.74531 23.6451 4.67461 22.6801 4.67461C24.6102 4.67461 25.5752 5.60391 25.5752 6.53321C25.5752 7.4625 24.6102 8.3918 23.6451 8.3918C25.5752 8.3918 26.5402 9.3211 26.5402 10.2504C26.5402 11.1797 25.5752 12.109 24.6102 12.109C26.535 12.0938 27.5 13.023 27.5 13.9523Z",
                    fill: "#303030",
                    stroke: null,
                    strokeWidth: null,
                    strokeLinecap: null,
                    strokeLinejoin: null,
                }
            ]
        }
    },
    {
        name: 'for03',
        path: '/for03',
        text: 'For 告白',
        icon: {
            width: 23,
            height: 21,
            viewBox: "0 0 27 24",
            fill: "none",
            paths: [
                {
                    d: "M13.9571 3.90545C9.51874 -2.95029 0.535645 0.784498 0.535645 8.25269C0.535645 13.8607 12.851 22.6332 13.9571 23.7739C15.0709 22.6332 26.7737 13.8607 26.7737 8.25269C26.7737 0.841117 18.4038 -2.95029 13.9571 3.90545V3.90545Z",
                    fill: "#303030",
                    stroke: null,
                    strokeWidth: null,
                    strokeLinecap: null,
                    strokeLinejoin: null,
                }
            ]
        }
    },
])
const personalRoutes = ref([
    {
        name: 'myPost',
        path: '/myPost',
        text: '我的貼文',
        icon: {
            width: 23,
            height: 20,
            viewBox: "0 0 25 25",
            fill: "none",
            paths: [
                {
                    d: "M12.5 25C19.4036 25 25 19.4036 25 12.5C25 5.59644 19.4036 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 19.4036 5.59644 25 12.5 25Z",
                    fill: "#303030",
                    stroke: null,
                    strokeWidth: null,
                    strokeLinecap: null,
                    strokeLinejoin: null,
                },
                {
                    d: "M12.4658 3.37842V12.8953",
                    fill: null,
                    stroke: "#ECECEC",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                },
                {
                    d: "M18.8515 19.2904L12.5137 12.9492",
                    fill: null,
                    stroke: "#ECECEC",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                }
            ]
        }
    },
    {
        name: 'myDraft',
        path: '/myDraft',
        text: '我的草稿',
        icon: {
            width: 23,
            height: 21,
            viewBox: "0 0 26 26",
            fill: "none",
            paths: [
                {
                    d: "M17.4857 0.955957C16.7367 1.69848 15.9974 2.45403 15.2256 3.1705C15.032 3.294 14.803 3.35009 14.5742 3.33007C11.5292 3.33007 8.48425 3.33007 5.43927 3.34961C3.48526 3.34961 2.47894 4.36895 2.47894 6.32621C2.47894 11.12 2.47894 15.9138 2.47894 20.7077C2.47894 22.4011 3.50479 23.4856 5.20803 23.4889C10.1191 23.5019 15.0302 23.5019 19.9412 23.4889C21.6379 23.4889 22.641 22.463 22.6475 20.7663C22.6475 17.7213 22.6671 14.6763 22.6475 11.6476C22.6366 11.4163 22.6774 11.1855 22.767 10.972C22.8566 10.7585 22.9927 10.5676 23.1653 10.4133C23.8167 9.79131 24.4094 9.11066 25.0281 8.45933L25.1779 8.544C25.1779 9.39725 25.1779 10.2538 25.1779 11.107C25.1779 14.6633 25.1779 18.2196 25.1356 21.7726C25.1528 22.683 24.8705 23.5737 24.3321 24.308C23.7937 25.0423 23.0291 25.5795 22.1558 25.8369C21.7817 25.9481 21.3931 26.003 21.0029 25.9998C15.4448 25.9998 9.8857 25.9998 4.32548 25.9998C1.84064 25.9998 0.0396947 24.2477 0.026668 21.7661C0.000614627 16.6792 0.00713234 11.5922 0.000618998 6.50207C0.000618998 6.03311 0.000618998 5.56089 0.000618998 5.08867C-0.0180906 4.00588 0.387969 2.95882 1.13182 2.17175C1.87567 1.38469 2.89815 0.920203 3.98027 0.877796C5.37413 0.809405 6.77124 0.828944 8.1651 0.825688C11.2459 0.825688 14.3278 0.825688 17.4108 0.825688L17.4857 0.955957Z",
                    fill: "#303030",
                    stroke: null,
                    strokeWidth: null,
                    strokeLinecap: null,
                    strokeLinejoin: null,
                },
                {
                    d: "M19.7724 2.18042L23.6804 6.15356L15.0633 14.9466L11.1553 10.9409L19.7724 2.18042Z",
                    fill: "#303030",
                    stroke: null,
                    strokeWidth: null,
                    strokeLinecap: null,
                    strokeLinejoin: null,
                },
                {
                    d: "M24.4911 5.48933L20.4561 1.60086C20.8454 1.15655 21.2573 0.732624 21.6903 0.330764C22.2244 -0.121913 22.6478 -0.108889 23.1493 0.363328C24.0189 1.18401 24.8623 2.02749 25.696 2.88074C25.7875 2.97113 25.8598 3.079 25.9086 3.19793C25.9575 3.31687 25.9819 3.44442 25.9803 3.57298C25.9788 3.70154 25.9514 3.82848 25.8998 3.94623C25.8481 4.06397 25.7733 4.17011 25.6798 4.25831C25.3052 4.7175 24.8688 5.11481 24.4911 5.48933Z",
                    fill: "#303030",
                    stroke: null,
                    strokeWidth: null,
                    strokeLinecap: null,
                    strokeLinejoin: null,
                },
                {
                    d: "M14.187 15.585L8.78418 17.1221C9.32804 15.2365 9.8426 13.4453 10.3702 11.6118L14.187 15.585Z",
                    fill: "#303030",
                    stroke: null,
                    strokeWidth: null,
                    strokeLinecap: null,
                    strokeLinejoin: null,
                }
            ]
        }
    },
    {
        name: 'xx',
        path: '#',
        text: '我的追蹤',
        icon: {
            width: 23,
            height: 21,
            viewBox: "0 0 25 27",
            fill: "none",
            paths: [
                {
                    d: "M23.3844 15.8669H17.5914L18.6599 11.2337H23.3908C23.8176 11.2337 24.2269 11.0594 24.5287 10.749C24.8305 10.4387 25 10.0178 25 9.57896C25 9.1401 24.8305 8.71921 24.5287 8.40889C24.2269 8.09856 23.8176 7.92423 23.3908 7.92423H19.4258L20.3463 3.95288C20.4453 3.52543 20.3751 3.07503 20.1512 2.70078C19.9273 2.32653 19.568 2.05908 19.1523 1.95726C18.7366 1.85545 18.2986 1.92761 17.9347 2.15787C17.5707 2.38813 17.3106 2.75763 17.2116 3.18508L16.1174 7.91761H11.4894L12.8283 2.11281C12.8886 1.89755 12.9058 1.67195 12.8788 1.44967C12.8518 1.22739 12.7812 1.01307 12.6712 0.819675C12.5613 0.626283 12.4143 0.457851 12.2392 0.324598C12.0641 0.191346 11.8645 0.0960453 11.6525 0.0444638C11.4405 -0.00711771 11.2206 -0.0138971 11.006 0.024527C10.7914 0.0629512 10.5866 0.145779 10.404 0.268C10.2215 0.390221 10.0649 0.549286 9.94393 0.735554C9.82292 0.921823 9.73995 1.13142 9.70005 1.35163L8.18099 7.91761H1.6156C1.18882 7.91761 0.779528 8.09195 0.477751 8.40227C0.175973 8.71259 0.00643313 9.13348 0.00643313 9.57234C0.00643313 10.0112 0.175973 10.4321 0.477751 10.7424C0.779528 11.0527 1.18882 11.2271 1.6156 11.2271H7.4086L6.33367 15.8603H1.60917C1.18239 15.8603 0.773085 16.0347 0.471308 16.345C0.16953 16.6553 0 17.0762 0 17.515C0 17.9539 0.16953 18.3748 0.471308 18.6851C0.773085 18.9954 1.18239 19.1698 1.60917 19.1698H5.56771L4.65371 23.1411C4.55692 23.5667 4.62782 24.0144 4.85092 24.3865C5.07403 24.7585 5.43122 25.0246 5.84449 25.1268C5.96708 25.1553 6.09217 25.1708 6.21782 25.1731C6.58065 25.1737 6.93293 25.0477 7.21706 24.8156C7.50118 24.5836 7.70032 24.2592 7.78192 23.8957L8.87615 19.1698H13.5106L12.1653 24.9746C12.0687 25.4011 12.1405 25.8496 12.3649 26.2218C12.5893 26.594 12.948 26.8595 13.3625 26.9602C13.4831 26.9865 13.6061 26.9999 13.7294 27C14.0917 27.0021 14.4438 26.8774 14.7281 26.6465C15.0123 26.4155 15.2117 26.092 15.2935 25.7291L16.819 19.1632H23.3844C23.8112 19.1632 24.2205 18.9888 24.5222 18.6785C24.824 18.3682 24.9936 17.9473 24.9936 17.5084C24.9936 17.0696 24.824 16.6487 24.5222 16.3384C24.2205 16.028 23.8112 15.8537 23.3844 15.8537V15.8669ZM14.2765 15.8669H9.64212L10.717 11.2337H15.345L14.2765 15.8669Z",
                    fill: "#303030",
                    stroke: null,
                    strokeWidth: null,
                    strokeLinecap: null,
                    strokeLinejoin: null,
                }
            ]
        }
    },
    {
        name: 'xx',
        path: '#',
        text: '我的收藏',
        icon: {
            width: 23,
            height: 21,
            viewBox: "0 0 26 25",
            fill: "none",
            paths: [
                {
                    d: "M19.9775 24.992H19.0741C17.3465 24.1163 15.6111 23.2565 13.8994 22.341C13.6366 22.1807 13.3351 22.096 13.0277 22.096C12.7203 22.096 12.4188 22.1807 12.156 22.341C10.4285 23.2565 8.66931 24.1163 6.92594 25H6.1335C4.4139 24.3472 3.81957 23.4078 4.09692 21.8155C4.37428 20.2233 4.61993 18.7107 4.92899 17.1662C5.00973 16.8652 5.00342 16.5473 4.91079 16.2498C4.81816 15.9523 4.64304 15.6875 4.40597 15.4864C3.3124 14.4594 2.26638 13.3926 1.17281 12.3735C0.604205 11.8985 0.194768 11.2592 0 10.5425V9.74636C0.107664 9.23224 0.367194 8.76269 0.744667 8.39909C1.12214 8.03549 1.6 7.79475 2.11582 7.7083C3.75617 7.44558 5.40445 7.20673 7.05272 7.02362C7.38219 7.01015 7.70104 6.90266 7.9719 6.71373C8.24276 6.5248 8.45443 6.26224 8.58214 5.95682C9.27949 4.484 10.0165 3.02711 10.7138 1.55429C10.8995 1.09493 11.2173 0.701664 11.6267 0.424785C12.0361 0.147906 12.5184 0 13.0119 0C13.5054 0 13.9877 0.147906 14.397 0.424785C14.8064 0.701664 15.1243 1.09493 15.31 1.55429C16.0152 3.01915 16.7601 4.47604 17.4416 5.94886C17.5625 6.24731 17.7651 6.50523 18.026 6.69264C18.2869 6.88006 18.5954 6.98931 18.9156 7.00771C20.4291 7.19878 21.9427 7.46946 23.4642 7.62868C24.0431 7.65307 24.5996 7.86001 25.0548 8.22013C25.51 8.58025 25.8407 9.07526 26 9.63489V10.7734C25.5972 11.3758 25.1579 11.9527 24.6845 12.5009C23.6781 13.5518 22.6004 14.5469 21.5148 15.558C21.3095 15.7402 21.1569 15.9747 21.0732 16.2367C20.9896 16.4987 20.9778 16.7786 21.0393 17.0468C21.2929 18.3285 21.5069 19.6182 21.7287 20.9079C21.7287 21.0751 21.7763 21.2503 21.808 21.4095C22.2438 23.3361 21.7763 24.1959 19.9775 24.992Z",
                    fill: "#303030",
                    stroke: null,
                    strokeWidth: null,
                    strokeLinecap: null,
                    strokeLinejoin: null,
                }
            ]
        }
    },
    {
        name: 'xx',
        path: '#',
        text: '設定',
        icon: {
            width: 23,
            height: 21,
            viewBox: "0 0 26 25",
            fill: "none",
            paths: [
                {
                    d: "M13.5003 0.0274495H14.1787C14.3347 0.0248899 14.4896 0.0535181 14.6343 0.111636C14.7791 0.169753 14.9108 0.256193 15.0216 0.365893C15.1325 0.475594 15.2204 0.606337 15.2801 0.750454C15.3397 0.894571 15.37 1.04915 15.3692 1.20514C15.3692 1.47396 15.3692 1.73639 15.3692 1.99881C15.3712 2.26504 15.4596 2.52342 15.6211 2.73506C15.7826 2.9467 16.0085 3.10015 16.2648 3.17234C16.521 3.24453 16.7938 3.23154 17.042 3.13532C17.2903 3.03911 17.5005 2.86489 17.6412 2.63886L18.0188 1.99881C18.0945 1.8552 18.199 1.72869 18.3257 1.62716C18.4524 1.52563 18.5986 1.45125 18.7553 1.40863C18.912 1.36601 19.0757 1.35608 19.2364 1.37943C19.3971 1.40278 19.5512 1.45891 19.6892 1.54436C20.0669 1.75558 20.4445 1.97319 20.8157 2.18441C20.9591 2.26043 21.0851 2.36544 21.1858 2.49275C21.2865 2.62007 21.3596 2.76693 21.4005 2.924C21.4414 3.08107 21.4493 3.24493 21.4235 3.40519C21.3977 3.56545 21.339 3.71861 21.2509 3.85495C21.1293 4.07257 21.0013 4.27738 20.8861 4.495C20.7483 4.7266 20.694 4.99845 20.7325 5.26519C20.7709 5.53194 20.8997 5.77743 21.0973 5.9607C21.285 6.15373 21.5321 6.27821 21.799 6.31418C22.0659 6.35015 22.3371 6.29556 22.5693 6.15913C22.8767 5.96917 23.2 5.8064 23.5357 5.67269C23.7835 5.59029 24.0525 5.59919 24.2943 5.69778C24.5361 5.79638 24.7346 5.97816 24.8541 6.21032C25.0931 6.60715 25.3235 7.01038 25.5453 7.42001C25.6924 7.68378 25.7319 7.99417 25.6555 8.28636C25.5792 8.57855 25.393 8.82997 25.1357 8.98813C24.9053 9.13534 24.6557 9.26335 24.4189 9.40416C24.1924 9.54179 24.0165 9.74896 23.9174 9.99477C23.8183 10.2406 23.8013 10.5119 23.8689 10.7681C23.9366 11.0244 24.0853 11.2519 24.2928 11.4167C24.5004 11.5816 24.7556 11.6749 25.0205 11.6827H25.7565C25.922 11.6735 26.0876 11.6992 26.2424 11.7584C26.3973 11.8175 26.5379 11.9086 26.6551 12.0258C26.7723 12.143 26.8634 12.2837 26.9226 12.4385C26.9817 12.5934 27.0074 12.7589 26.9982 12.9244C26.9982 13.3533 26.9982 13.7821 26.9982 14.2045C27.0043 14.362 26.9782 14.5191 26.9215 14.6662C26.8648 14.8132 26.7787 14.9472 26.6685 15.0598C26.5583 15.1725 26.4262 15.2614 26.2804 15.3213C26.1346 15.3811 25.9781 15.4106 25.8205 15.4078H25.0461C24.7773 15.4113 24.517 15.5028 24.3051 15.6684C24.0933 15.834 23.9416 16.0645 23.8733 16.3245C23.805 16.5846 23.8239 16.8599 23.9271 17.1082C24.0303 17.3565 24.212 17.5641 24.4445 17.6992L25.0845 18.0768C25.2236 18.1513 25.346 18.2533 25.4442 18.3767C25.5424 18.5001 25.6144 18.6423 25.6558 18.7945C25.6971 18.9467 25.7069 19.1058 25.6846 19.2619C25.6624 19.4181 25.6084 19.568 25.5261 19.7025C25.2829 20.1442 25.0333 20.573 24.7581 20.9826C24.5788 21.2241 24.3142 21.3882 24.0182 21.4417C23.7223 21.4952 23.417 21.4341 23.1645 21.2707L22.5629 20.9187C22.3329 20.8011 22.0719 20.7586 21.8166 20.7972C21.5612 20.8357 21.3243 20.9533 21.1393 21.1334C20.9542 21.3135 20.8302 21.5471 20.7848 21.8014C20.7394 22.0556 20.7748 22.3177 20.8861 22.5508L21.2701 23.1908C21.3549 23.3261 21.4116 23.4771 21.4366 23.6347C21.4616 23.7924 21.4544 23.9536 21.4155 24.1084C21.3767 24.2633 21.3069 24.4086 21.2104 24.5358C21.1139 24.663 20.9927 24.7694 20.8541 24.8485C20.4573 25.0918 20.0541 25.3222 19.6508 25.5462C19.3832 25.6939 19.0687 25.7317 18.7737 25.6517C18.4787 25.5716 18.2263 25.38 18.07 25.1174C17.9292 24.8934 17.8012 24.6501 17.6604 24.4197C17.521 24.1907 17.3104 24.0135 17.0609 23.9153C16.8114 23.817 16.5366 23.8031 16.2785 23.8756C16.0203 23.9482 15.793 24.1031 15.6311 24.3169C15.4692 24.5307 15.3817 24.7916 15.382 25.0598V25.7894C15.3874 25.9503 15.3595 26.1105 15.3003 26.2602C15.241 26.4098 15.1515 26.5456 15.0374 26.6591C14.9233 26.7726 14.787 26.8614 14.6371 26.9199C14.4872 26.9784 14.3268 27.0054 14.1659 26.9991H12.8475C12.6914 27.0043 12.5357 26.9779 12.39 26.9217C12.2442 26.8655 12.1112 26.7805 11.9989 26.6718C11.8867 26.5631 11.7974 26.433 11.7365 26.2891C11.6756 26.1452 11.6442 25.9905 11.6443 25.8342C11.6443 25.5654 11.6443 25.2902 11.6443 25.0213C11.6265 24.7606 11.526 24.5123 11.3574 24.3126C11.1888 24.1128 10.961 23.9721 10.7069 23.9107C10.4529 23.8493 10.1858 23.8705 9.94469 23.9713C9.70353 24.072 9.50077 24.2471 9.36587 24.4709C9.23787 24.6821 9.11627 24.8997 8.98827 25.111C8.91477 25.2542 8.81268 25.3808 8.68832 25.4831C8.56395 25.5853 8.41995 25.661 8.26521 25.7054C8.11046 25.7498 7.94826 25.7619 7.78862 25.7412C7.62897 25.7204 7.47527 25.6671 7.33703 25.5846L6.19781 24.9445C6.05367 24.8684 5.92691 24.7632 5.82554 24.6356C5.72416 24.508 5.65038 24.3607 5.60887 24.203C5.56736 24.0454 5.55902 23.8809 5.58438 23.7199C5.60974 23.5589 5.66825 23.4049 5.7562 23.2676L6.12101 22.6276C6.25796 22.391 6.30979 22.1146 6.26787 21.8444C6.22595 21.5743 6.09282 21.3266 5.89061 21.1427C5.7042 20.9532 5.45919 20.8324 5.19543 20.7999C4.93166 20.7673 4.66463 20.825 4.43778 20.9634C4.23937 21.0723 4.04098 21.1811 3.84898 21.3027C3.7006 21.396 3.53397 21.4565 3.36028 21.4802C3.18658 21.5038 3.00985 21.49 2.84193 21.4397C2.67401 21.3894 2.51879 21.3037 2.38671 21.1884C2.25463 21.0732 2.14873 20.931 2.07614 20.7714C1.90713 20.4346 1.7191 20.1076 1.51294 19.7922C1.41897 19.652 1.35605 19.4933 1.32841 19.3268C1.30077 19.1603 1.30907 18.9898 1.35271 18.8267C1.39634 18.6637 1.47433 18.5118 1.58144 18.3814C1.68855 18.251 1.82231 18.1449 1.97375 18.0704L2.61376 17.712C2.83825 17.5698 3.01087 17.3589 3.106 17.1107C3.20113 16.8626 3.21369 16.5903 3.14182 16.3345C3.06995 16.0786 2.91749 15.8527 2.70706 15.6904C2.49664 15.5281 2.23947 15.438 1.97375 15.4334H1.22493C1.06215 15.4398 0.899818 15.4123 0.748204 15.3527C0.59659 15.2931 0.458985 15.2027 0.344095 15.0872C0.229206 14.9717 0.139529 14.8336 0.0807317 14.6817C0.0219344 14.5298 -0.00469918 14.3673 0.00250769 14.2045V12.9244C-0.00797946 12.764 0.0144998 12.6031 0.0685635 12.4516C0.122627 12.3002 0.207138 12.1614 0.316868 12.0439C0.426599 11.9264 0.559234 11.8326 0.706602 11.7682C0.853969 11.7039 1.01295 11.6705 1.17374 11.6699H1.96094C2.23048 11.6698 2.49258 11.5814 2.70724 11.4184C2.9219 11.2554 3.07735 11.0266 3.14987 10.767C3.22238 10.5074 3.20797 10.2311 3.10887 9.98046C3.00976 9.72978 2.83139 9.51841 2.60095 9.37857L1.96094 9.02013C1.81647 8.94617 1.68886 8.84316 1.58609 8.71755C1.48332 8.59193 1.40763 8.44643 1.36376 8.29017C1.31989 8.13391 1.3088 7.97026 1.33116 7.80951C1.35353 7.64875 1.40888 7.49436 1.49374 7.35602C1.72415 6.95279 1.97374 6.56236 2.19774 6.15913C2.36598 5.90235 2.62557 5.71913 2.92387 5.64663C3.22216 5.57413 3.53685 5.61777 3.80417 5.76869C4.00898 5.9031 4.22018 6.0183 4.44418 6.13991C4.67782 6.27761 4.95045 6.33417 5.21957 6.30074C5.48869 6.26732 5.73919 6.1458 5.93204 5.95513C6.12489 5.76446 6.24926 5.51534 6.28576 5.2466C6.32225 4.97786 6.26884 4.70459 6.13382 4.46939L5.7626 3.82934C5.68172 3.69598 5.62813 3.54789 5.60495 3.39364C5.58176 3.2394 5.58946 3.08208 5.62756 2.93084C5.66567 2.77959 5.73344 2.63742 5.82694 2.51258C5.92044 2.38774 6.03781 2.28272 6.17222 2.20361C6.56263 1.96679 6.96583 1.74279 7.36263 1.51877C7.49935 1.43697 7.65132 1.38391 7.80924 1.36286C7.96716 1.34181 8.12772 1.35321 8.28109 1.39634C8.43445 1.43948 8.57739 1.51345 8.70119 1.61374C8.82499 1.71403 8.92702 1.83851 9.00106 1.97959L9.37866 2.61964C9.5181 2.8487 9.72864 3.02586 9.97814 3.12409C10.2277 3.22233 10.5024 3.23624 10.7606 3.16372C11.0188 3.0912 11.2461 2.93624 11.408 2.72244C11.5698 2.50865 11.6573 2.24775 11.6571 1.97959C11.6571 1.73637 11.6571 1.49316 11.6571 1.24354C11.6478 1.07805 11.6736 0.912471 11.7327 0.757622C11.7918 0.602774 11.883 0.462138 12.0002 0.344935C12.1174 0.227731 12.258 0.136596 12.4128 0.0774729C12.5677 0.0183502 12.7332 -0.00742539 12.8987 0.0018421L13.5003 0.0274495ZM19.0812 13.4685C19.071 12.3633 18.7329 11.2861 18.1097 10.3734C17.4866 9.4606 16.6066 8.75341 15.5811 8.3414C14.5557 7.9294 13.431 7.83113 12.3496 8.05906C11.2682 8.28699 10.2789 8.83085 9.50693 9.62172C8.73498 10.4126 8.2152 11.4149 8.01346 12.5015C7.81173 13.5881 7.93712 14.7101 8.37374 15.7254C8.81037 16.7407 9.53858 17.6035 10.4661 18.2044C11.3935 18.8053 12.4785 19.1173 13.5835 19.1009C15.0559 19.0756 16.459 18.4708 17.4882 17.4175C18.5175 16.3642 19.0899 14.9476 19.0812 13.4749V13.4685Z",
                    fill: "#303030",
                    stroke: null,
                    strokeWidth: null,
                    strokeLinecap: null,
                    strokeLinejoin: null,
                }
            ]
        }
    },
])

// 處理Route Link的Active Class判別
const route = useRoute()
const router = useRouter()
const currentMatchesNames = computed(() => route.matched.map((s) => s.name))
const navLinkClass = (name) => ({
    ...getNavLinkClass(currentMatchesNames, name),
    ...{
        "d-flex": true,
        "align-items-center": true,
    }
})

// Dialog Ref
const postDialogRef = ref()
const draftDialogRef = ref()
const adminPostDialogRef = ref()
const missingEnvelopeDialogRef = ref()
const adminEnvelopeDialogRef = ref()
const loginDialogRef = ref()
const newNotifyToastRef = ref()
const dialogFunc = {
    togglePostDialogModal: ()=> postDialogRef.value.togglePostDialogModal(),
    toggleDraftDialogModal: ()=> draftDialogRef.value.toggleDraftDialogModal(),
    toggleAdminPostDialogModal: ()=> adminPostDialogRef.value.toggleAdminPostDialogModal(),
    toggleMissingEnvelopeDialogModal: ()=> missingEnvelopeDialogRef.value.toggleMissingEnvelopeDialogModal(),
    toggleAdminEnvelopeDialogModal: ()=> adminEnvelopeDialogRef.value.toggleAdminEnvelopeDialogModal(),
    toggleLoginDialogModal: () => loginDialogRef.value.toggleLoginDialogModal(),
    showNewNotifyToast: ()=> newNotifyToastRef.value.showNewNotifyToast(),
}

// user
const user = reactive(userJson)
const unread = (type) => {
    if (type==='myPost') {
        return [...posts].filter(post => post.user === user.userid && !post.is_draft).length
    } else {
        return [...posts].filter(post => post.user === user.userid && post.is_draft).length
    }
}

// Post
const posts = reactive(postsJson)                                           // 文章objects
const currentPost = ref({})                                                 // 目前點選的文章object reference
const setCurrentPost = (post) => currentPost.value = post                   // setter

const hotPosts = computed(() => [...posts].filter(post => !post.is_draft))  // 非草稿的文章objects
const myPosts = computed(() =>                                              // 自己非草稿的文章objects
    [...posts].filter(post => post.user === user.userid && !post.is_draft)
)
const myDrafts = computed(() =>                                             // 自己草稿的文章objects
    [...posts].filter(post => post.user === user.userid && post.is_draft)
)

// For post
const for01Posts = reactive(for01PostsJson)  // For 知識 文章objects
const for02Posts = reactive(for02PostsJson)  // For 靠背 文章objects
const for03Posts = reactive(for03PostsJson)  // For 告白 文章objects

// Admin Post
const adminPosts = reactive(adminPostsJson)                             // 管理員文章objects
const adminPostKey = ref()                                              // 管理員文章key
const setAdminPostKey = (key) => adminPostKey.value = key               // setter
const currentAdminPost = computed(() => adminPosts[adminPostKey.value]) // 目前的管理員文章object reference

// Notifications
const notifications = reactive(notificationsJson)
const addNotification = (notification) => notifications.unshift(notification)
const onNotifyClick = (methodName) => {
    if (methodName) dialogFunc[methodName]();
}

// 重繪貼文masonry方法，SetTimeout是因為要先等CSS的動畫跑完
const reDrawPosts = () => setTimeout(() => redrawVueMasonry('containerId'), 500)

// provide參數給child component使用（vue3才有，避免children太多需層層傳遞）
provide('reDrawPosts', reDrawPosts)
// dialog
provide('dialogFunc', dialogFunc)
// user
provide('user', user)
const toggleLoginStatus = () => {
    user.logged_in = !user.logged_in;
    if (!user.logged_in) router.push({ path: '/' });
}
provide('toggleLoginStatus', toggleLoginStatus)
// post
provide('setCurrentPost', setCurrentPost)
provide('setAdminPostKey', setAdminPostKey)
provide('hotPosts', hotPosts)
provide('myPosts', myPosts)
provide('myDrafts', myDrafts)
// for post
provide('for01Posts', for01Posts)
provide('for02Posts', for02Posts)
provide('for03Posts', for03Posts)
// notification
provide('addNotification', addNotification)
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

/* 變數區 */
:root {
    --light-green-color: #3c8585;
    --dark-green-color: #235252;
    --dark-black-color: #303030;
    --light-black-color: #6f6f6f;

    --dark-gray-color: #7a7a7a;
    --gray-color: #c4c4c4;
    --light-gray-color: #c9caca;

    --light2-color: #f6f6f6;
    --light1-color: #ececec;
}

/* 常用全域css定義區 */
.bg-light-green {
    background: var(--light-green-color) !important;
}

.bg-dark-green {
    background: var(--dark-green-color) !important;
}

.bg-light1 {
    background: var(--light1-color) !important;
}

.bg-light2 {
    background: var(--light2-color) !important;
}

.text-light-green {
    color: var(--light-green-color) !important;
}

.text-dark-green {
    color: var(--dark-green-color) !important;
}

.text-gray {
    color: var(--gray-color) !important;
}

.text-dark-black {
    color: var(--dark-black-color) !important;
}

.text-light-black {
    color: var(--light-black-color) !important;
}

.object-fit-cover {
    object-fit: cover;
}

.cursor-pointer {
    cursor: pointer;
}

.hash-tag {
    color: var(--light-green-color) !important;
}

/* 主要CSS區 */
#app {
    font-family: Roboto, "Noto Sans TC", Avenir, Helvetica, Arial, sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: var(--dark-black-color);
    overflow-x: hidden;
}

#main {
    margin-top: 65px !important;
}

#search-area {
    position: relative;
    width: 100%;
    max-width: 496px;

    &::before {
        content: "";
        position: absolute;
        left: 15px;
        top: 0;
        bottom: 0;
        width: 16px;
        background: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.9579 12.9937L9.41321 8.44896C10.1185 7.53722 10.5 6.42247 10.5 5.24998C10.5 3.84648 9.95221 2.53049 8.96171 1.53824C7.97121 0.545998 6.65172 0 5.24998 0C3.84823 0 2.52874 0.547748 1.53824 1.53824C0.545998 2.52874 0 3.84648 0 5.24998C0 6.65172 0.547748 7.97121 1.53824 8.96171C2.52874 9.95396 3.84648 10.5 5.24998 10.5C6.42247 10.5 7.53547 10.1185 8.44721 9.41496L12.9919 13.9579C13.0053 13.9713 13.0211 13.9819 13.0385 13.9891C13.0559 13.9963 13.0746 14 13.0934 14C13.1123 14 13.131 13.9963 13.1484 13.9891C13.1658 13.9819 13.1816 13.9713 13.1949 13.9579L13.9579 13.1967C13.9713 13.1834 13.9819 13.1675 13.9891 13.1501C13.9963 13.1327 14 13.114 14 13.0952C14 13.0763 13.9963 13.0577 13.9891 13.0403C13.9819 13.0228 13.9713 13.007 13.9579 12.9937ZM8.02197 8.02197C7.27997 8.76221 6.29647 9.16996 5.24998 9.16996C4.20348 9.16996 3.21999 8.76221 2.47799 8.02197C1.73774 7.27997 1.32999 6.29647 1.32999 5.24998C1.32999 4.20348 1.73774 3.21824 2.47799 2.47799C3.21999 1.73774 4.20348 1.32999 5.24998 1.32999C6.29647 1.32999 7.28172 1.73599 8.02197 2.47799C8.76221 3.21999 9.16996 4.20348 9.16996 5.24998C9.16996 6.29647 8.76221 7.28172 8.02197 8.02197Z' fill='%23C4C4C4'/%3E%3C/svg%3E%0A") center / contain no-repeat;
    }

    input {
        font-size: 14px;
        height: 27px;
        padding: 10px 35px;
        border: none;
        border-radius: 37px;

        &::placeholder {
            font-size: 14px;
            color: var(--gray-color) !important;
        }
    }
}

#login-btn {
    border-radius: 7px;
    padding: 4px 12px;
}

.navbar {
    .user-avatar {
        width: 42px;
        height: 42px;
        color: #fff;
        background: #83F3F3 !important;
        font-size: 18px;
        border: 3px solid#83F3F3;
    }

    .notify-badge {
        background-color: #FF4D00;
        top: 4px;
        left: 11px;
        padding: 4px;
    }

    .dropdown-menu-center {
        left: 50% !important;
        right: auto !important;
        transform: translate(-50%, 20px) !important;
    }
    .arrow-up {
        border-color: #94DBD7;
        background-color: #94DBD7;
        border-radius: 25px;
        padding-top: 22px;
        padding-bottom: 22px;

        &::before, &::after {
            content: '';
            position: absolute;
            display: inline-block;
        }

        &::before {
            top: -13px;
            left: 50%;
            transform: translate(-50%, 0) !important;
            border-left: 13px solid transparent;
            border-right: 13px solid transparent;
            border-bottom: 13px solid #94DBD7;
        }

        &::after {
            top: -12px;
            left: 50%;
            transform: translate(-50%, 0) !important;
            border-left: 12px solid transparent;
            border-right: 12px solid transparent;
            border-bottom: 12px solid #94DBD7;
        }

        .dropdown-item {
            background-color: #FFF;
            color: #000;
        }

        li::after {
            content: '';
            width: calc(100% - 60px);
            margin: 0 30px;
            position: absolute;
            display: block;
            border-bottom: 1px solid #DDDDDD;
        }
    }
}

#wrapper {
    height: calc(100vh - 65px);

    & > #sidebar {
        min-width: 250px;
        max-width: 250px;
        font-size: 20px;
        transition: all 0.2s;

        display: inline-block !important;
        vertical-align: top;
        height: 100% !important;
        overflow: auto;

        @media (max-width: 768px) {
            margin-left: -250px !important;
        }

        .side-navbar {
            .user-avatar {
                width: 90px;
                height: 90px;
                color: #fff;
                font-size: 18px;
            }

            .notify-badge {
                background-color: #FF4D00;
                top: 8px;
                left: 16px;
                padding: 4px;
            }

            .dropdown-menu-center {
                left: 0% !important;
                right: auto !important;
                transform: translate(-170px, 45px) !important;
            }
            .arrow-up {
                width: 220px;
                border-color: #94DBD7;
                background-color: #94DBD7;
                border-radius: 25px;
                padding-top: 22px;
                padding-bottom: 22px;

                &::before, &::after {
                    content: '';
                    position: absolute;
                    display: inline-block;
                }

                &::before {
                    top: -13px;
                    right: 0%;
                    transform: translate(-20px, 0) !important;
                    border-left: 13px solid transparent;
                    border-right: 13px solid transparent;
                    border-bottom: 13px solid #94DBD7;
                }

                &::after {
                    top: -12px;
                    right: 0%;
                    transform: translate(-20px, 0) !important;
                    border-left: 12px solid transparent;
                    border-right: 12px solid transparent;
                    border-bottom: 12px solid #94DBD7;
                }

                .dropdown-item {
                    background-color: #FFF;
                    color: #000;
                }

                li::after {
                    content: '';
                    width: calc(100% - 60px);
                    margin: 0 30px;
                    position: absolute;
                    display: block;
                    border-bottom: 1px solid #DDDDDD;
                }
            }
        }

        .nav-sub-title {
            font-size: 16px;
        }

        hr {
            border-top: 2px solid var(--dark-black-color);
        }

        a {
            font-weight: 400;
            color: var(--dark-black-color);

            &:hover, &:visited, &:link, &:active {
                color: var(--dark-black-color);
            }

            &.active {
                color: var(--light-green-color);
            }
        }

        .notify-badge {
            background-color: #FF4D00;
            top: 15px;
            left: 18px;
        }
    }

    #content {
        display: inline-block !important;
        vertical-align: top;
        height: 100% !important;
        overflow: auto;
    }
}

#sidebar-toggle:checked ~ #wrapper {
    & > #sidebar {
        margin-left: -250px;
    }

    @media (max-width: 768px) {
        width: calc(100vw + 250px) !important;

        & > #sidebar {
            margin-left: 0 !important;
        }
    }
}
</style>
