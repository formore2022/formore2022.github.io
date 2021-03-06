import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { VueMasonryPlugin } from 'vue-masonry';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";


library.add(fas, far, fab);

createApp(App).component('font-awesome-icon', FontAwesomeIcon)
              .use(store)
              .use(router)
              .use(VueMasonryPlugin)
              .mount('#app')
