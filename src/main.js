
import Vue from 'vue'


const App = {
  template : "<h2>{{name}}</h2>",
  data(){
    return {
      name : "我是APP组件"
    }
  }
}



const app = new Vue({
  el: "#app",
  template : "<div class='a b c'> Hello {{name}} <App/> </div>",
  data: {
    name : "liuayong"
  },
  components: {
    App,
  }
})
