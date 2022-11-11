<template>
  <Menu mode="horizontal" :theme="theme" active-name="1">
    <MenuItem name="1">
      <Icon type="ios-paper" />
      <router-link to="/home"> 首页 </router-link>
    </MenuItem>
    <MenuItem name="2">
      <Icon type="ios-people" />
      <router-link to="/recommend"> 推荐区 </router-link>
    </MenuItem>
    <Submenu name="3">
      <template #title>
        <Icon type="ios-stats" />
        <router-link to="/myself"> 个人资料区 </router-link>
      </template>
      <MenuGroup title="使用">
        <MenuItem name="3-1">新增和启动</MenuItem>
        <MenuItem name="3-2">活跃分析</MenuItem>
        <MenuItem name="3-3">时段分析</MenuItem>
      </MenuGroup>
      <MenuGroup title="留存">
        <MenuItem name="3-4">用户留存</MenuItem>
        <MenuItem name="3-5">流失用户</MenuItem>
      </MenuGroup>
    </Submenu>
    <MenuItem name="4">
      <Icon type="ios-construct" />
      定制主题
    </MenuItem>

    <div style="display: flex">

      <!-- <Form ref="formInline" :model="formInline" :rules="ruleInline" inline style="margin-top: 15px; margin-left: 100px;">
        <FormItem prop="user">
          <Input type="text" v-model="formInline.user" placeholder="Search">
            <template #prepend>
              <Icon type="ios-search"></Icon>
            </template>
          </Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formInline')">Go</Button>
        </FormItem>
      </Form> -->
      <div class="search">
        <input class="ipt" placeholder="Search" @blur="isShowBox = !isShowBox" @focus="isShowBox = !isShowBox">
        <div class="search-inside" v-if="isShowBox">

        </div>
      </div>

      <button class="btn" @click="goToSearch">
        Go
      </button>

      <Space size="large" wrap class="img">
        <!-- <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" /> -->
        <Avatar src="src\assets\picture\3.jpg"></Avatar>
      </Space>

      <el-dropdown class="dropdown">
        <span class="el-dropdown-link">
          <router-link to="/login">
            MyName
          </router-link>
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>MyName</el-dropdown-item>
            <el-dropdown-item>ChangeName</el-dropdown-item>
            <el-dropdown-item>Changepic</el-dropdown-item>
            <el-dropdown-item disabled>111</el-dropdown-item>
            <el-dropdown-item divided>Action 5</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </Menu>
  <br style="margin-bottom: 0;">
  <!-- <p>Change theme</p>
  <RadioGroup v-model="theme">
      <Radio label="light"></Radio>
      <Radio label="dark"></Radio>
      <Radio label="primary"></Radio>
  </RadioGroup> -->
</template>
<script>
export default {
  data() {
    return {
      theme: 'light',
      searchvalue: '',
      formInline: {
        user: ''
      },
      islogin: 0,
      isShowBox: false,
      // ruleInline: {
      //   user: [{ required: true, message: 'Please fill in the user name', trigger: 'blur' }]
      // }
    }
  },
  methods: {
    handleSubmit() {
      
    },
    goToSearch() {
      this.$router.push('/search')
    }
  }
}
</script>

<style lang="less" scoped>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
.search-inside{
  height: 200px;
  width: 200px;
  border: 1px solid black;
  margin-top: -20px;
  margin-left: 100px;
  background-color: rgb(255, 255, 255);
  z-index: 99999;
}
.ipt{
  height: 32px;
  width: 200px;
  margin-left: 100px;
  margin-top: 14px;
  padding-left: 5px;
}
.btn{
  height: 32px;
  width: 50.69px;
  margin-top: 14px;
  margin-left: 10px;
  border: none;
  border-radius: 4px;
  color: white;
  background-color: #0085ff;
  line-height: 10px;
  cursor: pointer;
}
.dropdown {
  padding-top: 25px;
  padding-left: 8px;
  cursor: pointer;
  position: fixed;
  top: 0px;
  right: 60px;
}
.img{
  /* margin-left: 500px;
  margin-top: -180px; */
  position: fixed;
  right: 150px;
  top: 0px;
}
.ivu-form-inline .ivu-form-item{
  padding-right: 0px;
}
</style>
