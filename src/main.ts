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
    .component('Menubar', Menubar)
    .component('InputText', InputText)
    .component('InputGroup', InputGroup)
    .component('Tag', Tag)
    .component('InputGroupAddon', InputGroupAddon)
    .component('Button', Button)
    .mount('#app')
