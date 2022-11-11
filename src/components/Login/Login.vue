<template>
  <div class="container-login">
    <div class="left"></div>
    <div class="right" v-if="state === 'login'">
      <p style="font-size: 35px; color: rgb(0, 0, 0); font-weight: 500; margin-top: 50px;">登录</p>
      <p style="font-size: 20px; color: rgb(0, 0, 0); margin-top: 10px; margin-left: 20px">Now ! Reading Time...</p>
      <form class="navlist">
        <div class="box">
          <input class="ipt" placeholder="账号" v-model="username" @blur="judgmentLoginUsername"/>
          <p class="tip" v-if="loginUsernameState === 0 ">账号格式错误</p>
        </div>
        <div class="box">
          <input class="ipt" placeholder="密码" v-model="password" type="password" @blur="judgmentLoginPassword"/>
          <p class="tip" v-if="loginPasswordState === 0 " >密码格式错误</p>
        </div>
        <div class="box">
          <input class="ipt-code" placeholder="验证码" v-model="inputcode" />
          <div class="code" @click="changeCode">
            {{ code }}
          </div>
        </div>
      </form>
      <h4 style="margin-left: 200px; color: rgb(149, 226, 107); margin-top: -18px; margin-bottom: 10px; cursor: pointer;" @click="stateToEnroll">欢迎加入我们，点此注册</h4>
      <button class="btnlogin" @click="Login">Login</button>
    </div>
    <div class="right" v-if="state === 'enroll'">
      <p style="font-size: 35px; color: rgb(0, 0, 0); font-weight: 500; margin-top: 50px;">注册</p>
      <p style="font-size: 20px; color: rgb(0, 0, 0); margin-top: 10px; margin-left: 20px">Hello! Reading Time...</p>
      <form class="navlist">
        <div class="box">
          <input class="ipt" placeholder="账号" v-model="username" @blur="judgmentEnrollUsername"/>
          <p class="tip" v-if="EnrollUsernameState === 0">账号格式错误</p>
        </div>
        <div class="box">
          <input class="ipt" placeholder="密码" v-model="password" type="password" @blur="judgmentEnrollPassword"/>
          <p class="tip" v-if="EnrollPasswordState === 0">密码格式错误</p>
        </div>
        <div class="box">
          <input class="ipt" placeholder="确认密码" v-model="surepassword" type="password" @blur="judgmentEnrollSurePassword"/>
          <p class="tip" v-if="EnrollSurePasswordState === 0">密码与上述不同</p>
        </div>
        <div class="box">
          <input class="ipt-code" placeholder="验证码" v-model="inputcode" />
          <div class="code" @click="changeCode">
            {{ code }}
          </div>
        </div>
      </form>
      <h4 style=" margin-left: 200px; color: rgb(149, 226, 107); margin-top: -18px; margin-bottom: 10px; cursor: pointer;" @click="stateToLogin">欢迎加入我们，点此登录</h4>
      <button class="btnlogin" @click="Enroll">Enroll</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      loginUsernameState: 2,
      EnrollUsernameState: 2,
      password: '',
      loginPasswordState: 2,
      EnrollPasswordState: 2,
      EnrollSurePasswordState: 2,
      surepassword: '',
      code: '',
      inputcode: '',
      state: 'login'
    }
  },
  methods: {
    changeCode() {
      let all = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
      let array = []
      for (let i = 0; i < 4; i++) {
        let index = parseInt(Math.random() * 35 + 0)
        let num = all[index]
        array.push(num)
      }
      this.code = array[0] + array[1] + array[2] + array[3]
    },
    judgmentLoginPassword() {
      if(this.password.length > 6) {
        this.loginPasswordState = 1
      }else{
        this.loginPasswordState = 0
      }
    },
    judgmentLoginUsername() {
      if(this.username.length > 6) {
        this.loginUsernameState = 1
      }else{
        this.loginUsernameState = 0
      }
    },
    judgmentEnrollUsername() {
      if(this.username.length > 6) {
        this.EnrollUsernameState = 1
      }else{
        this.EnrollUsernameState = 0
      }
    },
    judgmentEnrollPassword() {
      if(this.password.length > 6) {
        this.EnrollPasswordState = 1
      }else{
        this.EnrollPasswordState = 0
      }
    },
    judgmentEnrollSurePassword() {
      if(this.password === this.surepassword && this.surepassword !== '') {
        this.EnrollSurePasswordState = 1
      }else{
        this.EnrollSurePasswordState = 0
      }
    },
    stateToEnroll() {
      this.state = 'enroll'
      this.username = ''
      this.password = ''
      this.surepassword = ''
    },
    stateToLogin() {
      this.state = 'login'
      this.username = ''
      this.password = ''
      this.surepassword = ''
    },
    Login() {

    },
    Enroll() {

    }
  },
  mounted() {
    this.changeCode()
  }
}
</script>

<style lang="less" scoped>
.container-login {
  display: flex;
}
.left{
  width: 50%;
}
.right{
  width: 50%;
}
h4 {
  margin-right: 20px;
  line-height: 20px;
}
.tip {
  margin-left: 10px;
  margin-top: 10px;
  color: red;
}
.navlist {
  margin: 40px 0;
}
.box {
  margin-top: 30px;
  display: flex;
  height: 40px;
  width: 470px;
}
.ipt {
  height: 42px;
  width: 350px;
}
.ipt-code {
  height: 42px;
  width: 180px;
}
.code {
  margin-left: 20px;
  margin-top: 0px;
  font-size: 30px;
  line-height: 30px;
  padding-left: 20px;
  padding-top: 5px;
  height: 42px;
  width: 150px;
  border: 2px solid rgb(99, 96, 96);
  border-radius: 3px;
  cursor: pointer;
}
.btnlogin {
  height: 43px;
  width: 280px;
  color: white;
  background-color: #0085ff;
  border: none;
  margin-left: 20px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
