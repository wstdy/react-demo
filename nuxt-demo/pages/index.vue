<template>
    <div class="index">
        <div>{{data}}</div>
        <a href="/about">点击</a>
        ------
        <nuxt-link to="/about">点击</nuxt-link>
        ------
        <button @click="click">点击</button>
        <li>{{icons[0].sizes}}</li>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'index',
    async asyncData() {
        const res = await axios({method: 'GET', url: 'https://www.nuxtjs.cn/_nuxt/manifest.e7949f83.json'})
        return res.data;
    },
    data() {
        return {
            data: '我是首页'
        };
    },
    methods: {
        click() {
           this.$router.push('/about') 
        }
    }
}
</script>

<style scoped>
a{
    width: 20px;
    height: 20px;
}
</style>