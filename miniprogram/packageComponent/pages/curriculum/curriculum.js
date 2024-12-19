// packageComponent/pages/ppt/ppt.js
Page({

  /**
   * 组件的初始数据
   */
  data: {
    pptList: [
      {
        name: '简历模版'
      },
      {
        name: '简历模版'
      },
      {
        name: '简历模版'
      },
      {
        name: '简历模版'
      },{
        name: '简历模版'
      },{
        name: '简历模版'
      },{
        name: '简历模版'
      }
    ],
    tipShow:false,
    title:"",
    desc:"",
    url:"",
  },

  async onLoad() {
    this.setData({
      isPreview:true,
      title:"",
      desc:"我分享了「简历模板大全」，点击链接即可保存。打开「夸克APP」，无需下载在线播放",
      url:"https://pan.quark.cn/s/b22aba2d4a66"
    })
  },

  /**
   * 组件的方法列表
   */
  onOpenTipsModal(){
    this.setData({
      tipShow:true
    })
  },
  handleCustomEvent(e) {
    // 获取子组件传递的数据
    const newValue = e.detail.value;
    console.log('收到子组件传递的值:', newValue);

    // 更新父组件的状态
    this.setData({
      tipShow: newValue
    });
  }
})