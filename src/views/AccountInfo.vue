<template>
  <div class="AccountPage">
    <div class="top-text">您的信息</div>
    <div class="AccountList">
      <div class="part" id="photo">
        <span class="label-title">头像</span>
        <img class="picture_item" :src= "imgUrl" alt="默认头像" />
        <div id="image">
          <!--上传图片的按钮-->
          <button class="btn" @click="toggleShow">设置头像</button>
          <!--组件主体-->
          <my-upload ref="uploadRef" field="img" v-model="show" @crop-success="cropSuccess" :width="200" :height="200" img-format="png" :size="size"></my-upload>
        </div>
      </div>
      <div class="part" key="id">
        <span class="label-title">账户ID</span>
        <span class="label-content">{{iframeData.id}}</span>
      </div>
      <div class="part" key="email">
        <span class="label-title">电子邮箱</span>
        <span class="label-content">{{form.email}}</span>
      </div>
      <div class="part" key="game-num">
        <span class="label-title">游戏数量</span>
        <span class="label-content">{{form.game_num}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import 'babel-polyfill'
import myUpload from 'vue-image-crop-upload/upload-2.vue'
export default {
  name: "AccountInfo",
  inject: ['updateAvatar'],
  data(){
    return {
      imgUrl: require('../assets/avatar.png'),
      show: false,  //剪切框显示和隐藏的flag
      size:2.1,
      form:{
        email: '',
        game_num: 0,
      },
      iframeData:{
        id: this.$route.params.id
      }
    }
  },
  //注册组件
  components: {
    "my-upload": myUpload
  },
  methods: {
    //控制剪切框的显示和隐藏
    toggleShow() {
      this.show = !this.show;
    },
    //剪切成功后的回调函数
    cropSuccess(imgDataUrl) {
      //  imgDataUrl其实就是图片的base64data码
      this.imgUrl = imgDataUrl;
      this.updateAvatar(imgDataUrl);
      console.log(imgDataUrl)//这里打印出来的是base64格式的资源
      this.$refs.uploadRef.off()
    }
  },
  created() {
    const self = this;
    // this.$loading.show();
    self.$axios({
      method: 'post',
      url: 'api/user/getUserInfo',
      data: {
        id: self.iframeData.id
      }
    })
        .then(res => {
          switch (res.data.result) {
            case 1:
              console.log("获取账户信息成功！");
              // setTimeout(() => {
              //   this.$loading.hide();
              // }, 0);
              self.form.email = res.data.email
              self.form.game_num = res.data.game_num
              self.imgUrl = require(res.data.profile_photo)
              break;
            case 0:
              console.log("获取账户信息失败！");
              break;
            case -1:
              console.log("获取数据出现问题！");
              break;
          }
        })
        .catch(err => {
          console.log(err);
        })
  }
}
</script>

<style scoped>
.AccountPage{
  margin: 0;
  padding: 0;
}
.top-text{
  margin:40px 120px 0;
  font-size: 25px;
}
.AccountList{
  margin: 20px 120px;
  text-align: left;
  font-size: 20px;
  vertical-align: middle;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.label-title{
  max-width: 100%;
  width: 35%;
  line-height: 1.8rem;
  vertical-align: middle;
}
.label-content{
  font-weight: 700;
}
button{
  width: 80px;
  height: 40px;
  line-height: 1.8rem;
  white-space: normal;
  border: thin solid #c8c8c8;
  box-sizing: border-box;
  border-radius: 2px;
  background-color: #fff;
  position: absolute;
  right: 0;
  bottom: 7%;
}
button:hover{
  background-color: #F5F5F5;
}
.picture_item{
  width: 25%;
  height: 25%;
  position: relative;
}
.part{
  padding: 20px;
  margin: 10px;
  width: 70%;
  border-bottom: .1rem solid;
  border-bottom-color: #e6e6e6;
  display: flex;
  align-content: center;
  position: relative;
}
</style>