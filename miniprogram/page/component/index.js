Page({
  onShow() {
    wx.reportEvent('enter_home_programmatically', {})

    // http://tapd.oa.com/miniprogram_experiment/prong/stories/view/1020425689866413543
    if (wx.canIUse('getExptInfoSync')) {
      console.log('getExptInfoSync expt_args_1', wx.getExptInfoSync(['expt_args_1']))
      console.log('getExptInfoSync expt_args_2', wx.getExptInfoSync(['expt_args_2']))
      console.log('getExptInfoSync expt_args_3', wx.getExptInfoSync(['expt_args_3']))
    }
    if (wx.canIUse('reportEvent')) {
      wx.reportEvent('expt_event_1', {expt_data: 1})
      wx.reportEvent('expt_event_2', {expt_data: 5})
      wx.reportEvent('expt_event_3', {expt_data: 9})
      wx.reportEvent('expt_event_4', {expt_data: 200})

      wx.reportEvent('weexpt_event_key_1', {option_1: 1, option_2: 10, option_str_1: 'abc'})
      wx.reportEvent('weexpt_event_key_1', {option_1: 'abc', option_2: '1000', option_str_1: '1'})
    }
  },
  onShareAppMessage() {
    return {
      title: '小助手',
      path: 'page/component/index'
    }
  },
  onShareTimeline() {
    '小助手'
  },

  data: {
    list: [
      {
        id: 'profile',
        name: '资料',
        open: false,
        option: [
          // { name: '教资', page: 'teaching'},
          { name: '简历模版', page: 'curriculum'},
        ],
        pages: ['view', 'scroll-view', 'swiper', 'movable-view', 'cover-view']
      },
      {
        id: 'ppt',
        name: 'PPT',
        open: false,
        option: [
          { name: '蛇年PPT', page: 'ppt', show: 1 },
        ],
      },
    ],
    theme: 'light'
  },

  onLoad() {
  },

  kindToggle(e) {
    const id = e.currentTarget.id
    const list = this.data.list
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id === id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list
    })
    wx.reportAnalytics('click_view_programmatically', {})
  }
})
