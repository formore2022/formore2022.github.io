<template>
    <div ref="thisModalRef" class="modal fade" id="draftDialogModal" tabindex="-1">
        <div class="modal-dialog modal-lg">
            <div v-if="post!=null" class="modal-content border-0 px-4 bg-light2">
                <div class="modal-header border-0 d-block">
                    <div class="row flex-nowrap align-items-center p-0 px-sm-4 mt-5">
                        <!-- Avatar欄 -->
                        <div class="col-auto">
                            <div class="avatar rounded-circle d-flex justify-content-center align-items-center">
                                {{ post?.user ? post.user[0] : '' }}
                            </div>
                        </div>
                        <!-- 系名．ID欄．日期欄 -->
                        <div class="col text-start">
                            <PostHeaderInfo :department="post?.department" :user="post?.user" :date_ago="post?.date_ago" />
                        </div>
                        <!-- 關閉鈕 -->
                        <div class="col-auto btn-close-wrapper">
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                    </div>
                </div>
                <div class="modal-body">
                    <input id="title-input" class="form-control" placeholder="標題" v-model="post.title" />
                    <textarea ref="contentInputRef" id="content-input" class="form-control mt-4" placeholder="文章內容" v-model="content" @input="adjustHeight"/>
                </div>
                <div class="modal-footer d-block border-0 bg-light2">
                    <!-- 按鈕區 -->
                    <div class="row align-items-center mt-1">
                        <div class="col-auto ps-0">
                            <div class="row mx-auto justify-content-between gx-2 gx-lg-3">
                                <div class="col-auto d-flex justify-content-center align-items-center">
                                    <svg width="28" height="28" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.1695 0.00033737C20.468 -0.0273704 24.6015 1.65263 27.6606 4.67075C30.7197 7.68887 32.4539 11.7979 32.4816 16.0939C32.5093 20.3898 30.8283 24.5209 27.8084 27.5782C24.7886 30.6355 20.6771 32.3686 16.3786 32.3963C7.3792 32.4343 0.0332988 25.2732 3.80498e-05 16.4548C-0.0189681 7.26593 7.0846 0.0288299 16.1695 0.00033737ZM30.1106 16.1983C30.1085 13.4413 29.2863 10.7471 27.7485 8.45814C26.2107 6.16919 24.0267 4.3888 21.4741 3.34323C18.9215 2.29767 16.1156 2.03413 13.4127 2.5861C10.7099 3.13807 8.23229 4.48063 6.29473 6.44318C4.35717 8.40572 3.04714 10.8997 2.53111 13.608C2.01508 16.3164 2.31636 19.117 3.39665 21.6539C4.47694 24.1907 6.28747 26.3493 8.59817 27.8554C10.9089 29.3615 13.6154 30.147 16.3739 30.1122C20.0396 30.0771 23.5427 28.5945 26.1188 25.9878C28.695 23.3812 30.135 19.8621 30.1248 16.1983H30.1106Z" fill="#303030"/>
                                        <path d="M15.3803 25.382C13.3751 25.3441 10.8425 24.456 8.62833 22.6753C8.00587 22.1719 7.58774 21.5735 8.15317 20.8422C8.7186 20.1109 9.39332 20.3674 10.0538 20.8422C13.9548 23.8529 18.4545 23.8529 22.3413 20.8422C22.9922 20.3436 23.6574 20.1014 24.2419 20.8185C24.8263 21.5356 24.4129 22.1386 23.7952 22.6563C21.7378 24.3801 18.9439 25.3915 15.3803 25.382Z" fill="#303030"/>
                                        <path d="M10.6208 15.6995C10.1673 15.6919 9.72631 15.5499 9.3537 15.2915C8.98108 15.0331 8.69363 14.6699 8.52777 14.248C8.36192 13.8262 8.32513 13.3646 8.42207 12.9218C8.519 12.479 8.7453 12.0749 9.07227 11.7608C9.39924 11.4467 9.81216 11.2367 10.2587 11.1574C10.7052 11.0781 11.1653 11.1331 11.5805 11.3154C11.9958 11.4977 12.3475 11.7991 12.5911 12.1814C12.8347 12.5637 12.9593 13.0097 12.949 13.4629C12.9441 13.7628 12.8799 14.0588 12.76 14.3339C12.6401 14.6089 12.467 14.8575 12.2506 15.0654C12.0342 15.2733 11.7788 15.4363 11.4991 15.5452C11.2194 15.654 10.9209 15.7065 10.6208 15.6995Z" fill="#303030"/>
                                        <path d="M21.7815 15.6994C21.3277 15.6984 20.8844 15.5627 20.5079 15.3096C20.1314 15.0565 19.8387 14.6972 19.6668 14.2775C19.4949 13.8578 19.4516 13.3965 19.5425 12.9522C19.6333 12.5079 19.8542 12.1006 20.177 11.7819C20.4999 11.4632 20.9102 11.2476 21.3559 11.1624C21.8016 11.0771 22.2625 11.1261 22.6803 11.3032C23.0981 11.4802 23.4538 11.7773 23.7024 12.1567C23.951 12.5361 24.0812 12.9807 24.0765 13.4342C24.0714 14.0384 23.8271 14.6159 23.397 15.0404C22.9669 15.465 22.386 15.7019 21.7815 15.6994Z" fill="#303030"/>
                                    </svg>
                                </div>
                                <div class="col-auto d-flex justify-content-center align-items-center">
                                    <svg width="28" height="23" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.0163 27.9276H3.29245C1.60527 27.9276 0.820181 27.1453 0.816406 25.4629V2.46844C0.816406 0.786104 1.60149 0 3.28489 0H30.7401C32.4273 0 33.2124 0.782306 33.2124 2.46465C33.2124 10.1282 33.2124 17.7918 33.2124 25.4553C33.2124 27.1415 32.4236 27.9238 30.7439 27.9276H17.0163ZM30.8911 22.1438C30.8911 15.7601 30.8911 9.58895 30.8911 3.41785C30.8911 2.61275 30.5137 2.30894 29.5965 2.30894C21.2147 2.30894 12.8317 2.30894 4.44743 2.30894C3.45097 2.30894 3.13014 2.63933 3.13014 3.6495C3.13014 9.54844 3.13014 15.4461 3.13014 21.3425C3.13014 21.5362 3.16789 21.7223 3.20563 22.0603C6.22518 18.4146 9.10885 14.898 12.0114 11.3814C12.9852 10.2004 13.8986 10.1586 14.9555 11.2865C16.118 12.5321 17.2541 13.8043 18.4091 15.0537C19.364 16.0829 19.8169 16.1018 20.904 15.1904C21.1984 14.9436 21.4815 14.6815 21.7834 14.4309C22.6931 13.7056 23.1422 13.7435 23.9537 14.617C24.6633 15.3765 25.3654 16.1588 26.0749 16.9221L30.8911 22.1438Z" fill="#303030"/>
                                        <path d="M23.4297 11.7818C23.0027 11.7902 22.5784 11.7116 22.183 11.5506C21.7876 11.3896 21.4295 11.1497 21.1306 10.8456C20.8317 10.5416 20.5984 10.1798 20.4451 9.78257C20.2917 9.38534 20.2216 8.96104 20.2389 8.53578C20.2388 8.11506 20.3232 7.69858 20.4871 7.31088C20.6511 6.92318 20.8913 6.57212 21.1936 6.2784C21.4959 5.98469 21.8542 5.75426 22.2473 5.6007C22.6404 5.44715 23.0604 5.37358 23.4824 5.38433C24.3301 5.40269 25.1366 5.7521 25.7282 6.35729C26.3197 6.96248 26.6491 7.775 26.6452 8.61982C26.6438 9.03821 26.5594 9.45221 26.3968 9.83796C26.2342 10.2237 25.9966 10.5736 25.6978 10.8675C25.3989 11.1614 25.0446 11.3935 24.6554 11.5504C24.2662 11.7073 23.8496 11.7859 23.4297 11.7818Z" fill="#303030"/>
                                    </svg>
                                </div>
                                <div class="col-auto d-flex justify-content-center align-items-center">
                                    <svg width="28" height="23" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.8275 0H29.7545C31.7192 0 32.993 1.37407 32.9975 3.6082C33.0184 10.3937 33.0184 17.1792 32.9975 23.9648C32.9975 26.148 31.7057 27.5272 29.7949 27.5272H3.87361C1.90451 27.5272 0.635129 26.1429 0.630644 23.9139C0.612702 17.1283 0.612702 10.3513 0.630644 3.58274C0.630644 1.42495 1.92694 0.0203454 3.83325 0.0203454L16.8275 0ZM24.9013 25.2218V2.32065H8.72685V25.2218H24.9013ZM31.0105 4.5853V3.50641C31.0248 3.35264 31.0108 3.19717 30.9693 3.04988C30.9278 2.9026 30.8597 2.76673 30.7695 2.65089C30.6792 2.53506 30.5686 2.44181 30.4449 2.37707C30.3211 2.31233 30.1868 2.27752 30.0506 2.27485C29.3457 2.21887 28.6383 2.21887 27.9335 2.27485C27.7974 2.27603 27.663 2.30841 27.5383 2.37003C27.4135 2.43166 27.3011 2.52125 27.2077 2.63344C27.1142 2.74562 27.0418 2.87807 26.9946 3.02284C26.9474 3.16761 26.9265 3.32171 26.9332 3.47588C26.9108 3.80158 26.9332 4.13747 26.9332 4.46826C26.9332 6.76856 27.0184 6.86524 29.0144 6.86524C31.0104 6.86524 31.0105 6.79908 31.0105 4.5853ZM4.7393 6.87034H5.32689C6.41685 6.87034 6.7398 6.48865 6.74428 5.21637C6.74428 4.70745 6.74428 4.168 6.74428 3.63873C6.71737 2.70742 6.34958 2.2901 5.51977 2.24939C5.07123 2.24939 4.59577 2.24939 4.12929 2.24939C2.96307 2.24939 2.66254 2.60564 2.66254 3.92882V4.50897C2.63563 6.83471 2.66704 6.87034 4.71688 6.87034H4.7393ZM4.7393 20.6517H4.00817C2.97652 20.6517 2.66254 21.0181 2.66254 22.1785C2.66254 22.7586 2.66254 23.3388 2.66254 23.919C2.66254 24.7841 3.00792 25.1963 3.77044 25.2472C4.32664 25.2879 4.8918 25.2778 5.45248 25.2472C6.34956 25.2167 6.72635 24.7943 6.74877 23.7663C6.74877 23.4864 6.74877 23.2116 6.74877 22.9317C6.72186 20.7739 6.61869 20.6517 4.71239 20.6517H4.7393ZM31.0105 22.9825V22.153C31.0105 21.0283 30.6875 20.667 29.7052 20.6517C29.1939 20.6517 28.6825 20.6517 28.1667 20.6517C27.2965 20.6517 26.9467 21.0741 26.9287 22.0818C26.9287 22.5907 26.9287 23.1352 26.9287 23.6594C26.9287 24.8604 27.2786 25.2472 28.3327 25.2727C28.5524 25.2727 28.7812 25.2727 28.992 25.2727C30.8759 25.2777 31.0105 25.1505 31.0105 22.9825ZM2.63563 13.6796C2.63563 13.9849 2.63563 14.2903 2.63563 14.5906C2.63563 15.6695 2.9541 16.041 3.90052 16.0664C4.48363 16.0664 5.07122 16.0664 5.65433 16.0664C5.79627 16.0723 5.93773 16.0446 6.0697 15.985C6.20168 15.9254 6.32127 15.8353 6.42085 15.7204C6.52044 15.6055 6.59784 15.4683 6.64812 15.3176C6.6984 15.1669 6.72045 15.0059 6.71288 14.845C6.74428 14.1274 6.74428 13.4048 6.71288 12.6872C6.71944 12.5193 6.69406 12.3518 6.63846 12.1961C6.58286 12.0403 6.49837 11.9 6.3907 11.7846C6.28303 11.6692 6.15472 11.5814 6.0145 11.5273C5.87428 11.4732 5.72542 11.4539 5.57807 11.4709C4.99496 11.4455 4.40739 11.4455 3.82428 11.4709C2.96756 11.5065 2.64909 11.8933 2.63563 12.8603C2.63115 13.1249 2.63563 13.4048 2.63563 13.6796ZM30.988 13.6796V13.018C30.988 11.8017 30.6785 11.4607 29.5886 11.4455C29.14 11.4455 28.6601 11.4455 28.1981 11.4455C27.2696 11.476 26.9242 11.873 26.9063 12.9111C26.9063 13.186 26.9063 13.4659 26.9063 13.7407C26.9063 15.9239 27.0274 16.0613 28.9202 16.0613C30.9521 16.0715 31.0105 16.0308 31.0105 13.6847L30.988 13.6796Z" fill="#303030"/>
                                        <path d="M11.7463 13.7819C11.7463 12.3417 11.7463 10.9015 11.7463 9.45618C11.7463 8.23478 12.4326 7.73096 13.3925 8.26532C15.9895 9.72081 18.5866 11.1865 21.1612 12.698C21.3317 12.8104 21.4783 12.9639 21.5907 13.1477C21.7031 13.3315 21.7785 13.5411 21.8116 13.7616C21.785 13.984 21.7137 14.1964 21.6033 14.3826C21.4928 14.5688 21.3462 14.7237 21.1747 14.8354C18.5597 16.3621 15.9222 17.8634 13.2758 19.3393C12.4685 19.7922 11.7642 19.263 11.7463 18.1942C11.7239 16.7133 11.7463 15.2425 11.7463 13.7819Z" fill="#303030"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="col pe-0 text-end">
                            <button
                                id="send-btn"
                                class="btn bg-light-green text-white"
                                @click="send"
                            >送出</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// 引入component進行使用
import PostHeaderInfo from './PostHeaderInfo.vue'
import PostContent from './PostContent.vue'

export default {
    components: {
        PostHeaderInfo,
        PostContent,
    }
};
</script>

<script setup>
import { ref, computed, inject, onMounted } from 'vue';
import { parseDraft, adjustMultipleModalsLayer } from '@/common-functions.js';
import { Modal } from 'bootstrap';

// 讀入parent傳進來的參數
const props = defineProps(['post'])
const user = inject('user')
const addNotification = inject('addNotification')

// 定義參數
const thisModalRef = ref()
const contentInputRef = ref()
const content = computed(() => parseDraft(props.post?.content))

// 定義textarea適應高度
const adjustHeight = (e) => {
    const el = e.target;
    el.style.height = 'auto';
    el.style.height = `${el.scrollHeight}px`;
}

// 發送鈕
const send = () => {
    props.post.is_draft = false;
    user.notifications.myPost = true;
    toggleDraftDialogModal();
}

// 定義modal可被呼叫的方法，並Expose給父元素
let thisModal;
onMounted(() => { 
    thisModal = new Modal(thisModalRef.value, {}) 
    thisModalRef.value.addEventListener('hidden.bs.modal', () => {
        if (!user?.adminEnvelopeIsOpened) {
            user.notifications.main = true;
            user.adminEnvelopeIsOpened = true;
            addNotification({
                "content": "你有新訊息！",
                "click": "toggleAdminEnvelopeDialogModal",
                "icon": {
                    "width": 21,
                    "height": 20,
                    "viewBox": "0 0 512 512",
                    "fill": "none",
                    "paths": [
                        {
                            "d": "M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z",
                            "fill": "#303030",
                            "stroke": null,
                            "strokeWidth": null,
                            "strokeLinecap": null,
                            "strokeLinejoin": null
                        }
                    ]
                }
            })
        }
    })
})
const toggleDraftDialogModal = () => {
    thisModal.toggle();
    adjustMultipleModalsLayer();
    setTimeout(()=>{
        contentInputRef.value.dispatchEvent(new Event('input', {bubbles:true}));
    }, 300)
}
defineExpose({ toggleDraftDialogModal })
</script>

<style scoped lang="scss">
.modal-content {
    border-radius: 20px !important;

    .modal-footer {
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }

    .avatar {
        width: 60px;
        height: 60px;
        color: #fff;
        background: var(--light-green-color) !important;
        font-size: 18px;
    }

    .btn-close-wrapper {
        margin-top: calc(-3rem);
        width: 90px;
        height: 115px;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: end;
        padding-right: 0;
        z-index: 999;

        @media (max-width: 480px) {
            width: auto !important;
        }

        .btn-close {
            color: var(--dark-gray-color) !important;
            opacity: 1;
            background: transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%237A7A7A'%3E%3Cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3E%3C/svg%3E") center/1em auto no-repeat;
            margin-top: 1rem;
        }
    }
}

#title-input {
    font-size: 30px;
    padding: 10px 10px 10px 15px;
    border: none;
    border-radius: 10px;
    color: #000 !important;

    &::placeholder {
        font-size: 30px;
        color: var(--dark-gray-color) !important;
    }
}

#content-input {
    font-size: 18px;
    padding: 10px 10px 10px 15px;
    border: none;
    border-radius: 10px;
    line-height: 40px;
    color: var(--dark-gray-color) !important;

    &::placeholder {
        font-size: 18px;
        color: var(--dark-gray-color) !important;
    }
}

#send-btn {
    font-size: 17px;
    border-radius: 10px;
    padding: 4px 20px;
}
</style>