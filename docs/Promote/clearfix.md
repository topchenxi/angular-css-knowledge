#### 一、清除浮动 or 闭合浮动 ？


1. 清除浮动：清除对应的单词是 clear，对应CSS中的属性是 clear：left | right | both | none。
2. 闭合浮动：更确切的含义是使浮动元素闭合，从而减少浮动带来的影响。

> 结论：用闭合浮动比清除浮动更加严谨，所以后文中统一称之为：闭合浮动。

#### 二、为何要闭合浮动？

CSS中的定位机制：普通流，浮动，绝对定位 。

1. 普通流：（normal flow)，或者称之为常规流
2. 浮动：浮动的框可以左右移动，直至它的外边缘遇到包含框或者另一个浮动框的边缘。浮动框不属于文档中的普通流，当一个元素浮动之后，不会影响到块级框的布局而只会影响内联框（通常是文本）的排列，文档中的普通流就会表现得和浮动框不存在一样，当浮动框高度超出包含框的时候，也就会出现包含框不会自动伸高来闭合浮动元素（“高度塌陷”现象）。
3. 绝对定位

> 正是因为浮动的这种特性，导致本属于普通流中的元素浮动之后，包含框内部由于不存在其他普通流元素了，也就表现出高度为0（高度塌陷）。在实际布局中，往往这并不是我们所希望的，所以需要闭合浮动元素，使其包含框表现出正常的高度。


三、闭合浮动

- 添加额外标签。通过在浮动元素末尾添加一个空的标签

```html
<div style="clear:both;"> </div>
```

```html
<div class="demo">
    <h2>1）添加额外标签</h2>
    <div style="float:left;">.main{float:left;}</div>
    <div style="float: right;">.side{float:right;}</div>
    <div style="clear:both;"> </div>
</div>
```

> 优点：通俗易懂，容易掌握。

> 缺点：可以想象通过此方法，会添加多少无意义的空标签。

- 使用 br标签和其自身的 html属性 br 有 clear=“all | left | right | none” 属性


```html
<div class="demo">
    <h2>2）使用 br标签和其自身的 html属性</h2>
    <div style="float:left;">.main{float:left;}</div>
    <div style="float: right;">.side{float:right;}</div>
    <br clear="all"/>
</div>
```

>  优点：比空标签方式语义稍强，代码量较少

>  缺点：同样有违结构与表现的分离，不推荐使用

- 父元素设置 overflow：hidden

通过设置父元素overflow值设置为hidden
在IE6中还需要触发 hasLayout ，例如 zoom：1；


```html
<div class="demo" style="overflow:hidden; *zoom:1;">
    <h2>3)父元素设置 overflow</h2>
    <div style="float:left;">.main{float:left;}</div>
    <div style="float: right;">.side{float:right;}</div>
</div>
```
> 优点：不存在结构和语义化问题，代码量极少

> 缺点：内容增多时候容易造成不会自动换行导致内容被隐藏掉，无法显示需要溢出的元素；04年POPO就发现overflow:hidden会导致中键失效，作为一个多标签浏览控所不能接受的。了

- 父元素设置 overflow：auto 属性

同样IE6需要触发hasLayout，演示和3差不多

> 优点：不存在结构和语义化问题，代码量极少

> 缺点：多个嵌套后，firefox某些情况会造成内容全选；IE中 mouseover 造成宽度改变时会出现最外层模块有滚动条等，firefox早期版本会无故产生focus等, 请看 嗷嗷的 Demo ,不要使用

- 父元素也设置浮动

> 优点：不存在结构和语义化问题，代码量极少

> 缺点：使得与父元素相邻的元素的布局会受到影响，不可能一直浮动到body，不推荐使用

- 父元素设置display:table

```html
<div class="demo" style="display:table;">
    <h3>6）父元素设置display:table</h3>
    <div style="float: left;">.main{float:left;}</div>
    <div style="float: right;">.side{float:right;}</div>
</div>
```

> 优点：结构语义化完全正确，代码量极少

> 缺点：盒模型属性已经改变，由此造成的一系列问题，得不偿失，不推荐使用

7）使用:after 伪元素
需要注意的是 :after是伪元素（Pseudo-Element），不是伪类（某些CSS手册里面称之为“伪对象”），很多闭合浮动大全之类的文章都称之为伪类，不过csser要严谨一点，这是一种态度。
由于IE6-7不支持:after，使用 zoom:1触发 hasLayout。


```css
/*方法一*/
/*
	相对于空标签闭合浮动的方法代码似乎还是有些冗余，通过查询发现Unicode字符里有一个"零宽度空格"，
	也就是U+200B ，这个字符本身是不可见的，所以我们完全可以省略掉 visibility:hidden了
*/
.clearfix:after
{
    display: block;
    clear: both;

    height: 0;

    content: '200B';
}
.clearfix
{
    *zoom: 1;
}

/*方法二*/

.clearfix:before,
.clearfix:after
{
    display: table;

    content: '';
}
.clearfix:after
{
    clear: both;
}

.clearfix
{
    *zoom: 1;
}
```

> 优点：结构和语义化完全正确,代码量居中

> 缺点：复用方式不当会造成代码量增加