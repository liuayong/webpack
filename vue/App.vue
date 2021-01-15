<template>
    <div class="app">
        <h2 class="title">Hello {{name}}</h2>
        <div class="wrap">
          你好啊  {{message}}
        </div>
    </div>
</template>

<script>
  export default {
    name: "App",
    data(){
      return {
        name : "App Conponent",
        message: "这是一个APP组件"
      }
    }
  }
</script>

<style scoped>
    .app {
        color: red;
    }
</style>