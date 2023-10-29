import {defineStore} from 'pinia';

//輸入兩個參數，1.自建資料庫名稱，2.資料庫內容
export default defineStore("indexState",{
    //與 .vue 中 <script> 預設匯出概念相同，只是名稱不同
    //data
    state:() =>({
        location:1
    }),
    //computed
    getters:{
        //
        locationInfo(){
            return `現在位置${this.location}`
        }
    },
    //methods
    actions:{
        getLocation(){
            console.log(this.location);
        },
        setLocation(num){
            this.location = num ;
        }
    }
})