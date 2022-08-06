<template>
  <div class="profilePage">
    <div class="top-text">简介</div>
    <div class="explainList">
      <div class="part">
        <span class="label-title">昵称</span>
        <span class="label-content">{{iframeData.name}}</span>
        <div class="edit-button">
          <button class="layui-btn  layui-btn-normal  layui-btn-sm" @click="edit()">
            编辑
          </button>
        </div>
      </div>
      <div class="part">
        <span class="label-title">生日</span>
        <span class="label-content">{{iframeData.birthday}}</span>
        <div class="edit-button">
          <button class="layui-btn  layui-btn-normal  layui-btn-sm" @click="edit()">
            编辑
          </button>
        </div>
      </div>
      <div class="part">
        <span class="label-title">地区</span>
        <span class="label-content">{{iframeData.area}}</span>
        <div class="edit-button">
          <button class="layui-btn  layui-btn-normal  layui-btn-sm" @click="edit()">编辑</button>
        </div>
      </div>
      <div class="part">
        <span class="label-title">自我介绍</span>
        <span class="label-content">{{iframeData.intro}}</span>
        <div class="edit-button">
          <button class="layui-btn  layui-btn-normal  layui-btn-sm" @click="edit()">
            编辑
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EditProfile from './EditProfile';
export function getZero(num){
  if(parseInt(num) < 10){
    num = '0' + num;
  }
  return num;
}
export default {
  name: "Profile",
  data() {
    return {
      iframeData: {
        id: this.$route.params.id,
        name: '',
        birthday: '',
        area: '',
        intro: ''
      }
    }
  },
  components: {
    EditProfile
  },
  methods: {
    edit() {
      this.$layer.iframe({
        type: 2,
        title: "个人信息",
        area: ['360px', '500px'],
        shade: true,
        offset: 'auto',
        content: {
          content: EditProfile,//传递的编辑组件主线
          parent: this,
          data: {
            iframeData:this.iframeData
          }
        }
      })
    }
  },
  created() {
    const self = this;
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
              alert("获取个人信息成功！");
              break;
            case 0:
              alert("获取个人信息失败！");
              break;
            case -1:
              alert("获取数据出现问题！");
              break;
          }
          self.iframeData.name = res.data.name
          let date = new Date(res.data.birthday.replace(/\//g, "-")),
              Y = date.getFullYear(),
              M = date.getMonth() + 1,
              D = date.getDate()
          self.iframeData.birthday = Y + '-' + getZero(M) + '-' + getZero(D);
          self.iframeData.intro = res.data.intro
          self.iframeData.area = res.data.area
        })
        .catch(err => {
          console.log(err);
        })
  }
}
</script>

<style scoped>
.profilePage{
  margin: 0;
  padding: 0;
}
.top-text{
  margin:40px 120px 0;
  font-size: 25px;
}
.explainList{
  margin: 20px 120px;
  text-align: left;
  font-size: 20px;
  vertical-align: middle;
  display: flex;
  flex-direction: column;
  overflow: hidden;
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
  width: 60px;
  height: 40px;
  line-height: 1rem;
  white-space: normal;
  border: thin solid #c8c8c8;
  box-sizing: border-box;
  border-radius: 2px;
  background-color: #fff;
  position: absolute;
  right: 0;
}
button:hover{
  background-color: #F5F5F5;
}
</style>