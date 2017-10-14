1. 超链接访问过后hover样式就不出现的问题 
被点击访问过的超链接样式不在具有hover和active了,很多人应该都遇到过这个问题,解决方法是改变CSS属性的排列顺序: L-V-H-A 
```css
a:link {}  
a:visited {}  
a:hover {}  
a:active {}  
```
 
2. ff下为什么父容器的高度不能自适应 
在子容器加了浮动属性后,该容器将不能自动撑开,解决方法是在标签结束后加上一个清除浮动的元素。 clear:both; 
 
3. IE6的双倍边距BUG
浮动后本来外边距10px,但IE解释为20px,解决办法是加上 display: inline 
 
4. IE6下图片下方有空隙产生 
解决这个BUG的方法也有很多,可以是改变html的排版,或者设置img 为display:block
或者设置vertical-align 属性为vertical-align:top bottom middle text-bottom都可以解决.

5. IE6下两个层中间有间隙 
这个IE的3PX BUG也是经常出现的,解决的办法是给.right也同样浮动 float:left 或者相对IE6定义.left margin-right:-3px;

6. list-style-image无法准确定位
list-style-image的定位问题也是经常有人问的,解决的办法一般是用li的背景模拟,这里采用相对定位的方法也可以解决。

7. LI中内容超过长度后以省略号显示的方法 
```css
.overHide {
    overflow: hidden;

    white-space: nowrap;
    text-overflow: ellipsis;

    -o-text-overflow: ellipsis;
}   
```

8. 如何对齐文本与文本输入框 
加上 vertical-align:middle; 


9. FF下面不能水平居中呢  
FF下面设置容器的左右外补丁为auto就可以了

10. 为什么web标准中IE无法设置滚动条颜色了
解决办法是将body换成html 
```css
html
{
    scrollbar-face-color: #f6f6f6;
    scrollbar-highlight-color: #fff;
    scrollbar-shadow-color: #eee;
    scrollbar-3dlight-color: #eee;
    scrollbar-arrow-color: #000;
    scrollbar-track-color: #fff;
    scrollbar-darkshadow-color: #fff;
}

```
11. IE6无法定义1px左右高度的容器 
IE6下这个问题是因为默认的行高造成的,解决的方法也有很多,例如: overflow:hidden zoom:0.08 line-height:1px 

12. 怎么样才能让层显示在FLASH之上呢
解决的办法是给FLASH设置透明 
 

13. ie6.0横向margin加倍
产生因素：块属性、float、有横向margin。
解决方法：display：inline；

14. ie6.0下默认有行高

解决方法：overflow:hidden;或font-size:0;或line-height：xx px；
15. 在各个浏览器下img有空隙(原因是：回车。)
解决方法:让图片浮动。

16. Ie6下，不识别最大宽、高度和最小宽高度，意即min-width/height和 Max-width/height在ie6中没效果，

解决方法：(1)：.abc{border:1px blue solid;width:200px;height:200px;}
                          html>body .abc{width:auto;height:auto;min-width:200px;min-height:200px;}
        (2)：.abc{width:200px;height:200px;_width:200px;_height:200px;}（因为ie6有一个特征，当定义一个高度时，如果内容超过高度，元素会自动调整高度。）
17. Ie6里面：如li设宽、高，并且li里面的标签浮动，那么li之间会有间距

解决方法：li不设宽、高或者li内的标签不浮动

18.  li之间有间距
解决方法：li 设置vertical-align:middle;

19. 当定义行内元素为包含框时，且包含框包含的绝对定位元素以百分比为单位进行定位时，会出现混乱。
解决方法：在行内元素里加入{zoom：1；}

20. 当多个浮动元素中间夹杂着HTML注释语句时，如果浮动元素宽度为100%，则在下一行多显示一个上一行最后一个字符。
解决办法：给浮动元素添加display:inline;。
    
21. opacity 定义元素的不透明度
filter：alpha（opacity=80）；/*ie支持该属性*/
opacity：0.8；/*支持css3的浏览器*/

22. 两个块元素，竖向的margin值不增加，会重叠，其间距为最大margin值。

23. 优先级：被!important 注明的css属性具有最高优先级(.abc{color:red !important;})。但在ie6中!important具有一个bug:在同一组css属性中，!important不起作用。

24. 火狐不识别background-position-y 或background-position-x;

25. z-index不起作用的 bug

1）ie6下 首先讲讲第一种z-index无论设置多高都不起作用情况。这种情况发生的条件有三个：1、父标签position属性为relative；2、问题标签含有浮动(float)属性。
2）所有浏览器：它只认第一个爸爸
层级的高低不仅要看自己，还要看自己的老爸这个后台是否够硬。用术语具体描述为：
父标签position属性为relative或absolute时，子标签的absolute属性是相对于父标签而言的。而在IE6下，层级的表现有时候不是看子标签的z-index多高，而要看它们的父标签的z-index谁高谁低。

26. ie各个版本hack
```css
/* 条件注释法 */
/*
    只在IE下生效
	<!--[if IE]> 这段文字只在IE浏览器显示 <![endif]-->
    <!--[if ! IE 8]> 这段文字在非IE8浏览器显示 <![endif]-->
    <!--[if gte IE 6]> 这段文字只在IE6以上(包括)版本IE浏览器显示 <![endif]-->
*/
/* 类内属性前缀法 */
.hack {
    background-color: red;
    /* All browsers */
    background-color: blue !important;
    /* All browsers but IE6 */
    *background-color: black;
    /* IE6, IE7 */
    +background-color: yellow;
    /* IE6, IE7*/
    background-color: gray\9;
    /* IE6, IE7, IE8, IE9, IE10 */
    background-color: purple\0;
    /* IE8, IE9, IE10 */
    background-color: orange\9\0;
    /*IE9, IE10*/
    _background-color: green;
    /* Only works in IE6 */
    *+background-color: pink;
    /* Only works in IE7 */
}
/* 选择器前缀法 */
*html .header
{
    /*IE6*/
}
* + html .header
{
    /*IE7*/
}

```

 

