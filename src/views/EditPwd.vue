<template>
  <div class="checkpwd container">
    <form class="form" @submit="">
      <div class="form-group">
        <label>请输入您的密码</label>
        <input type="text" required placeholder="请填写您的密码" autocomplete="off" class="form-name" v-model="form.password" >
      </div>
      <button type="submit" class="btn btn-info">立即提交</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "CheckPwd",
  data(){
    return{
      form: {
        id: this.lydata.iframeData.id,
        password: ''
      }
    };
  },
  props:{
    layerid: {
      type: String,
      default: ""
    },
    iframeData: {//传递的数据
      type: Object,
      default: () => {
        return {};
      }
    },
    lydata: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  methods:{
    editProfile(e){
      if(!this.form.password){
        this.$layer.msg("请添加对应信息！")
      }else{
        // this.$axios({
        //   method:'post',
        //   url: 'api/user/editPassword',
        //   data: {
        //     id: this.form.id
        //     password: this.form.password
        //   }
        // })
        // .then(function (response) {
        this.$layer.close(this.layerid);
        this.$layer.msg("身份验证通过");
        // });
        e.preventDefault()
      }
      e.preventDefault()
    },
    watch: {
      iframeData: {
        handler: function () {
          this.form = this.iframeData;
        },
        deep: true,
        immediate: true
      }
    }
  }
}
</script>

<style scoped>
.checkpwd{
  margin:10px 20px 20px 23px;
}
.form{
  display: flex;
  flex-direction: column;
  vertical-align: middle;
  position: relative;
}
.form-group{
  display: flex;
  flex-direction: column;
  vertical-align: center;
  text-align: left;
  position: relative;
}
input{
  border-color: #c8c8c8;
  background-color: #fff;
  border-radius: 2px;
  border-style: solid;
  border-width: 2px;
  box-sizing: border-box;
  padding: 8px 20px;
  width: 150%;
  height: 150%;
}
button{
  width: 80px;
  height: 40px;
  margin-left: 110px;
  margin-top:40px;
  white-space: normal;
  border: 1px solid #c8c8c8;
  box-sizing: border-box;
  border-radius: 2px;
  background-color: #fff;
}
button:hover{
  background-color: #F5F5F5;
}
label{
  color: rgba(0,0,0,.87);
  line-height: 30px;
  font-size: 15px;
  margin-top: 10px;
  margin-bottom: 5px;
}
</style>