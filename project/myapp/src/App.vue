<template>
  <div>

    <div style="display: flex;justify-content: center">

      <div>
        用户名:
      </div>
      <el-input v-model="username" label="用户名" class="inputClass" placeholder="jeecg"></el-input>
    </div>

    <div style="display: flex;justify-content: center">
      <div>
        密码:
      </div>
      <el-input v-model="password" class="inputClass" placeholder="123456"></el-input>
    </div>
    <div style="display: flex;justify-content: center">
      <div>
        验证码:
      </div>
      <el-input v-model="captcha" class="inputClass" placeholder="请输入内容"></el-input>
      &nbsp;&nbsp;&nbsp;
      <el-image :src="captchaImage"></el-image>
      <el-button type="primary" style="margin-left: 30px" @click="handlerCaptcha">切换验证码</el-button>
    </div>

    <div style="display: flex;justify-content: center">
      <el-button type="primary" @click="handlerLogin" style="width: 300px">提交</el-button>
    </div>

    <router-view></router-view>


  </div>

</template>
<script>
import axios from 'axios'
import Vue from 'vue';

export default {
  data() {
    return {
      input: '',
      username: '',
      password: '',
      captcha: '',
      captchaImage: '',
      currdatetime: ''
    }
  },
  methods: {
    handlerLogin: function () {

      let url = "https://api.boot.jeecg.com/sys/login";
      console.log("输入的验证码为:" + this.captcha);
      axios.post(url, {
        username: this.username,
        password: this.password,
        captcha: this.captcha,
        checkKey: this.currdatetime
      }).then((result) => {

        console.log("返回内容", result.data.success);

        if (result.data.success) {
          this.$alert("登录成功，跳转到登录成功页面!");
          //this.$router.push("/home");
          console.log("登录成功获取的token为:\n" + result.data.result.token);

          Vue.ls.set("Access-Token", result.data.result.token)


        } else {
          this.$alert("登录失败，错误信息为：" + result.data.message + "");
        }

      }).catch(err => {
        console.log(err);
      });
    },
    handlerCaptcha: function () {
      this.changeCaptcha();
    },
    changeCaptcha: function () {
      this.currdatetime = new Date().getTime();
      axios.get(`http://api.boot.jeecg.com/sys/randomImage/${this.currdatetime}`).then((result) => {
        console.log("加载的验证码信息为:\n", result.data.result);
        this.captchaImage = result.data.result;
      }).catch(error => {
        console.log(error);
      })
    }
  },
  created() {
    this.changeCaptcha();
  }
}

</script>
<style>
.inputClass {
  width: 300px;
  height: 50px;
  text-align: center;
}


</style>