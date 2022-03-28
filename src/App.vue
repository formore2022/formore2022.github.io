<template>
    <!-- 上方導航列 -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-main py-2 px-3">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
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
                    <input
                        class="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                </form>
                <button class="btn btn-outline-light" type="submit">Search</button>
            </div>
        </div>
    </nav>

    <!-- 主內容區 -->
    <div class="container-fluid">
        <div class="row flex-nowrap">
            <!-- 左側邊欄 -->
            <div class="d-none d-sm-block col-sm-auto sidebar text-white min-vh-100 bg-gray py-3">
                <ul class="nav flex-column align-items-start">
                    <li class="nav-item">
                        <router-link to="/hot" class="nav-link active">首頁</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/About" class="nav-link">About</router-link>
                    </li>
                </ul>
                <hr/>
                <ul class="nav flex-column align-items-start">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled">Disabled</a>
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
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

:root {
    --main-grean-color: #3C8585;
    --dark-black-color: #303030;
    --gray-color: #ECECEC;
    --light-gray-color: #C9CACA;
    --avatar-green-color: #235252;
    --content-text-color: #7A7A7A;
}

#app {
    font-family: Roboto, 'Noto Sans TC', Avenir, Helvetica, Arial, sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: var(--dark-black-color);
}

nav {
    padding: 30px;
}

.bg-main {
    background: var(--main-grean-color);
}

.bg-gray {
    background: var(--gray-color);
}

.sidebar {
    width: 200px !important;
    font-size: 20px;

    a {
        padding: 0.25rem 1rem;
        font-weight: bold;
        color: var(--dark-black-color);

        &.router-link-exact-active {
            color: var(--main-grean-color);
        }
    }

    hr {
        border-top: 2px solid var(--dark-black-color);
        opacity: 1;
    }
}
</style>
