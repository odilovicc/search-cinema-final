import '@/assets/global.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import App from './App.vue'

import Primevue from 'primevue/config'
import Aura from '@primevue/themes/aura'

import Menubar from 'primevue/menubar'
import InputText from 'primevue/inputtext'
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import Button from 'primevue/button'
import Tag from 'primevue/tag'
import Skeleton from 'primevue/skeleton'
import FilmCard from './components/ui/FilmCard/FilmCard.vue'
import Select from 'primevue/select'
import Paginator from 'primevue/paginator';
import ToastService from 'primevue/toastservice'
import Toast from 'primevue/toast'

import router from './router'
import store from './store'

createApp(App)
    .use(Primevue, {
        theme: {
            preset: Aura
        }
    })
    .use(store)
    .use(router)
    .use(ToastService)
    .component('Menubar', Menubar)
    .component('InputText', InputText)
    .component('InputGroup', InputGroup)
    .component('Tag', Tag)
    .component('InputGroupAddon', InputGroupAddon)
    .component('Button', Button)
    .component('Skeleton', Skeleton)
    .component('FilmCard', FilmCard)
    .component('Select', Select)
    .component('Paginator', Paginator)
    .component('Toast', Toast)
    .mount('#app')
