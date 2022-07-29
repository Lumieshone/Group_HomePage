<template>
  <div class = "home-page">
    <!-- 1.header头部 -->
    <div class="header">
      <div class="header-text">臻Game</div>
    </div>
    <!-- 2.content主体内容区 -->
    <div class="container">
      <div class="conculor content"></div>
      <!-- 侧边栏 -->
      <div class="conculor left">
        <!-- 头像和id、状态 -->
        <div class="top-item">
          <div class="head-portrait">
            <img src="../assets/avator.png" alt="默认头像" />
          </div>
          <div class="head-text">用户ID：{{form.user_id}}<br/>状态：
            <span v-if="form.status===0">离线</span>
            <span v-if="form.status===1">在线</span>
            <span v-if="form.status===2">隐身</span>
            <span v-if="form.status===3">请勿打扰</span>
          </div>
          <div style='clear:both;height:0;overflow:hidden;'></div>
        </div>
        <!--个人信息-->
        <div class="side-choice">
          <a class="account-info" href="#"><span class="iconfont icon-zhanghu"></span>账户信息</a>
          <a class="personal-info" href="#"><span class="iconfont icon-jianjie"></span>个人简介</a>
          <a class="safety" href="#"><span class="iconfont icon-lock-full"></span>安全设置</a>
          <a class="friends" href="#"><span class="iconfont icon-haoyou"></span>好友列表</a>
        </div>
        <button class="logout">登出</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home-page",
  data(){
    return {
      form:{
        user_name:'',
        usere_mail:'',
        user_id:'100000',
        area:'China',
        birthday:'',
        status: 3,
        game_num: 0,
        intro:'',
      }
    }
  }
}
</script>

<style scoped>
  .home-page{
    margin: 0;
    padding: 0;
  }
  body{
    min-width: 650px;
  }
  /* 头部 */
  .header{
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: #000000;
    text-align: center;
    font-weight: bold;
    max-width: 104rem;
    min-width: 76rem;
    position: relative;
  }
  .header-text{
    color: #FFFFFF;
    font-size: 22px;
    left: 100px;
    position: absolute;
  }
  /* 主体 */
  .container{
    padding: 0 0 0 300px;
    overflow: hidden;
  }
  .conculor{
    float: left;
    height: 650px;
    position: relative;
  }
  /*侧边栏*/
  .left{
    width: 300px;
    background-color: #F5F5F5;
    margin-left: -100%;
    left: -300px;
    position: relative;
  }
  .head-portrait{
    float: left;
    width: 30%;
  }
  .head-portrait img{
    width: 85%;
    padding: 20px;
  }
  .head-text{
    padding: 38px;
    word-break: break-all;
    font-style: italic;
    word-wrap: break-word;
    box-sizing: border-box;
    float: left;
  }
  .side-choice{
    width: 100%;
    font-size: 20px;
    font-weight: normal;
    float: left;
    list-style-type: none;
  }
  .account-info{
    margin: 20px 0 25px;
    padding: 25px;
    display: block;
    color: #000;
    text-align: center;
    text-decoration: none;
  }
  .account-info:hover{
    background-color: #E3E7EA;
  }
  .personal-info{
    margin: 10px 0 25px;
    padding: 25px;
    display: block;
    color: #000;
    text-align: center;
    text-decoration: none;
  }
  .personal-info:hover{
    background-color: #E3E7EA;
  }
  .safety{
    margin: 10px 0 25px;
    padding: 25px;
    display: block;
    color: #000;
    text-align: center;
    text-decoration: none;
  }
  .safety:hover{
    background-color: #E3E7EA;
  }
  .friends{
    margin: 10px 0 25px;
    padding: 25px;
    display: block;
    color: #000;
    text-align: center;
    text-decoration: none;
  }
  .friends:hover{
    background-color: #E3E7EA;
  }
  .logout{
    min-width: 60px;
    margin: 0 100px;
    width: 30%;
    height: 40px;
    border-color: rgba(0,0,0,.87);
    border-width: thin;
    outline: none;
    background-color: #fff;
    color: rgba(0,0,0,.87);
    font-size: 0.9em;
    cursor: pointer;
  }
  .content{
    width: 100%;
    background-color: #FAFAFA;
  }
</style>