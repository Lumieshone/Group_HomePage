<template>
  <div class="Safety">
    <div class="top-text">安全</div>
    <div class="explainList">
      <div class="part">
        <span class="label-title">邮箱</span>
        <span class="label-content">{{iframeData.email}}</span>
        <div class="edit-button">
          <button class="layui-btn  layui-btn-normal  layui-btn-sm" @click="editmail()">
            修改
          </button>
        </div>
      </div>
      <div class="part">
        <span class="label-title">密码</span>
        <span class="label-content">{{star}}</span>
        <div class="edit-button">
          <button class="layui-btn  layui-btn-normal  layui-btn-sm" @click="editpwd()">
            修改
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EditMail from './EditMail';
import EditPwd from './EditPwd';
export default {
  name: "Safety",
  data() {
    return {
      star: '',
      iframeData: {
        id: this.$route.query.id,
        password: this.$route.query.password,
        email:'1919810@qq.com'
      }
    }
  },
  components: {
    EditMail,
    EditPwd
  },
  methods: {
    editmail() {
      this.$layer.iframe({
        type: 2,
        title: "个人信息",
        area: ['300px', '200px'],
        shade: true,
        offset: 'auto',
        content: {
          content: EditMail,//传递的编辑组件主线
          parent: this,
          data: {
            iframeData: this.iframeData
          }
        }
      })
    },
    editpwd() {
      this.$layer.iframe({
        type: 2,
        title: "个人信息",
        area: ['300px', '400px'],
        shade: true,
        offset: 'auto',
        content: {
          content: EditPwd,//传递的编辑组件主线
          parent: this,
          data: {
            iframeData:{
              id: this.iframeData.id,
              password_old: this.iframeData.password
            }
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
              alert("获取安全信息成功！");
              break;
            case 0:
              alert("获取安全信息失败！");
              break;
            case -1:
              alert("获取数据出现问题！");
              break;
          }
          self.iframeData.email = res.data.email
          self.iframeData.password = res.data.password
        })
        .catch(err => {
          console.log(err);
        })
  },
  mounted() {
    // 循环遍历拿到密钥的长度
    for (let i = 0; i < this.iframeData.password.length; i++) {
      let star = this.star.split('') //分割成字符串数组
      star.splice(i, i, '•') //添加到数组
      this.star = star.join('') //将数组转换为字符串
    }
  }
}
</script>

<style scoped>
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