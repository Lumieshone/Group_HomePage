<template>
  <div class="editarea container">
    <form class="form" @submit="editArea">
      <div class="form-group">
        <label>地区</label>
        <input type="text" required placeholder="请填写您所在的地区" autocomplete="off" class="form-control" v-model="form.area">
      </div>
      <button type="submit" class="btn btn-info">立即提交</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "EditArea",
  data(){
    return{
     form: {
       area:''
     }
    };
  },
  props:{
    layerid: {
      type: String,
      default: ""
    },
    form: {//传递的数据
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
    editArea(e){
      if(!this.form.area){
        this.$layer.msg("请添加对应信息！")
      }else{
        // this.$axios({
        //   method:'post',
        //   url: 'api/user/area',
        //   data: {
        //     area: this.form.area
        //   }
        // })
        // .then(function (response) {
          this.$parent.$data.iframeData = Object.assign({}, this.form);
          this.$layer.close(this.layerid);
          this.$layer.msg("修改地区信息成功！");
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
.editarea{
  margin:8px 20px 20px 20px;
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
  height: 100%;
  padding: 8px 20px;
  width: 100%;
}
button{
  width: 80px;
  height: 30px;
  margin-left: 60px;
  margin-top:20px;
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
  margin-bottom: 10px;
}
</style>