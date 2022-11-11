<template>
  <h5>图书分类</h5>
  <div class="box">
    <div class="btn">
      <button v-for="item in classify" @click="changeClassify(item)">{{ item }}</button>
    </div>
    <div class="btn">
      <button v-for="item in classify" @click="changeClassify(item)">{{ item }}</button>
    </div>
    <div class="btn">
      <button v-for="item in classify" @click="changeClassify(item)">{{ item }}</button>
    </div>
    <div class="btn">
      <button v-for="item in classify" @click="changeClassify(item)">{{ item }}</button>
    </div>
    <div class="btn">
      <button v-for="item in classify" @click="changeClassify(item)">{{ item }}</button>
    </div>
  </div>
  <hr />
  <h5>{{ booktype }}专区</h5>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
</template>

<script>
export default {
  data() {
    return {
      booktype: '科技',
      classify: ['情感', '时尚', '饮食', '影视', '自然', '理财', '萌宠', '游戏', '艺术', '音乐', '科技', '人文', '科幻']
    }
  },
  methods: {
    changeClassify(val) {
      this.booktype = val
    },
    scrollToPlace() {
      window.scrollTo({
        top: 455,
        left: 0,
        behavior: 'smooth'
      })
      // const drag = 10
      // const location = 200
      // const gap = document.documentElement.scrollTop || document.body.scrollTop
      // if (gap > location) {
      //   window.requestAnimationFrame(scrollToTop)
      //   window.scrollTo(0, gap - gap / drag)
      // }
    }
  },
  created() {
    this.booktype = this.$route.params.msg
  },
  mounted() {
    if (this.$route.params.scroll === true) {
      this.scrollToPlace()
    }
  }
}
</script>

<style scoped>
.btn {
  margin-left: 80px;
  margin-top: 20px;
  display: flex;
}
.box {
  margin-top: -10px;
  margin-bottom: 60px;
}
h5 {
  font-size: 25px;
  margin-left: 70px;
  margin-top: 15px;
  margin-bottom: 40px;
}
.btn button {
  cursor: pointer;
  margin-left: 20px;
  height: 30px;
  width: 80px;
  border: none;
  background-color: #f6f7f8;
  color: #61666d;
  border-radius: 5px;
}
.btn button:hover {
  background-color: #949494;
  color: #e6e6e6;
}
</style>
