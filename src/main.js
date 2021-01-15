
import Vue from 'vue'


const app = new Vue({
  // el: "#app",
  template : "<div class='a b c'>{{name}}</div>",
  data: {
    name : "liuayong"
  }
})

console.log(app)
app.$mount();
console.log(app.$el)
document.getElementById('app').appendChild(app.$el)
