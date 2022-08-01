<template>
  <div class = "home-page">
    <!-- 1.header头部 -->
    <div class="header">
      <div class="header-text">臻Game</div>
    </div>
    <!-- 2.content主体内容区 -->
    <div class="container">
      <div class="conculor content">
        <router-view></router-view>
      </div>
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
          <li><router-link class="lead-button" id="account" active-class="active" to="/account" exact><span class="iconfont icon-zhanghu"></span>账户信息</router-link></li>
          <li><router-link class="lead-button" active-class="active" to="/profile"><span class="iconfont icon-jianjie"></span>个人简介</router-link></li>
          <li><router-link class="lead-button" active-class="active" to="/safety"><span class="iconfont icon-lock-full"></span>安全设置</router-link></li>
          <li><router-link class="lead-button" active-class="active" to="/friends"><span class="iconfont icon-haoyou"></span>好友列表</router-link></li>
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
        user_id:'114514',
        status: 3,
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
    overflow: auto;
  }
  .active{
    background-color: #DCDCDC;
  }
  li:hover{
    background-color: #E3E7EA;
  }
  #account{
    margin: 20px 0 25px;
  }

  .lead-button{
    margin: 10px 0 25px;
    padding: 25px;
    display: block;
    color: #000;
    text-align: center;
    text-decoration: none;
  }

  .logout{
    min-width: 60px;
    margin: 0 100px;
    width: 30%;
    height: 40px;
    outline: none;
    color: rgba(0,0,0,.87);
    font-size: 0.9em;
    cursor: pointer;
    line-height: 1rem;
    white-space: normal;
    border: thin solid #c8c8c8;
    box-sizing: border-box;
    border-radius: 2px;
    background-color: #fff;
  }
  .logout:hover{
    background-color: #F5F5F5;
  }
  .content{
    width: 100%;
    background-color: #fff;
  }
</style>