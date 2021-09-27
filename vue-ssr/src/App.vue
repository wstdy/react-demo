<template>
    <div id="app">
        <h1>{{meassge}}</h1>
        <div>
            <el-input type="text" v-model="meassge" placeholder=""></el-input>
        </div>
        <div>
            <button @click="click">点击</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
           meassge: 'hello world'
        };
    },
    methods: {
        click() {
            console.log(this.meassge);
        }
    }
}
</script>

<style>

</style>