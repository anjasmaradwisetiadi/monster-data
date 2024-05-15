import { createApp } from 'vue';
import router from './routes/index';
import store from './store/index.js';
import App from './App.vue';
import axios from 'axios';
import {collectionUrl} from './utilize/collectionUrl.js'
const app = createApp(App);
require("./bootstrap");

app.use(router);
app.use(store);
app.mount('#app');

// Set the base URL for your API
// Replace with your Laravel backend URL
axios.defaults.baseURL = collectionUrl.baseUrlHead; 


// Enable CORS credentials
axios.defaults.withCredentials = false;
axios.defaults.contentType = '*';