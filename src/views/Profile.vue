<template>
  <div class="profilePage">
    <div class="top-text">简介</div>
    <div class="explainList">
      <div class="part">
        <span class="label-title">头像</span>
        <img class="picture_item" src="../assets/avator.png" alt="默认头像" />
        <div class="edit-button">
          <button class="layui-btn  layui-btn-normal  layui-btn-sm" @click="edit()">
            编辑
          </button>
        </div>
      </div>
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
        <span class="label-title">自我介绍</span>
        <span class="label-content">{{iframeData.introduction}}</span>
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
export default {
  name: "Profile",
  data() {
    return {
      iframeData: {
        name: '田所浩二',
        introduction:'逸一时误一时',
        birthday:'1919-8-10',
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
        area: ['360px', '400px'],
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
.picture_item{
  line-height: 1.8rem;
  width: 40px;
  position: relative;
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