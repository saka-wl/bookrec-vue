<template>
  <div class="box">
    <h4>书本分类</h4>
    <div>
      <div class="btn">
        <button v-for="item in classifyFir" @click="goToDetail(item)">{{item}}</button>
      </div>
      <div class="btn">
        <button v-for="item in classifySec" @click="goToDetail(item)">{{item}}</button>
        <button @click="moreBook('更多')">更多</button>
      </div>
    </div>
  </div>
  <div style="display: flex">
    <div class="block text-center carousel">
      <!-- <span class="demonstration"
      >Switch when indicator is hovered (default)</span
    > -->
      <Icon type="ios-alert-outline" class="IconSize" size="20" />
      <span>今日公告</span>
      <el-carousel height="400px" style="border-radius: 10px; margin-left: 60px">
        <el-carousel-item v-for="item in pic_item" :key="item">
          <!-- <h4>{{item}}</h4> -->
          <img :src="item">
          <!-- <img src="../../assets/picture/11.jpg"> -->
        </el-carousel-item>
      </el-carousel>
    </div>

    <Card style="width: 60%; margin-left: 80px; margin-top: 30px">
      <template #title>
        <Icon type="ios-film-outline"></Icon>
        热门图书
      </template>
      <template #extra>
        <!-- <a href="#" @click.prevent="changeLimit"> -->
        <Icon type="ios-loop-strong"></Icon>
        评分
        <!-- </a> -->
      </template>
      <p class="rate-demo" v-for="item in randomMovieList">
        <a :href="item.url" target="_blank">1.《{{ item.name }}》</a>
        <span> <Rate disabled v-model="item.rate" />{{ item.rate }} </span>
        <!-- <a :href="item.url" target="_blank">《{{ item.name }}》</a>
        <span> <Rate disabled v-model="item.rate" />{{ item.rate }} </span> -->
      </p>
    </Card>
  </div>
</template>

<script>
export default {
  name: 'myHome',
  carouselvalue: 0,
  data() {
    return {
      pic_item: ['/src/assets/picture/11.jpg', '/src/assets/picture/10.jpg', '/src/assets/picture/6.jpg', '/src/assets/picture/4.jpg'],
      classifyFir: ['情感','时尚','饮食','影视','自然','理财','萌宠','游戏','艺术','音乐','科技','人文','科幻'],
      classifySec : ['情感','时尚','饮食','影视','自然','理财','萌宠','游戏','艺术','音乐','科技','人文'],
      movieList: [
        {
          name: 'The Shawshank Redemption',
          url: 'https://movie.douban.com/subject/1292052/',
          rate: 9.6
        },
        {
          name: 'Leon:The Professional',
          url: 'https://movie.douban.com/subject/1295644/',
          rate: 9.4
        },
        {
          name: 'Farewell to My Concubine',
          url: 'https://movie.douban.com/subject/1291546/',
          rate: 9.5
        },
        {
          name: 'Forrest Gump',
          url: 'https://movie.douban.com/subject/1292720/',
          rate: 9.4
        },
        {
          name: 'Life Is Beautiful',
          url: 'https://movie.douban.com/subject/1292063/',
          rate: 9.5
        },
        {
          name: 'Spirited Away',
          url: 'https://movie.douban.com/subject/1291561/',
          rate: 9.2
        },
        {
          name: "Schindler's List",
          url: 'https://movie.douban.com/subject/1295124/',
          rate: 9.4
        },
        {
          name: 'The Legend of 1900',
          url: 'https://movie.douban.com/subject/1292001/',
          rate: 9.2
        },
        {
          name: 'WALL·E',
          url: 'https://movie.douban.com/subject/2131459/',
          rate: 9.3
        },
        {
          name: 'Inception',
          url: 'https://movie.douban.com/subject/3541415/',
          rate: 9.2
        }
      ],
      randomMovieList: []
    }
  },
  methods: {
    goToDetail(val) {
      // bus.emit('shareBookType',val)
      this.$router.push({name: 'moreBook',params:{msg: val, scroll: true}})
    },
    moreBook(val) {
      // this.$router.push('/morebook')
      if(val == '更多') {
        val = '科技'
      }
      this.$router.push({name: 'moreBook',params:{msg: val, scroll: false}})
    },
    changeLimit() {
      function getArrayItems(arr, num) {
        const temp_array = []
        for (let index in arr) {
          temp_array.push(arr[index])
        }
        const return_array = []
        for (let i = 0; i < num; i++) {
          if (temp_array.length > 0) {
            const arrIndex = Math.floor(Math.random() * temp_array.length)
            return_array[i] = temp_array[arrIndex]
            temp_array.splice(arrIndex, 1)
          } else {
            break
          }
        }
        return return_array
      }
      this.randomMovieList = getArrayItems(this.movieList, 5)
    }
  },
  mounted() {
    this.changeLimit()
  }
}
</script>

<style lang="less" scoped>
.btn{
  margin-left: 50px;
  margin-top: 20px;
}
.box{
  display: flex;
  margin-top: -10px;
  margin-bottom: 60px;
}
.box h4{
  margin-left: 50px;
  margin-top: 10px;
  padding-top: 30px;
  font-size: 20px;
}
.btn button{
  cursor: pointer;
  margin-left: 20px;
  height: 30px;
  width: 80px;
  border: none;
  background-color: #F6F7F8;
  color: #61666D;
  border-radius: 5px;
}
.btn button:hover{
  background-color: #949494;
  color: #e6e6e6;
}
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.carousel {
  width: 500px;
  margin-top: 0;
}
.IconSize {
  height: 30px;
  width: 30px;
  margin-left: 210px;
}
.rate-demo {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
