<template>
  <div class="CDKey">
    <el-card>
      <div class="top-text">CDK兑换</div>
      <el-row>
        <el-col :span="18">
          <el-input v-model="item" placeholder="请输入CDKey兑换码"></el-input>
        </el-col>
        <el-col :span="4" class="btn">
          <el-button @click="commit" type="primary" plain>兑换游戏</el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "CDK",
  data() {
    return {
      item: '',
      user_id: '0000000007'
    }
  },
  methods: {
    commit() {
      if (this.item !== ''){
        this.$axios
            .post('api/cdk', {
              user_id: this.user_id,
              cdk_value: this.item
            })
            .then(res => {
              switch(res.data.result){
                case 0: alert("cdk不存在或已失效");
                  break;
                case -1: alert("游戏已拥有，不可重复兑换");
                  break;
                case 1: alert("兑换成功");
                  break;
                case -2: alert("连接失败");
                  break;
              }
            })
            .catch(error => {
              console.log(error)
            })
      } else {
        alert("填写不能为空！");
      }
    }
  }
}
</script>

<style scoped>
.CDKey{
  margin: 0;
  padding: 0;
}
.top-text{
  margin:10px 50px;
  font-size: 20px;
}
.el-card{
  margin: 50px;
}
.el-row{
  margin: 30px 50px 40px
}
.btn{
  margin-left: 5px;
}
</style>
