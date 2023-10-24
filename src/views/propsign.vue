<script>
// import {RouterLink,RouterView} from 'vue-router'
import child from "../components/child.vue";
export default {
    data() {
        return {
            obj: {
                name: "A",
                age: 55,
                email: "asd@zxc.com",
            },
            sex: "",
            page: 1,
            creaarr: [
                {
                    title: "name",
                    type: "text",
                    inpclass: "na inp",
                    placeholder: "請輸入名字",
                },
                {
                    title: "phone",
                    type: "text",
                    inpclass: "ph inp",
                    placeholder: "請輸入電話號碼",
                    data: "phonedata",
                },
                {
                    title: "email",
                    type: "text",
                    inpclass: "em inp",
                    placeholder: "請輸入信箱",
                },
                {
                    title: "address",
                    type: "text",
                    inpclass: "add inp",
                    placeholder: "請輸入地址",
                },
                {
                    title: "school",
                    type: "text",
                    inpclass: "sch inp",
                    placeholder: "請輸入畢業學校",
                },
                {
                    title: "interest",
                    type: "text",
                    inpclass: "int inp",
                    placeholder: "請輸入興趣",
                },
            ],
            keyin: [

            ],
            dataname: "",
            // phonedata="",
            task: {
                name: "",
            }
        };
    },
    methods: {
        complete() {
            // console.log(this.creaarr)
            // console.log(this.keyin);
            this.openshow2();
        },
        check() {
            this.openshow1();
        },
        openshow1() {
            this.page = 1;
        },

        openshow2() {
            this.page = 2;
        },

    },
    components: {
        child,
    },
};
</script>
<!-- <template>
  <div>
    <h2>任务列表</h2>
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        <input type="text" :value="task.name" @input="updateTaskName(index, $event)" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        { name: '任务1' },
        { name: '任务2' },
        { name: '任务3' },
      ],
    };
  },
  methods: {
    updateTaskName(index, event) {
      this.tasks[index].name = event.target.value;
    },
  },
};
</script>
 -->
<template>
    <div class="area">
        <div class="show a" v-if="page == 1">
            <h1>sign up</h1>

            <div class="divclass" v-for="(i, index) in creaarr" :key="index">
                <p>{{ i.title }}</p>
                <input :type="i.type" :class="i.inpclass" :placeholder="i.placeholder" v-model="keyin[index]" />
            </div>
            <!-- <div class="name">
                <p>name</p>
                <input type="text" class="na inp">
            </div>
            <div class="phone">
                <p>phone</p>
                <input type="number" class="ph inp">
            </div>
            <div class="email">
                <p>email</p>
                <input type="text" class="em inp">
            </div>
            <div class="address">
                <p>address</p>
                <input type="text" class="add inp">
            </div>
            <div class="school">
                <p>school</p>
                <input type="text" class="sch inp">
            </div>
            <div class="interest">
                <p>interest</p>
                <input type="text" class="int inp">
            </div> -->
            <div class="sex">
                <!-- <p>school</p> -->
                <input type="radio" name="" id="" value="man" v-model="this.sex" />
                <label for="">man</label>
                <div class="space"></div>
                <input type="radio" name="" id="" value="women" v-model="this.sex" />
                <label for="">women</label>
                <!-- <p>{{ this.sex }}</p> -->
            </div>
            <button type="button" @click="complete">complete</button>
        </div>
        <div class="show b" v-if="this.page == 2">
            <p>name:{{ this.keyin[0] }}</p>
            <p>phone:{{ this.keyin[1] }}</p>
            <p>email:{{ this.keyin[2] }}</p>
            <p>address:{{ this.keyin[3] }}</p>
            <p>school:{{ this.keyin[4] }}</p>
            <p>interest:{{ this.keyin[5] }}</p>
            <p>sex:{{ this.sex }}</p>
            <!-- <p>{{ this.keyin }}</p> -->
            <button type="button" @click="check">check</button>
        </div>
    </div>
    <!-- <child :props="obj" /> -->
</template>

<style lang="scss" scoped>
.area {
    width: 60%;
    height: 60%;

    .show {
        width: 100%;
        height: 125%;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        align-items: center;
        // padding-top: 15px;

        .divclass {
            width: 50%;
        }

        .inp {
            width: 100%;
            margin-bottom: 10px;
        }

        .int {
            height: 70%;
            margin-bottom: 15px;
            padding-bottom: 80px;
        }

        .sex {
            width: 50%;
            display: flex;
            justify-content: center;
            margin-bottom: 15px;

            .space {
                width: 5%;
            }
        }
    }
    .b{
        font-size: 18pt;
    }
}
</style>
