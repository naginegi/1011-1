//具名匯出 可以有很多個
export const a =2 ; 
export const b ="123" ; 
export const c =4 ; 
export const d ="789" ; 

//預設匯出 只能有一個
//const arr = [1,2,3,4,5,6]
// const obj ={
//     name:"aaa",
//     number:777
// }
function fu(){
    console.log("test.js")
}
export default fu;