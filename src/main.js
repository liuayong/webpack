
import Vue from 'vue'




import App from "../vue/App.vue";

const app = new Vue({
  el: "#app",
  template : "<div class='template'> Hello {{name}} <App/> </div>",
  data: {
    name : "liuayong !!!"
  },
  components: {
    App,
  }
})
