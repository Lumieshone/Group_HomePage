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
        <span class="label-content">{{form.usere_mail}}</span>
      </div>
      <div class="part" key="area">
        <span class="label-title">地区</span>
        <span class="label-content">{{form.area}}</span>
        <div class="edit-button">
          <button class="button-area">
            编辑
          </button>
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
export default {
  name: "AccountInfo",
  data(){
    return {
      form:{
        usere_mail:'2605825885@qq.com',
        user_id:'100000',
        area:'China',
        game_num: 10,
      }
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
.button-area{
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