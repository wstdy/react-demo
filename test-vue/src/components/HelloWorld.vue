<template>
  <div class="hello">
    <li :key="item.id" v-for="item in list">{{item.name}}</li>
    <div>{{age}}</div>
    <button @click="change">test</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    list: Array,
    age: String
  },
  methods: {
    change() {
      this.age = '456'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
