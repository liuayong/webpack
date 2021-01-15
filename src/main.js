// 1.使用commonjs的模块化规范
const {add, mul} = require('./mathUtils.js')

console.log(add(20, 30));
console.log(mul(20, 30));

// 2.使用ES6的模块化的规范
import {name, age, height} from "./info";

console.log(name);
console.log(age);
console.log(height);


import * as obj from "./test"


// require('../css/normal.css')
import normal from '../css/normal.css'
const special = require('../css/special.less')






document.write("<div class='hello'> Hello Webpack !!! </div>");

import img from "../img/timg.jpg"
console.log(img)
let imgObj =  new Image();
imgObj.src = img ;

document.body.appendChild(imgObj)


let imgObj2 =  new Image();
let testImg = require("../img/test.jpg");
imgObj2.src = testImg;
console.log(testImg)
document.body.appendChild(imgObj2)




