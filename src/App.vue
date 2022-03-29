<template>
    <!-- 上方導航列 -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-main-green py-0">
        <div class="container-fluid">
            <a class="navbar-brand p-0" href="/"><img src="./assets/banner.png" height="65"/></a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div
                class="collapse navbar-collapse justify-content-between"
                id="navbarSupportedContent"
            >
                <form class="d-flex">
                    <labeL id="search-area">
                        <input
                            class="form-control me-2"
                            type="search"
                            placeholder="搜尋more貼文"
                        />
                    </labeL>
                </form>
                <button id="login-btn" class="btn bg-dark-green text-white me-5">登入</button>
            </div>
        </div>
    </nav>

    <!-- 主內容區 -->
    <div class="container-fluid">
        <div class="row flex-nowrap">
            <!-- 左側邊欄 -->
            <div class="d-none d-lg-block col-auto sidebar text-white min-vh-100 bg-main-gray py-3">
                <ul class="nav flex-column align-items-start">
                    <li class="nav-item">
                        <router-link
                            to="/hot"
                            class="d-flex align-items-center nav-link active"
                        >
                            <svg
                                width="23"
                                height="24"
                                viewBox="0 0 23 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12.5814 1.08927C12.1485 0.709876 11.5871 0.5 11.0051 0.5C10.4232 0.5 9.86182 0.709876 9.42894 1.08927L0.781421 8.66892C0.535553 8.8846 0.338927 9.1483 0.204305 9.44291C0.0696835 9.73753 7.57174e-05 10.0565 0 10.379V21.1994C0 21.8096 0.248475 22.3947 0.690764 22.8262C1.13305 23.2576 1.73292 23.5 2.35841 23.5H5.50297C6.12846 23.5 6.72833 23.2576 7.17062 22.8262C7.61291 22.3947 7.86138 21.8096 7.86138 21.1994V15.0645C7.86138 14.8611 7.94421 14.6661 8.09164 14.5223C8.23907 14.3785 8.43902 14.2977 8.64752 14.2977H13.3643C13.5728 14.2977 13.7728 14.3785 13.9202 14.5223C14.0677 14.6661 14.1505 14.8611 14.1505 15.0645V21.1994C14.1505 21.8096 14.399 22.3947 14.8413 22.8262C15.2835 23.2576 15.8834 23.5 16.5089 23.5H19.6535C20.2789 23.5 20.8788 23.2576 21.3211 22.8262C21.7634 22.3947 22.0119 21.8096 22.0119 21.1994V10.379C22.0118 10.0565 21.9422 9.73753 21.8076 9.44291C21.6729 9.1483 21.4763 8.8846 21.2304 8.66892L12.5829 1.08927H12.5814Z"
                                    fill="#3C8585"
                                />
                            </svg>
                            <span class="ms-2">首頁</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/About" class="d-flex align-items-center nav-link">
                            <svg
                                width="23"
                                height="24"
                                viewBox="0 0 23 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.5 0.5C9.22552 0.5 7.00211 1.17446 5.11095 2.4381C3.21978 3.70174 1.7458 5.49779 0.87539 7.59914C0.00498273 9.70049 -0.222756 12.0128 0.220974 14.2435C0.664704 16.4743 1.75997 18.5234 3.36828 20.1317C4.97658 21.74 7.02568 22.8353 9.25646 23.279C11.4872 23.7228 13.7995 23.495 15.9009 22.6246C18.0022 21.7542 19.7983 20.2802 21.0619 18.3891C22.3255 16.4979 23 14.2745 23 12C23 8.95001 21.7884 6.02494 19.6317 3.86827C17.4751 1.7116 14.55 0.5 11.5 0.5ZM10.4938 5.31562C10.4938 5.04875 10.5998 4.79281 10.7885 4.6041C10.9772 4.41539 11.2331 4.30937 11.5 4.30937C11.7669 4.30937 12.0228 4.41539 12.2115 4.6041C12.4002 4.79281 12.5063 5.04875 12.5063 5.31562V13.9406C12.5063 14.2075 12.4002 14.4634 12.2115 14.6521C12.0228 14.8409 11.7669 14.9469 11.5 14.9469C11.2331 14.9469 10.9772 14.8409 10.7885 14.6521C10.5998 14.4634 10.4938 14.2075 10.4938 13.9406V5.31562ZM11.5 19.5469C11.2441 19.5469 10.994 19.471 10.7812 19.3288C10.5685 19.1867 10.4027 18.9846 10.3047 18.7482C10.2068 18.5118 10.1812 18.2517 10.2311 18.0007C10.281 17.7498 10.4042 17.5192 10.5852 17.3383C10.7661 17.1574 10.9966 17.0341 11.2476 16.9842C11.4986 16.9343 11.7587 16.9599 11.9951 17.0579C12.2315 17.1558 12.4336 17.3216 12.5757 17.5344C12.7179 17.7471 12.7938 17.9972 12.7938 18.2531C12.7938 18.5962 12.6574 18.9253 12.4148 19.1679C12.1722 19.4106 11.8431 19.5469 11.5 19.5469Z"
                                    fill="#303030"
                                />
                            </svg>
                            <span class="ms-2">發文規定</span>
                        </router-link>
                    </li>
                </ul>

                <hr class="my-4" />

                <div class="text-start text-main-green font-sz-16 mt-2 mb-3 ps-3">
                    Formore精選版
                </div>

                <ul class="nav flex-column align-items-start">
                    <li class="nav-item">
                        <a class="d-flex align-items-center nav-link" href="#">
                            <svg
                                width="23"
                                height="20"
                                viewBox="0 0 31 27"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M26.1666 9.875V7.125C26.1666 5.6125 24.9666 4.375 23.4999 4.375H19.4999C19.4999 2.0925 17.7133 0.25 15.4999 0.25C13.2866 0.25 11.4999 2.0925 11.4999 4.375H7.49992C6.03325 4.375 4.83325 5.6125 4.83325 7.125V9.875C2.61992 9.875 0.833252 11.7175 0.833252 14C0.833252 16.2825 2.61992 18.125 4.83325 18.125V23.625C4.83325 25.1375 6.03325 26.375 7.49992 26.375H23.4999C24.9666 26.375 26.1666 25.1375 26.1666 23.625V18.125C28.3799 18.125 30.1666 16.2825 30.1666 14C30.1666 11.7175 28.3799 9.875 26.1666 9.875ZM23.4999 23.625H7.49992V7.125H23.4999V23.625ZM11.4999 15.375C10.3933 15.375 9.49992 14.4537 9.49992 13.3125C9.49992 12.1713 10.3933 11.25 11.4999 11.25C12.6066 11.25 13.4999 12.1713 13.4999 13.3125C13.4999 14.4537 12.6066 15.375 11.4999 15.375ZM21.4999 13.3125C21.4999 14.4537 20.6066 15.375 19.4999 15.375C18.3933 15.375 17.4999 14.4537 17.4999 13.3125C17.4999 12.1713 18.3933 11.25 19.4999 11.25C20.6066 11.25 21.4999 12.1713 21.4999 13.3125ZM10.1666 18.125H20.8333V20.875H10.1666V18.125Z"
                                    fill="#303030"
                                />
                            </svg>
                            <span class="ms-2">For 知識</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="d-flex align-items-center nav-link" href="#">
                            <svg
                                width="23"
                                height="21"
                                viewBox="0 0 28 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0.631836 14.8816C0.552734 14.2723 0.5 13.6527 0.5 13.023C0.5 7.48789 3.64824 2.66875 8.30996 0.114456L9.18008 1.88164V13.9523L8.21504 14.8816H0.631836ZM27.5 13.9523C27.5 14.8816 26.535 15.8109 25.5699 15.8109H17.8549C18.3348 17.6695 18.8199 19.523 18.8199 20.4523C18.8199 22.3109 17.8549 24.1645 17.375 24.6316C17.3645 24.6418 16.8951 25.0938 15.9301 25.0938C14.4852 25.0938 14.4852 23.7023 14.4852 23.7023C14.4852 23.677 14.0053 21.3816 14.0053 20.4523C14.0053 19.523 12.0752 15.8109 11.1102 14.8816L10.1451 14.4195V1.41953L11.1102 0.957424H21.715C23.6451 0.957424 24.6102 1.88672 24.6102 2.81602C24.6102 3.74531 23.6451 4.67461 22.6801 4.67461C24.6102 4.67461 25.5752 5.60391 25.5752 6.53321C25.5752 7.4625 24.6102 8.3918 23.6451 8.3918C25.5752 8.3918 26.5402 9.3211 26.5402 10.2504C26.5402 11.1797 25.5752 12.109 24.6102 12.109C26.535 12.0938 27.5 13.023 27.5 13.9523Z"
                                    fill="#303030"
                                />
                            </svg>
                            <span class="ms-2">For 靠背</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="d-flex align-items-center nav-link" href="#">
                            <svg
                                width="23"
                                height="21"
                                viewBox="0 0 27 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M13.9571 3.90545C9.51874 -2.95029 0.535645 0.784498 0.535645 8.25269C0.535645 13.8607 12.851 22.6332 13.9571 23.7739C15.0709 22.6332 26.7737 13.8607 26.7737 8.25269C26.7737 0.841117 18.4038 -2.95029 13.9571 3.90545V3.90545Z"
                                    fill="#303030"
                                />
                            </svg>
                            <span class="ms-2">For 告白</span>
                        </a>
                    </li>
                </ul>
            </div>

            <!-- 右側內容 -->
            <div class="col">
                <router-view />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

/* 變數區 */
:root {
    --main-grean-color: #3c8585;
    --dark-green-color: #235252;
    --dark-black-color: #303030;
    --main-gray-color: #ececec;
    --sub-gray-color: #c4c4c4;
    --light-gray-color: #c9caca;
    --content-text-color: #7a7a7a;
}

/* 常用全域css定義區 */
.bg-main-green {
    background: var(--main-grean-color) !important;
}

.bg-dark-green {
    background: var(--dark-green-color) !important;
}

.bg-main-gray {
    background: var(--main-gray-color) !important;
}

.text-main-green {
    color: var(--main-grean-color) !important;
}

.text-dark-green {
    color: var(--dark-green-color) !important;
}

.text-sub-gray {
    color: var(--sub-gray-color) !important;
}

.font-sz-16 {
    font-size: 16px;
}

/* 主要CSS區 */
#app {
    font-family: Roboto, "Noto Sans TC", Avenir, Helvetica, Arial, sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: var(--dark-black-color);
}

#search-area {
    position: relative;

    &::before {
        content: "";
        position: absolute;
        left: 10px;
        top: 0;
        bottom: 0;
        width: 20px;
        background: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.9579 12.9937L9.41321 8.44896C10.1185 7.53722 10.5 6.42247 10.5 5.24998C10.5 3.84648 9.95221 2.53049 8.96171 1.53824C7.97121 0.545998 6.65172 0 5.24998 0C3.84823 0 2.52874 0.547748 1.53824 1.53824C0.545998 2.52874 0 3.84648 0 5.24998C0 6.65172 0.547748 7.97121 1.53824 8.96171C2.52874 9.95396 3.84648 10.5 5.24998 10.5C6.42247 10.5 7.53547 10.1185 8.44721 9.41496L12.9919 13.9579C13.0053 13.9713 13.0211 13.9819 13.0385 13.9891C13.0559 13.9963 13.0746 14 13.0934 14C13.1123 14 13.131 13.9963 13.1484 13.9891C13.1658 13.9819 13.1816 13.9713 13.1949 13.9579L13.9579 13.1967C13.9713 13.1834 13.9819 13.1675 13.9891 13.1501C13.9963 13.1327 14 13.114 14 13.0952C14 13.0763 13.9963 13.0577 13.9891 13.0403C13.9819 13.0228 13.9713 13.007 13.9579 12.9937ZM8.02197 8.02197C7.27997 8.76221 6.29647 9.16996 5.24998 9.16996C4.20348 9.16996 3.21999 8.76221 2.47799 8.02197C1.73774 7.27997 1.32999 6.29647 1.32999 5.24998C1.32999 4.20348 1.73774 3.21824 2.47799 2.47799C3.21999 1.73774 4.20348 1.32999 5.24998 1.32999C6.29647 1.32999 7.28172 1.73599 8.02197 2.47799C8.76221 3.21999 9.16996 4.20348 9.16996 5.24998C9.16996 6.29647 8.76221 7.28172 8.02197 8.02197Z' fill='%23C4C4C4'/%3E%3C/svg%3E%0A") center / contain no-repeat;
    }

    input {
        padding: 10px 35px;

        &::placeholder {
            color: var(--sub-gray-color) !important;
        }
    }
}

#login-btn {
    border-radius: 7px;
    padding: 4px 12px;
}

.sidebar {
    width: 240px !important;
    font-size: 20px;

    a {
        font-weight: 400;
        color: var(--dark-black-color);

        &.router-link-exact-active {
            color: var(--main-grean-color);
        }
    }

    hr {
        border-top: 2px solid var(--dark-black-color);
        opacity: 0.75;
    }
}
</style>
