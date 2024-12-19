// common/header/header.js
Component({

  // 定义子组件的属性
  properties: {
    title: { // 父组件传递的标题
      type: String,
      value: '欢迎来到微信小程序的世界！这里是滚动文字的示例。您可以根据需要修改文本内容'
    },
  },

  /**
   * 页面的初始数据
   */
  data: {
    scrollLeft: 0,
    isScrolling: true
  },


  onScroll(e) {
    // 如果滚动到了末尾，我们可以通过JavaScript重新设置位置来实现无限滚动的效果
    const scrollLeft = e.detail.scrollLeft;
    const scrollWidth = this.selectComponent('.top-scroll-view').scrollWidth;
    if (!this.data.isScrolling && scrollLeft >= scrollWidth - this.data.windowWidth) {
      this.setData({ isScrolling: true });
      this.scrollToStart();
    }
  },

  scrollToStart() {
    // 使用定时器模拟动画结束后的回调
    setTimeout(() => {
      this.selectComponent('.top-scroll-view').scrollTo({ scrollLeft: 0 });
      this.setData({ isScrolling: false });
    }, 50); // 调整这个值可以改变滚动到开始的速度
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  ready() {
  },
})