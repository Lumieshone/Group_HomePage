<template>
<div class="page">
  <div class="top-text">
    <div >
      输入游戏的名称(必填)
      <br>
      <input  v-model="form.name"  placeholder="输入游戏简要介绍信息" />
    </div>
    <div >
      输入游戏简要介绍信息(必填)
      <br>
      <input  v-model="form.basicalinfo"  placeholder="输入游戏简要介绍信息" />
    </div>
    <div>
      上传游戏封面资源(必填)
      <el-upload
          :action="action"
          :file-list="modeList"
          :http-request="modeUpload"
      >
        <el-button size="small" type="primary">上传游戏主封面资源</el-button>
      </el-upload>

    </div>

    <div >
      输入游戏一般介绍信息(选填)
      <br>
      <input  v-model="form.normalinfo"  placeholder="输入游戏一般介绍信息" />
    </div>
    <div>
      游戏的副封面资源(必填)
      <el-upload
          :action="action"
          :file-list="modeList1"
          :http-request="modeUpload1"
      >
        <el-button size="small" type="primary">上传游戏副封面资源</el-button>
      </el-upload>
    </div>
    <div>
      游戏的背景图片资源(必填)
      <el-upload
          :action="action"
          :file-list="modeList2"
          :http-request="modeUpload2"
      >
        <el-button size="small" type="primary">上传游戏背景图片资源</el-button>
      </el-upload>
    </div>
    <div>
      游戏的内容介绍图片资源(必填)
      <el-upload
          :action="action"
          :file-list="modeList3"
          :http-request="modeUpload3"
      >
        <el-button size="small" type="primary">上传内容介绍图片资源</el-button>
      </el-upload>
    </div>
    <div>
      游戏的介绍轮播图视频资源(必填)
      <el-upload
          :action="action"
          :file-list="modeList4"
          :http-request="modeUpload4"
      >
        <el-button size="small" type="primary">上传介绍轮播图视频资源</el-button>
      </el-upload>
    </div>
    <div>
      游戏的推送封面资源(必填)
      <el-upload
          :action="action"
          :file-list="modeList5"
          :http-request="modeUpload5"
      >
        <el-button size="small" type="primary">上传游戏的推送封面资源</el-button>
      </el-upload>
    </div>
    <div>
      游戏程序的资源(必填)
      <el-upload
          :action="action"
          :file-list="modeList6"
          :http-request="modeUpload6"
      >
        <el-button size="small" type="primary">上传游戏程序的资源</el-button>
      </el-upload>
    </div>
    <div >
      游戏发行日期(必填)
      <br>
      <input  v-model="form.date"  placeholder="输入游戏发行日期" />
    </div>
    <div >
      游戏价格(必填)
      <br>
      <input  type="number" v-model="form.price"  placeholder="输入游戏价格" />
    </div>
    <div >
      最低配置(必填)
      <br>
      <input  v-model="form.lowdevice"  placeholder="输入游戏最低配置" />
    </div>
    <div >
      最低配置(必填)
      <br>
      <input  v-model="form.lowdevice"  placeholder="输入游戏最低配置" />
    </div>
    <div >
      推荐配置(必填)
      <br>
      <input  v-model="form.commanddevice"  placeholder="输入游戏推荐配置" />
    </div>
    <div >
      语言(必填)
      <br>
      <input  v-model="form.language"  placeholder="输入游戏语言" />
    </div>
    <div >
      选择游戏类型
      <br>
      <label>类魂游戏<input type="checkbox" v-model="form.tag" value="类魂游戏"/></label>
      <label>恋爱养成<input type="checkbox" v-model="form.tag" value="恋爱养成"/></label>
      <label>黑暗奇幻 <input type="checkbox" v-model="form.tag" value="黑暗奇幻"/></label>
      <label>恐怖<input type="checkbox" v-model="form.tag" value="恐怖"/></label>
      <label>角色扮演<input type="checkbox" v-model="form.tag" value="角色扮演"/></label>
      <label>放松 <input type="checkbox" v-model="form.tag" value="放松"/></label>
      <p>已选：{{form.tag}}</p>
      <el-button @click="upload">点击上传所有文件</el-button>
    </div>



  </div>

</div>
</template>

<script>

export default {
  name: "Friends",
  data(){
    return  {
      action: 'https://jsonplaceholder.typicode.com/posts/',
      mode: {},
      modeList: [],
      mode1: {},
      modeList1: [],
      mode2: {},
      modeList2: [],
      mode3: {},
      modeList3: [],
      mode4: {},
      modeList4: [],
      mode5: {},
      modeList5: [],
      mode6: {},
      modeList6: [],
      form:{
        name:'',
        basicalinfo:'',
        normalinfo:'',
        publisher:'',//从上一级页面跳转时传参得到
        date:'',
        lowdevice:'',
        commanddevice:'',
        language:'',
        price:'',
        tag: [],
      }
    }

  },
  methods: {
    changetag:function(){

    },
    modeUpload: function(item) {
      // console.log(item.file);
      this.mode = item.file
    },
    modeUpload1: function(item) {
      // console.log(item.file);
      this.mode1 = item.file
    },
    modeUpload2: function(item) {
      // console.log(item.file);
      this.mode2 = item.file
    },
    modeUpload3: function(item) {
      // console.log(item.file);
      this.mode3 = item.file
    },
    modeUpload4: function(item) {
      // console.log(item.file);
      this.mode4 = item.file
    },
    modeUpload5: function(item) {
      // console.log(item.file);
      this.mode5 = item.file
    },
    modeUpload6: function(item) {
      // console.log(item.file);
      this.mode6 = item.file
    },
    uploadFile2(){
      // 当点击button按钮后会触发此事件
      // 作用就是打开文件上传弹框
      this.$refs.uploadFile2.click()
    },
    upload: function()
    {
      let fd = new FormData()
      fd.append('MainPicSrc', this.mode)//主封面资源
      fd.append('price', this.form.price)

      this.$axios( {
        url: 'api/publisher/publishsource',
        data:fd,
        method: 'post',
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
          .then(response =>
          {

      })
    },

    },

  mounted: function () {

  },
}
</script>

<style scoped>
.page{
  margin: 0;
  padding: 0;
  overflow: scroll;
  height: 100vh;
}
.top-text{
  margin:40px 120px 0;
  font-size: 25px;
}
</style>