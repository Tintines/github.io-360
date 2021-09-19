fullpage框架
| https://www.jianshu.com/p/5c18c9448301

大眼袋阿姨
0.162
2019.02.20 10:12:53
字数 861
阅读 6,444
jQuery的一个全屏jQuery全屏滚动插件fullPage.js。我们经常见到一些全屏的特绚丽页面，手指或者鼠标滑动一下就是一整屏切换，而且还有各种效果。

下面我们就介绍一下jQuery的fullPage.js的如何使用及常用的配置。

1. fullpage.js的主要功能
fullPage.js是一个基于jquery的插件，它能很方便的制作出全屏网站，github地址。

主要功能有：

支持鼠标滚动。
支持前后退和键盘控制。
多个回调函数。
支持手机，平板触摸事件。
支持css3动画。
支持窗口缩放。
窗口缩放时自动调整。
可设置滚动宽度，背景颜色，滚动速度，循环选项，回调，文本对齐方式等。
2. fullpage.js的使用
2.1 兼容性
fullpage.js是jQuery的插件，需要依赖jQuery，要求jQuery最低的版本是1.6+。浏览器能兼容到ie8+及其他现代浏览器。

2.2 下载fullpage.js
第一种方法： 直接下载压缩包，地址

第二种方法： 使用前端的包管理工具

// With bower
bower install fullpage.js

// With npm
npm install fullpage.js

第三种： CDNJS地址:https://cdnjs.com/libraries/fullPage.js

2.3 引入文件及文件依赖关系
fullpage.js插件依赖：fullpage的css文件，jQuery，如果设置了options中css3: false*，如果你用除了jQuery的默认linear 和swing缓动的效果之外的缓动效果的话，需要添加 jQuery UI library。

引入依赖的文件，注意顺序！

<!--引入fullpage.js插件的样式，必须-->
<link rel="stylesheet" type="text/css" href="jquery.fullPage.css" />

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

<!-- 如果是ie8浏览器或者设置了css3: false 那么需要引入jQuery的easing缓动插件，默认可以省略就行了。 -->
<script src="vendors/jquery.easings.min.js"></script>

<!--引入jQuery的插件fullpage.js核心文件-->
<script type="text/javascript" src="jquery.fullPage.js"></script>

2.4 编写页面结构
编写html的页面结构，每个section独占一屏幕，默认显示第一屏。

<div id="fullpage">
  <div class="section">第一屏</div>
  <div class="section">第二屏</div>
  <div class="section">第三屏</div>
  <div class="section">第四屏</div>
</div>

如果需要从非第一屏开始显示，则需要给对应的section添加active样式类即可。

<div class="section active">第三屏</div>

2.5 编写初始化的脚本
$(function() {
  $('#fullpage').fullpage();
});

完整代码：

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>全屏插件</title>
  <link rel="stylesheet" href="./js/fullpage/jquery.fullpage.css">
  <script src="./js/jquery-1.11.3.min.js"></script>
  <script src="./js/fullpage/jquery.fullpage.min.js"></script>
</head>
<body>
  <div id="dowebok">
    <div class="section">
      <h3>第一屏</h3>
    </div>
    <div class="section">
      <h3>第二屏</h3>
    </div>
    <div class="section">
      <h3>第三屏</h3>
    </div>
    <div class="section">
      <h3>第四屏</h3>
    </div>
  </div>
  <script>
    $(function () {
      $('#dowebok').fullpage();
    });
  </script>
</body>
</html>

3. fullpage的初始化的设置
在初始化全屏插件的时候，有很多设置项。如下所示：

$(document).ready(function() {
    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors:['firstPage', 'secondPage'],
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        sectionsColor : ['#ccc', '#fff'],
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,
        parallax: false,
        parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        lazyLoading: true,

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterResponsive: function(isResponsive){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });
});

哇有很多设置项，还有事件处理程序。

他们的详细介绍如下：

选项
选项	类 型	默认值	说明
verticalCentered	字符串	true	内容是否垂直居中
resize	布尔值	false	字体是否随着窗口缩放而缩放
slidesColor	函数	无	设置背景颜色
anchors	数组	无	定义锚链接
scrollingSpeed	整数	700	滚动速度，单位为毫秒
easing	字符串	easeInQuart	滚动动画方式
menu	布尔值	false	绑定菜单，设定的相关属性与 anchors 的值对应后，菜单可以控制滚动
navigation	布尔值	false	是否显示项目导航
navigationPosition	字符串	right	项目导航的位置，可选 left 或 right
navigationColor	字符串	#000	项目导航的颜色
navigationTooltips	数组	空	项目导航的 tip
slidesNavigation	布尔值	false	是否显示左右滑块的项目导航
slidesNavPosition	字符串	bottom	左右滑块的项目导航的位置，可选 top 或 bottom
controlArrowColor	字符串	#fff	左右滑块的箭头的背景颜色
loopBottom	布尔值	false	滚动到最底部后是否滚回顶部
loopTop	布尔值	false	滚动到最顶部后是否滚底部
loopHorizontal	布尔值	true	左右滑块是否循环滑动
autoScrolling	布尔值	true	是否使用插件的滚动方式，如果选择 false，则会出现浏览器自带的滚动条
scrollOverflow	布尔值	false	内容超过满屏后是否显示滚动条
css3	布尔值	false	是否使用 CSS3 transforms 滚动
paddingTop	字符串	0	与顶部的距离
paddingBottom	字符串	0	与底部距离
fixedElements	字符串	无	
normalScrollElements		无	
keyboardScrolling	布尔值	true	是否使用键盘方向键导航
touchSensitivity	整数	5	
continuousVertical	布尔值	false	是否循环滚动，与 loopTop 及 loopBottom 不兼容
animateAnchor	布尔值	true	
事件
名称	说明
afterLoad	滚动到某一屏后的回调函数，接收 anchorLink 和 index 两个参数，anchorLink 是锚链接的名称，index 是序号，从1开始计算
onLeave	滚动前的回调函数，接收 index、nextIndex 和 direction 3个参数：index 是离开的“页面”的序号，从1开始计算；
nextIndex	是滚动到的“页面”的序号，从1开始计算；
direction	判断往上滚动还是往下滚动，值是 up 或 down。
afterRender	页面结构生成后的回调函数，或者说页面初始化完成后的回调函数
afterSlideLoad	滚动到某一水平滑块后的回调函数，与 afterLoad 类似，接收 anchorLink、index、slideIndex、direction 4个参数
onSlideLeave	某一水平滑块滚动前的回调函数，与 onLeave 类似，接收 anchorLink、index、slideIndex、direction 4个参数
案例1：延迟加载案例：

<!--图片或者视频的延迟加载, 只需要把src改成data-src -->
<img data-src="image.png">
<video>
    <source data-src="video.webm" type="video/webm" />
    <source data-src="video.mp4" type="video/mp4" />
</video>
<!--另外不能在初始化的设置：lazyLoading: true ,不能为false-->

案例2：设置不同屏的背景色

$('#fullpage').fullpage({
    sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],
});

4. fullpage的方法
名称	说明
moveSectionUp()	向上滚动
moveSectionDown()	向下滚动
moveTo(section, slide)	滚动到
moveSlideRight()	slide 向右滚动
moveSlideLeft()	slide 向左滚动
setAutoScrolling()	设置页面滚动方式，设置为 true 时自动滚动
setAllowScrolling()	添加或删除鼠标滚轮/触控板控制
setKeyboardScrolling()	添加或删除键盘方向键控制
setScrollingSpeed()	定义以毫秒为单位的滚动速度
例如：

$('#moveSectionUp').click(function(e){
  e.preventDefault();
  $.fn.fullpage.moveSectionUp();
});     

配合animate.css实现动态效果案例
首先说明animate.css本身就有兼容问题，ie9+浏览器可以无视，另外考虑到手机的性能，移动端尽量不要使用大量动画。

一般情况下都是用户进入某个屏的时候，动画开始启动入场，离开的时候启动出场（可以省略），然后下一屏开始入场。配合animate.css的问题，animate的动画添加上animated样式和具体的动画类型才会具有动画效果。如果一开始全设置好了那么只有第一屏有动画效果，不是我们想要的结果。

配合fullpage的onLeave事件，可以实现在上一屏离开的时候，给下一屏添加动画样式类，并把上一屏的动画样式类去掉。动画样式类可以提前记录在一个数组中或者是放到动画元素的自定义属性中。例如代码：

<div id="fullpage">
    <div class="section s1">
      <h3 class="sec-title amt amt-delay-3 lightSpeedIn" amt="lightSpeedIn">人工智能时代，学习编程让孩子不一样的未来！</h3>
      <div class="img-list amt amt-delay-6 bounceInUp" amt="bounceInUp">
        <img data-src="./img/s1-1.png" alt="孩子的未来">
        <img data-src="./img/s1-2.jpg" alt="孩子的未来">
        <img data-src="./img/s1-3.jpg" alt="孩子的未来">
      </div>
    </div>
    <div class="section s2">
      <h3 class="sec-title amt amt-delay-3" amt="bounceInDown">我们的理念</h3>
      <ul class="s2-l amt amt-delay-6" amt="slideInLeft">
        <li class="s2-l-item">imagine（想象）：让孩子去天马行空；</li>
        <li class="s2-l-item">create（创造）：通过创造现实结合起来；</li>
        <li class="s2-l-item">play（动手玩）：亲自动手创作项目；</li>
        <li class="s2-l-item">share（分享）：项目分享给其他人；</li>
        <li class="s2-l-item">reflect（反思）：对项目的反思和改进。</li>
      </ul>
      <div class="s2-r amt amt-delay-8" amt="slideInRight">
        <img data-src="./img/s2-1.png" alt="少儿编程">
      </div>
    </div>
</div>
<script>
    $(function () {
      $('#fullpage').fullpage({
        sectionsColor: ['rgba(88,185,156, 1)', '#fff', '#DE8910', '#0da5d6', 'rgb(235, 76, 67)', 'rgb(141, 127, 219)', 'rgb(227,135,88)','rgb(98,198,188)' ],
        lazyLoading: true,
        onLeave: function (index, nextIndex, direction) {
          $('.section').find('.amt').each(function(index, elem) {
            var amt = $(elem).attr('amt');
            $(elem).removeClass(amt);
          })

          $('.section').eq(nextIndex-1).find('.amt').each(function(index, elem) {
            var amt = $(elem).attr('amt');
            $(elem).addClass(amt)
          })
        }
      });
    });
  </script>
