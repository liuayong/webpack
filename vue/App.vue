<template>
    <div class="app">
        <h2 class="title">{{name}}</h2>
        <div class="wrap">
            {{message}}
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