<script>
import ETadd from './ETadd.vue';
import ETitem from './ETitem.vue';
export default {
    data() {
        return {
            balance: 0,
            income: 0,
            expense: 0,
            page:0, 
            itemarr:[],
            
        }
    },
    created(){
        const savedTransactions = localStorage.getItem("itemarr");
        if(savedTransactions){
        this.itemarr = JSON.parse(savedTransactions);
        this.cal();
        }
    },
    methods: {
        pageon(){
            this.page=true;
        },
        pageoff(p){
            this.page=p.page;
            if(p.addtext != "" && p.addmoney!= "" &&p.state != ""){
                this.itemarr.push(p)
                // console.log(this.itemarr)
                localStorage.setItem('itemarr', JSON.stringify(this.itemarr));
                this.cal();
            }
        },
        cal(){
            this.income=0;
            this.expense=0;
            for(let i = 0 ; i<this.itemarr.length ; i++){
                if(this.itemarr[i].state=="income"){
                    this.income= this.income+Number(this.itemarr[i].addmoney)
                }
                if(this.itemarr[i].state=="expense"){
                    this.expense= this.expense+Number(this.itemarr[i].addmoney)
                }
            }
            this.balance=this.income-this.expense

        },
        cancal(a){
            this.page =a;
        }
    },
    components: {
        ETadd,
        ETitem,
    },
};
</script>

<template>
    <div class="left">
        <h1>Expense Tracker</h1>
        <h2>name</h2>
        <div class="balan">
            <h2>blance:</h2>
            <h2>{{ this.balance }}</h2>
        </div>
    </div>
    <div class="right">
        <div class="up">
            <div class="income">
                <h1>income:</h1>
                <h1>{{ this.income }}</h1>
            </div>
            <div class="expense">
                <h1>expense:</h1>
                <h1>{{ this.expense }}</h1>
            </div>
        </div>
        <div class="down">
            <button type="button" @click="pageon">add</button>
            <ETitem :props="itemarr" @get2="cal"/>
        </div>
    </div>
    <div class="additem" v-if="this.page==true">
        <!-- <ETadd :props="page" /> -->  
        <ETadd @get="pageoff" :props="page"/> 
        <!-- <ETadd @cancal="cancal"/> -->
    </div>
</template>

<style lang="scss" scoped>
.left {
    width: 30%;
    height: 100%;
    border: 1px solid black;
    background-color: rgb(243, 173, 173);
    color: rgb(0, 89, 255);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    .balan {
        width: 100%;
        display: flex;
        justify-content: center;
    }
}

.right {
    width: 70%;
    height: 100%;
    border: 1px solid black;

    .up {
        width: 100%;
        height: 25%;
        // border: 1px solid black;
        display: flex;

        .income {
            width: 50%;
            height: 100%;
            // border: 1px solid black;
            display: flex;
            justify-content: center;
            align-items: center;
            color: green;
        }

        .expense {
            width: 50%;
            height: 100%;
            // border: 1px solid black;
            display: flex;
            justify-content: center;
            align-items: center;
            color: red;
        }
    }

    .down {
        width: 100%;
        height: 75%;
        // border: 1px solid black;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: auto;
        button{
            width: 25%;
            height: 10%;
            background-color: rgb(243, 173, 173);
            color: rgb(0, 89, 255);
            font-size: 18pt;
            margin-top: 10px;
            border-radius: 20px;
        }
    }
}


</style>
