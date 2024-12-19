// components/tipsModal.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tipShow: Boolean,
    title: String,
    desc: String,
    url: String,
  },
  observers: {
    tipShow: function (value) {
      this.setData({ isShow: value })
    },
  },
  /**
   * 组件的初始数据
   */
  data: {
    isShow: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClose() {
      // 触发自定义事件，并传递数据
      // this.triggerEvent('myCustomEvent', { value: false });
      this.setData({
        isShow: false,
      })
    },
    copyToClipboard() {
      const that = this
      wx.setClipboardData({
        data: this.properties.url,
        success() {
          wx.showToast({
            title: '链接已复制',
            icon: 'none',
          })
          that.setData({
            isShow: false,
          })
        },
      })
    },
  },
})
