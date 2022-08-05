<template>
  <div class="AccountPage">
    <div class="top-text">您的信息</div>
    <div class="AccountList">
      <div class="part" id="photo">
        <span class="label-title">头像</span>
        <img class="picture_item" src="../assets/avator.png" alt="默认头像" />
        <div class="edit-button">
          <button class="layui-btn  layui-btn-normal  layui-btn-sm">
            更换头像
          </button>
        </div>
      </div>
      <div class="part" key="id">
        <span class="label-title">账户ID</span>
        <span class="label-content">{{form.id}}</span>
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
export default {
  name: "AccountInfo",
  data(){
    return {
      form:{
        email: '1919810@qq.com',
        id: this.$route.query.id,
        game_num: 10,
      }
    }
  },
  methods: {
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
              alert("获取账户信息成功！");
              break;
            case 0:
              alert("获取账户信息失败！");
              break;
            case -1:
              alert("获取数据出现问题！");
              break;
          }
          self.iframeData.email = res.data.email
          self.iframeData.gamenum = res.data.game_num
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
.edit-button{
  margin-top: 21%;
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
  position: relative;
}
button:hover{
  background-color: #F5F5F5;
}
.picture_item{
  line-height: 1.8rem;
  width: 25%;
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