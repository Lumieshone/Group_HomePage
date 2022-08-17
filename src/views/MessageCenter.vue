<!--2053382 范珑骁-->
<template>
  <div class="message">
    <!--
      v-model	输入框中的文字	String	-	""
      taleList	会话内容	Array	-	[]
      toolConfig	工具栏配置	Object	-	{}
      width	JwChat界面框宽度	string	-	750px
      height	JwChat界面框高度	string	-	570px
      config	组件配置	Object	-	{}
      scrollType	消息自动到低	String	scroll	noroll
      showRightBox	显示右边内容	Boolean	false	true
      winBarConfig	多窗口配置
      quickList   自动匹配快捷回复
      @enter	输入框点击就发送或者回车触发的事件	输入的原始数据
      @clickTalk	点击聊天框列中的用户和昵称触发事件	当前对话数据
     -->
    <JwChat-index
        v-model="inputMsg"
        :taleList="taleList"
        :config="config"
        :showRightBox="true"
        scrollType="scroll"
        :winBarConfig="winBarConfig"
        :quickList="config.quickList"
        @enter="bindEnter"
        @clickTalk="talkEvent"
    >
      <!-- 窗口右边栏 -->
      <JwChat-rightbox :config="rightConfig" @click="rightClick" />
      <!-- 快捷回复 -->
      <!-- <JwChat-talk :Talelist="talk" :config="quickConfig" @event="bindTalk" /> -->
      <!-- 工具栏自定义插槽 -->
      <template slot="tools">
        <div style="width: 20rem; text-align: right" @click="toolEvent(12)">
          <JwChat-icon type="icon-lishi" title="自定义" />
        </div>
      </template>
    </JwChat-index>
  </div>
</template>

<script>
const img = "https://www.baidu.com/img/flexible/logo/pc/result.png";
const listData = [
  {
    date: "2022/08/14 21:19:07",
    text: {
      text: "<i class='el-icon-document-checked' style='font-size:2rem;'/>",
      subLink: {
        text: "a.txt",
        prop: {
          underline: false,
        },
      },
    },
    mine: false,
    name: "留恋人间不羡仙",
    img: require("../assets/avatar_1.jpg"),
  },
  {
    date: "",
    text: { text: "起床不" },
    mine: false,
    name: "留恋人间不羡仙",
    img: require("../assets/avatar_1.jpg"),
  },
  {
    text: "2022/08/14 21:19:07",
    type: "tip",
  },
  {
    date: "2022/08/14 21:19:07",
    text: {
      text: "<audio data-src='https://www.w3school.com.cn/i/horse.mp3'/>",
    },
    mine: false,
    name: "只盼流星不盼雨",
    img: require("../assets/avatar_2.jpg"),
  },
  {
    date: "2020/04/25 21:19:07",
    text: { text: "<img data-src='" + img + "'/>" },
    mine: false,
    name: "只盼流星不盼雨",
    img: require("../assets/avatar_2.jpg"),
  },
  {
    date: "2020/04/16 21:19:07",
    text: {
      text: "<video data-src='https://www.w3school.com.cn/i/movie.mp4' controls='controls' />",
    },
    mine: true,
    name: "JwChat",
    img: require("../assets/avatar_4.jpg"),
  },
  {
    date: "2021/03/02 13:14:21",
    mine: false,
    name: "留恋人间不羡仙",
    img: require("../assets/avatar_1.jpg"),
    text: {
      system: {
        title: "在接入人工前，智能助手将为您首次应答。",
        subtitle: "猜您想问:",
        content: [
          {
            id: `system1`,
            text: "组件如何使用",
          },
          {
            id: `system2`,
            text: "组件参数在哪里查看",
          },
          {
            id: "system",
            text: "我可不可把组件用在商业",
          },
        ],
      },
    },
  },
];
function getListArr(size) {
  const listSize = listData.length;
  if (!size) {
    size = listSize;
  }
  let result = [];
  for (let i = 0; i < size; i++) {
    const item = listData[(Math.random() * listSize) >> 0];
    item.id = Math.random().toString(16).substr(-6);
    result.push(item);
  }
  return result;
}
export default {
  name: "MessageCenter",
  components: {},
  data() {
    return {
      // 输入框中的文字
      inputMsg: "",
      // 会话内容
      taleList: [],
      // 工具栏配置
      tool: {
        // show: ['file', 'history', 'img', ['文件1', '', '美图']],
        // showEmoji: false,
        callback: this.toolEvent,
      },
      // 组件配置
      config: {
        img: require("../assets/avatar_4.jpg"),
        name: "JwChat",
        dept: "最简单、最便捷",
        callback: this.bindCover,
        historyConfig: {
          show: true,
          tip: "滚动到顶时候显示的提示",
          callback: this.bindLoadHistory,
        },
        // 自动匹配快捷回复
        quickList: [
          { text: "这里是jwchat，您想了解什么问题。", id: 3 },
          { text: "jwchat是最好的聊天组件", id: 4 },
          { text: "谁将烟焚散，散了纵横的牵绊；听弦断，断那三千痴缠。", id: 5 },
          { text: "长夏逝去。山野间的初秋悄然涉足。", id: 6 },
          { text: "江南风骨，天水成碧，天教心愿与身违。", id: 7 },
          { text: "总在不经意的年生。回首彼岸。纵然发现光景绵长。", id: 8 },
          { text: "外面的烟花奋力的燃着，屋里的人激情的说着情话", id: 10 },
          { text: "假如你是云，我就是雨，一生相伴，风风雨雨；", id: 11 },
          {
            text: "即使泪水在眼中打转，我依旧可以笑的很美，这是你学不来的坚强。",
            id: 12,
          },
          {
            text: " 因为不知来生来世会不会遇到你，所以今生今世我会加倍爱你。",
            id: 13,
          },
        ],
      },
      // 多窗口配置
      winBarConfig: {
        active: "win01", // 当前选中
        width: "160px", // 宽度大小
        listHeight: "60px", // 单个高度
        // 用户列表
        list: [
          {
            id: "win01",
            img: require("../assets/avatar_3.jpg"),
            name: "阳光明媚爱万物",
            dept: "沙拉黑油",
            readNum: 12,
          },
          {
            id: "win02",
            img: require("../assets/avatar_2.jpg"),
            name: "只盼流星不盼雨",
            dept: "最后说的话",
            readNum: 12,
          },
          {
            id: "win03",
            img: require("../assets/avatar_1.jpg"),
            name: "留恋人间不羡仙",
            dept: "这里可以放万物",
            readNum: 0,
          }
        ],
        callback: this.bindWinBar,
      },
      // 窗口右边栏配置
      rightConfig: {
        tip: "群公告",
        notice:
            "【公告】这是一款高度自由的聊天组件，基于AVue、Vue、Element-ui开发。",
        listTip: "当前在线",
        list: [
          {
            id: 3,
            name: "JwChat",
            img: require("../assets/avatar_3.jpg"),
          },
          {
            id: 4,
            name: "留恋人间不羡仙",
            img: require("../assets/avatar_1.jpg"),
          },
          {
            name: "只盼流星不盼雨",
            img: require("../assets/avatar_2.jpg"),
          },
        ],
      },
      // 快捷回复配置
      talk: [
        "快捷回复1",
        "快捷回复2",
        "快捷回复3",
        "快捷回复4",
        "快捷回复5",
        "快捷回复6",
      ],
      quickConfig: {
        nav: ["快捷回复", "超级回复"],
        showAdd: true,
        maxlength: 200,
        showHeader: true,
        showDeleteBtn: true,
      },
      rightConfig2: {
        listTip: "当前在线",
        // notice: '【公告】这是一款高度自由的聊天组件，基于AVue、Vue、Element-ui开发。点个赞再走吧 ',
        list: [
          {
            name: "JwChat",
            img: require("../assets/avatar_3.jpg"),
          },
          {
            name: "留恋人间不羡仙",
            img: require("../assets/avatar_1.jpg"),
          },
          {
            name: "只盼流星不盼雨",
            img: require("../assets/avatar_2.jpg"),
          },
        ],
      },
    };
  },
  methods: {
    // 切换用户窗口，加载对应的历史记录
    bindWinBar(play = {}) {
      const { type, data = {} } = play;
      console.log(play);
      if (type === "winBar") {
        const { id, dept, name, img } = data;
        this.config = { ...this.config, id, dept, name, img };
        this.winBarConfig.active = id;
        if (id === "win00") {
          this.taleList = getListArr();
        } else this.taleList = getListArr((Math.random() * 4) >> 0);
      }
      if (type === "winBtn") {
        const { target: { id } = {} } = data;
        const { list } = this.winBarConfig;
        this.winBarConfig.list = list.reduce((p, i) => {
          if (id != i.id) p.push(i);
          return p;
        }, []);
      }
    },
    // 点击聊天框列中的用户和昵称触发事件
    talkEvent(play) {
      console.log(play);
    },
    // 输入框点击就发送或者回车触发的事件
    bindEnter(e) {
      console.log(e);
      const msg = this.inputMsg;
      if (!msg) return;
      const msgObj = {
        date: "2020/05/20 23:19:07",
        text: { text: msg },
        mine: true,
        name: "JwChat",
        img: require("../assets/avatar_4.jpg"),
      };
      this.taleList.push(msgObj);
    },
    // 快捷回复，组件点击选中事件
    bindTalk(play) {
      console.log("talk", play);
      const { key, value } = play;
      if (key === "navIndex" && value == "1") {
        this.talk = ["回复1", "回复2", "回复3"];
      }
      if (key === "navIndex" && value == "2") {
        this.talk = ["超级回复1", "超级回复2", "超级回复3"];
      }
      if (key === "select") {
        this.inputMsg = value;
        // this.bindEnter();
      }
      if (key === "delIndex") {
        this.talk.splice(value, 1);
      }
    },
    /**
     * @description: 点击加载更多的回调函数
     * @param {*}
     * @return {*}
     */
    bindLoadHistory() {
      const history = new Array(3).fill().map((i, j) => {
        return {
          date: "2020/05/20 23:19:07",
          text: { text: j + new Date() },
          mine: false,
          name: "JwChat",
          img: require("../assets/avatar_4.jpg"),
        };
      });
      let list = history.concat(this.list);
      this.taleList = list;
      console.log("加载历史", list, history);
    },
    /**
     * @description:
     * @param {*} type 当前点击的按钮
     * @param {*} plyload 附加文件或者需要处理的数据
     * @return {*}
     */
    toolEvent(type, plyload) {
      console.log("tools", type, plyload);
    },
    bindCover(event) {
      console.log("header", event);
    },
    rightClick(type) {
      console.log("rigth", type);
    },
  },
  mounted() {
    this.taleList = getListArr();
  },
};
</script>

<style scoped>
.message{
  margin-top: 40px;
  margin-left: 40px;
}
.jwchat {
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 100px;
}
</style>