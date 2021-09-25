<template>
    <div class="index">
        <div>{{JSON.stringify($route.params)}}</div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: '_id',
    async asyncData(context) {
        console.log('context', context.params);
        const res = await axios({method: 'GET', url: 'https://www.nuxtjs.cn/_nuxt/manifest.e7949f83.json'})
        return res.data;
    },
    data() {
        return {
            data: 'index-user'
        };
    },
}
</script>