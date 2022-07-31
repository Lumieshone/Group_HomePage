<template>
  <div class="profilePage">
    <div class="top-text">简介</div>
    <div class="explainList">
      <div class="part" key="email">
        <span class="label-title">头像</span>
        <img class="picture_item" src="../assets/avator.png" alt="默认头像" />
        <div class="edit-button">
          <button class="button-area">
            编辑
          </button>
        </div>
      </div>
      <div class="part" key="id">
        <span class="label-title">用户名</span>
        <span class="label-content">{{form.name}}</span>
        <div class="edit-button">
          <button class="button-area">
            编辑
          </button>
        </div>
      </div>
      <div class="part" key="game-num">
        <span class="label-title">生日</span>
        <span class="label-content">{{form.birthday}}</span>
        <div class="edit-button">
          <button class="button-area">
            编辑
          </button>
        </div>
      </div>
      <div class="part" key="area">
        <span class="label-title">自我介绍</span>
        <span class="label-content">{{form.self_introduction}}</span>
        <div class="edit-button">
          <button class="button-area">
            编辑
          </button>
        </div>
      </div>
  </div>
  </div>

</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      form: {
        name: 'test',
        self_introduction:'这是一条自我介绍',
        birthday:'2022-7-31',
      }
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
</style>