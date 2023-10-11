import {a} from "./test.js";  //匯入
import {b} from "./test.js";  //匯入
import {c,d} from "./test.js";  //可以一次匯入多個

//具名匯入
import x from "./test.js";

console.log("a="+a);
console.log("b="+b);
console.log("c="+c);
console.log("d="+d);
console.log(x);