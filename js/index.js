// 实现动画
// 1. 需要知道滚动到的是第几屏, 需要一个回调函数, 在完全滚动到对应屏幕时调用
// 2. 过渡动画需要有两个状态, 进入屏幕前一个状态, 进入屏幕后一个状态
//    通过 transition 来过渡, 实现动画
// console.log('-------');
$(function () {
  $('#box').fullpage({
    // 配置每一屏幕的颜色
    sectionsColor:['#0DA5D6', '#2AB561', '#DE8910', '#16BA9D', '#0DA5D6'],
    // 配置内容默认不垂直居中
    verticalCentered:false,
    // 显示导航
    navigation:true,

    // 滚动结束, 到达某一屏触发
    afterLoad: function(a, index) {
      // index 表示第几屏, 从 1 开始
      // console.log(index);
      // $('.one').addClass("now");
      // 动态维护了一个 now类, 进入屏幕加上now, 并且移除其他屏幕的 now类
      // 1. 让对应屏幕 加上 now 类, 实现动画, eq接收的是索引(下标)
      // 2. 给当前屏加上now类后, 将其他屏幕的 now 类移除, 这样其他屏可以再次执行动画
      $('.section').eq(index-1).addClass("now").siblings().removeClass("now");
    }
  })
})