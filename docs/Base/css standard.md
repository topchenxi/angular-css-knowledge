### css规范

命名规则说明

*  所有的命名最好都小写
*  属性的值一定要用双引号("")括起来，且一定要有值如class="divcss5",id="divcss5"
*  每个标签都要有开始和结束，且要有正确的层次，排版有规律工整
*  空元素要有结束的tag或于开始的tag后加上"/"
*  表现与结构完全分离，代码中不涉及任何的表现元素，如style、font、bgColor、border等
*  h1到h5的定义，应遵循从大到小的原则，体现文档的结构，并有利于搜索引擎的查询。
*  给每一个表格和表单加上一个唯一的、结构标记id
*  给图片加上alt标签
*  尽量使用英文命名原则
*  尽量不缩写，除非一看就明白的单词


> 网页css 命名

#### 页面结构
` wrap ` -- 用于最外层
` header ` -- 用于头部
` loginBar ` -- 登录条
` main ` -- 用于主体内容（中部）
` nav ` -- 网页菜单导航条
` head ` ` header ` -- 页头部分
` foot ` ` footer ` -- 页脚部分
` container ` ` content `	-- 容器,用于最外层
` wrapper `	-- 页面外围控制整体布局宽度
` layout `	-- 布局

#### 导航
` nav `	-- 主导航
` subnav `	-- 二级导航
` menu `	-- 菜单
` submenu `	-- 子菜单
` sideBar `	-- 侧栏

#### 搜索
` search `	-- 搜索
` search_output `	-- 搜索输出和搜索结果相似
` searchBar `	-- 搜索条
` search_results `	-- 搜索结果

#### 功能
` current ` -- 当前的
` tips ` -- tips小技巧
` icon ` -- 图标
` note ` -- 注释
` tag `	-- 标签
` msg ` ` message `	-- 提示信息
` tips `	-- 小技巧
` vote `	-- 投票
` friendlink `	-- 友情连接
` title `	-- 标题
` summary `	-- 摘要
` loginbar `	-- 登录条
` searchInput `	-- 搜索输入框
` hot `	-- 热门热点
` copyright `	-- 版权信息
` branding `	-- 商标
` logo `	-- 网站LOGO标志
` siteinfo `	-- 网站信息
` siteinfoLegal `	-- 法律声明
` siteinfoCredits `	-- 信誉
` joinus `	-- 加入我们
` partner `	-- 合作伙伴
` service `	-- 服务
` regsiter ` -- 注册
` arr/arrow ` -- 箭头
` guild `	-- 指南
` sitemap `	-- 网站地图
` list `	-- 列表
` homepage ` -- 首页
` subpage `	-- 二级页面子页面
` tool, ` ` toolbar ` -- 工具条
` drop ` -- 下拉
` dorpmenu ` -- 下拉菜单
` status `	-- 状态
` scroll `	-- 滚动
` download ` -- 下载
` banner `	-- 广告条(顶部广告条)

> css 文件命名

` master.css ` ` main.css ` ` global.css ` -- 主要的
` layout.css ` -- 布局，版面
` columns.css ` -- 专栏
` font.css ` -- 文字
` print.css ` -- 打印样式 
` themes.css ` -- 主题

> less 文件名

` variables.less ` -- 变量
` base.less ` -- 按钮样式
` normalize.less ` -- 重置标签属性

代码性能优化
* 合并margin、padding、border的-left/-top/-right/-bottom的设置，尽量使用短名称。
  ```css
   .class {
     background:bg-color bg-image position/bg-size bg-repeat bg-origin bg-clip bg-attachment initial|inherit;
     /* 可以缩写为一句 */
     background: #f00 url(background.gif) no-repeat fixed 0 0;

    /* 可以缩写为一句*/
    font: italic small-caps bold 1em/140% 'Lucida Grande', sans-serif;
    
    font:font-style font-variant font-weight font-size/line-height font-family;
    
    }
  ```
* 选择器应该在满足功能的基础上尽量简短，减少选择器嵌套，查询消耗。但是一定要避免覆盖全局样式设置。
* 注意选择器的性能，不要使用低性能的选择器。
* 禁止在css中使用*选择符。
* 除非必须，否则，一般有class或id的，不需要再写上元素对应的tag。
* 0后面不需要单位，比如0px可以省略成0，0.8px可以省略成.8px。
* 如果是16进制表示颜色，则颜色取值应该大写。
* 如果可以，颜色尽量用三位字符表示，例如#AABBCC写成#ABC 。
* 如果没有边框时，不要写成border:0，应该写成border:none 。
* 尽量避免使用AlphaImageLoader 。
* 在保持代码解耦的前提下，尽量合并重复的样式。
* background、font等可以缩写的属性，尽量使用缩写形式 。
* CSS3属性：transform/transition/animation/box-shadow/border-radius
* 如果使用CSS3的属性，如果有必要加入浏览器前缀，则按照 -webkit- / -moz- / -ms- / -o- / std的顺序进行添加，标准属性写在最后。
* 链接的样式请严格按照如下顺序添加： a:link -> a:visited -> a:hover -> a:active
* 16进制的色彩值，如果每两位的值相同，可以缩写一半(＃000000可以缩写为＃000;＃336699可以缩写为＃369)