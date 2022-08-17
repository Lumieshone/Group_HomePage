<!--2053382 范珑骁-->
<template>
  <div class="Friends">
    <el-card>
      <div class="top-text">好友列表</div>
      <!--搜索与添加区域-->
      <el-row :gutter="20">
        <el-col :span="4">
          <el-button type="primary" @click="searchById" class="add" icon="el-icon-circle-plus-outline" plain
          >添加好友</el-button
          >
        </el-col>
      </el-row>
      <el-table
          :data="tableData"
          border
          style="width: 87%"
          :header-cell-style="{
          'text-align': 'center',
          background: '#F5F5F5'
        }"
          :cell-style="{
          'text-align': 'center'
        }"
          max-height="500"
          empty-text="您还没有好友，快去发现同好吧~~~">
        <el-table-column
            fixed
            prop="id"
            label="用户id"
            width="200">
        </el-table-column>
        <el-table-column
            prop="profile_photo"
            label="头像"
            width="180">
          <template slot-scope="scope">
            <img :src="scope.row.profile_photo" width="60" height="60" @error="defImg" alt="头像"/>
          </template>
        </el-table-column>
        <el-table-column
            prop="name"
            label="昵称"
            width="180">
        </el-table-column>
        <el-table-column
            prop="status"
            label="在线状态"
            width="180">
          <template slot-scope="scope">
            <el-switch
                v-model="scope.row.status"
                disabled
            ></el-switch>
          </template>
        </el-table-column>
        <el-table-column
            fixed="right"
            label="操作"
            width="180">
          <!-- 查看按钮 -->
          <template slot-scope="scope">
            <el-button
                type="primary"
                icon="el-icon-tickets"
                size="mini"
                @click="getUsersList(scope.row.id)"
            >查看</el-button>
            <!-- 删除按钮 -->
            <el-button
                type="danger"
                icon="el-icon-delete"
                size="mini"
                @click="removeUserById(scope.row.id)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <InfoDialog :form="form" :DialogVisible="DialogVisible" @callBack="callBack"></InfoDialog>
    </el-card>
  </div>
</template>

<script>
import SearchUser from './SearchUser';
import InfoDialog from './InfoDialog';
export default {
  name: "FriendsList",
  data(){
    return{
      DialogVisible: false,
      defImg: require("../assets/avatar.jpg"),
      queryInfo:{
        id: ''
      },
      iframeData:{
        id: this.$route.params.id
      },
      form:{
        profile_photo:'',
        id:'',
        name:'',
        email:'',
        birthday:'',
        game_num: 0,
        intro:''
      },
      tableData:[{
        id: '0000000002',
        name: 'Laura',
        status: false,
        profile_photo: require('../assets/avatar_1.jpg')
      }, {
        id: '0000000003',
        name: 'Sakuzyo',
        status: true,
        profile_photo: require('../assets/avatar_2.jpg')
      }, {
        id: '0000000004',
        name: 'Jiaran',
        status: true,
        profile_photo: require('../assets/avatar_3.jpg')
      }]
    };
  },
  components:{
    SearchUser,
    InfoDialog
  },
  methods:{
    callBack(flag){
      this.DialogVisible = flag
    },
    getUsersList(uid) {
      const self = this;
      self.DialogVisible = true;
      self.$axios({
        method: 'post',
        url: 'api/user/getUserInfo',
        data: {
          id: uid
        }
      })
          .then(res => {
            switch (res.data.result) {
              case 1:
                console.log("查找成功！");
                self.form.profile_photo = require('../../../ExGame-Asset/User/' + uid +'/ProfilePhoto.jpg');
                self.form.id = uid;
                self.form.name = res.data.name;
                self.form.email = res.data.email;
                self.form.birthday = res.data.birthday;
                self.form.game_num = res.data.game_num;
                self.form.intro = res.data.intro;
                break;
              case 0:
                console.log("查找失败！");
                break;
              case -1:
                console.log("获取数据出现问题！");
                break;
            }
          })
          .catch(err => {
            console.log(err);
          })
    },
    searchById() {
      this.$layer.iframe({
        type: 2,
        title: "搜索用户",
        area: ['835px', '700px'],
        shade: true,
        offset: 'auto',
        content: {
          content: SearchUser,//传递的编辑组件主线
          parent: this,
          data: {
            iframeData:this.iframeData
          }
        },
        cancel:()=>{//关闭事件
          this.getFriendsList(0)
        }
      })
    },
    // 根据id删除对应的用户信息
    async removeUserById(uid) {
      // 弹框提示用户是否删除
      const confirmResult = await this.$confirm(
          '此操作将永久删除该用户, 是否继续?',
          '提示',
          {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }
      ).catch(err => err)
      // 如果用户确认删除，则返回字符串 confirm
      // 如果用户取消删除，则返回字符串 cancel
      if (confirmResult !== 'confirm') {
        return this.$message.info('已取消删除')
      }
      // 发送删除请求
      this.$axios({
        method: 'post',
        url: 'api/user/removeFriends',
        data: {
          id_A: this.iframeData.id,
          id_B: uid
        }
      })
          .then(res => {
            switch (res.data.result) {
              case 1:
                console.log("好友删除成功！");
                this.$layer.msg("好友删除成功！");
                this.getFriendsList(0)
                break;
              case 0:
                console.log("好友删除失败！");
                this.$layer.msg("好友删除失败！");
                break;
            }
          })
          .catch(err => {
            console.log(err);
          })
    },
    getFriendsList(flag){
      const self = this;
      if(flag === 1)
        this.$loading.show();
      self.$axios({
        method: 'post',
        url: 'api/user//getFriendsList',
        data: {
          id: self.iframeData.id
        }
      })
          .then(res => {
            switch (res.data.result) {
              case 1:
                console.log("刷新好友列表成功！");
                if(flag === 1)
                  setTimeout(() => {
                    this.$loading.hide();
                  }, 100);
                self.tableData = res.data.friends_list;
                for(let num = 0;num < self.tableData.length;num++){
                  self.tableData[num].profile_photo = require('../../../ExGame-Asset/User/' + self.tableData[num].id +'/ProfilePhoto.jpg')
                  self.tableData[num].status = Boolean(self.tableData[num].status)
                }
                break;
              case 0:
                alert("刷新好友列表失败！");
                this.tableData = []
                break;
            }
          })
          .catch(err => {
            console.log(err);
          })
    }
  },
  mounted() {
    this.getFriendsList(1)
  }
}
</script>

<style scoped>
.Friends{
  margin: 0;
  padding: 0;
}
.top-text{
  margin:10px 50px 0;
  font-size: 25px;
}
.el-table{
  margin: 30px 0 30px 50px;
}
.el-card{
  margin: 40px 60px;
}
.el-row{
  margin: 30px
}
.add{
  margin: 0 50px
}

</style>