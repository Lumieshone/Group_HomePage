<template>
  <div class="AccountPage">
    <div class="top-text">{{iframeData.id}}的精选游戏</div>
    <div class="explain-text">
    <ul>
      <li v-for="(game,index) in iframeData.games" v-if="game.discount==1">游戏名：{{game.game_name}}    价格：{{game.now_price}}$  游戏发行日期：{{game.publish_date}} 游戏类型：{{game.tag}}
        <div>
          <img class="picture_item" :src="game.image" alt="发行商发行游戏图片" />
        </div>
      </li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Selectgame",
  data(){
    return {
      iframeData: {
        id: this.$route.query.id,
        games:this.$route.query.games,
        game_count:this.$route.query.game_count,
        result:this.$route.query.result,
      }
    }
  },
  methods: {
  },
  created() {
    const self = this;
    self.$axios({
      method: 'post',
      url: 'api/publisher/getgameinfo',
      data: {
	publisher:'TEST',//在真实的生产环境中应该替换为发行商的名字
      }
    })
        .then(res => {
          switch (res.data.result) {
            case 1:
              alert("查询成功！");
              break;
            case 0:
              alert("查询失败！");
              break;
            case -1:
              alert("数据库连接失败！");
              break;
          }
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
.explain-text{
  margin:40px 120px 0;
  font-size: 20px;
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
.test_age{
  position: relative;
  left:200px;
}
</style>