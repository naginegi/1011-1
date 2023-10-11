//可以一次匯入多個
import {a} from "./test.js"; 
import {b} from "./test.js";  
import {c,d} from "./test.js";  

//具名匯入
import x from "./test.js";

console.log("a="+a);
console.log("b="+b);
console.log("c="+c);
console.log("d="+d);
console.log(x);