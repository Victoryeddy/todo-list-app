
window.__VUE_PROD_DEVTOOLS__ = false;

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { loadFonts } from './plugins/webfontloader'
import vuetify from './plugins/vuetify'
import store from './store'



loadFonts()

const pinia = createPinia()

createApp(App).use(pinia).use(vuetify).use(router).mount('#app')



// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'
// import vuetify from './plugins/vuetify'
// import { loadFonts } from './plugins/webfontloader'

// loadFonts()

// createApp(App)
//     .use(router)
//     .use(store)
//     .use(vuetify)
//     .mount('#app')
