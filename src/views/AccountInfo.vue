<template>
  <div class="AccountPage">
    <div class="top-text">您的信息</div>
    <div class="AccountList">
      <div class="part" key="id">
        <span class="label-title">账户ID</span>
        <span class="label-content">{{form.user_id}}</span>
      </div>
      <div class="part" key="email">
        <span class="label-title">电子邮箱</span>
        <span class="label-content">{{form.user_email}}</span>
      </div>
      <div class="part" key="area">
        <span class="label-title">地区</span>
        <span class="label-content">{{iframeData.area}}</span>
        <div class="edit-button">
          <button type="button" class="layui-btn  layui-btn-normal  layui-btn-sm" @click="edit()">编辑</button>
        </div>
      </div>
      <div class="part" key="game-num">
        <span class="label-title">游戏数量</span>
        <span class="label-content">{{form.game_num}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import EditArea from './EditArea'
export default {
  name: "AccountInfo",
  data(){
    return {
      form:{
        user_email:'2605825885@qq.com',
        user_id:'100000',
        game_num: 10,
      },
      iframeData:{
        area:''
      }
    }
  },
  components: {
    EditArea
  },
  methods: {
    edit() {
      this.$layer.iframe({
        type: 2,
        title: "地区",
        area: ['200px', '200px'],
        shade: true,
        offset: 'auto',
        content: {
          content: EditArea,//传递的编辑组件主线
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
.edit-button{
  margin-bottom: 40px;
}
button{
  width: 60px;
  height: 40px;
  line-height: 1rem;
  white-space: normal;
  border: .1rem solid #c8c8c8;
  box-sizing: border-box;
  position: absolute;
  right: 0;
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