
```less

/* 水平垂直居中 */

// 1. 绝对居中定位
// 不仅可以实现在正中间，还可以在正左方，正右方
// 元素的宽高支持百分比 % 属性值和 min-/max- 属性
// 可以封装为一个公共类，可做弹出层
// 浏览器支持性好
div
{
    position: fixed;
    //absolute is ok
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    width: 100px;
    height: 100px;
    margin: auto;
}

// 2. 负边距居中
// 良好的跨浏览器特性,兼容 IE6 - IE7
// 灵活性差，不能自适应，宽高不支持百分比尺寸和 min-/max- 属性
.child
{
    position: absolute;
    top: 50%;
    left: 50%;

    width: 100px;
    height: 100px;
    margin-top: -50px;
    margin-left: -50px;
}

// 3. Transform 定位
// 内容可自适应，可以封装为一个公共类，可做弹出层
// 可能干扰其他 transform 效果
.child
{
    position: absolute;
    top: 50%;
    left: 50%;

    width: 100px;
    height: 100px;

    transform: translate(-50%, -50%);
}



// 4. Flexbox 布局
// 这是 CSS 布局未来的趋势。Flexbox 是 CSS3 新增属性，
// 设计初衷是为了解决像垂直居中这样的常见布局问题。
// 4.1
.parent
{
    display: flex;

    justify-content: center;
    align-items: center;
}
// 4.2 display:flex + margin:auto
.parent
{
    display: flex;
}

.child
{
    width: 100px;
    height: 100px;
    margin: auto;
}

// 5. table-cell 居中
// 适用于子元素 display 为 inline-block, inline 类型的元素，
// 需要已知父元素的宽高，且父元素的宽高不能设为百分比数。
.parent
{
    display: table-cell;

    width: 200px;
    height: 200px;

    text-align: center;
    vertical-align: middle;

    border: 1px solid red;
}
.child
{
    display: inline-block;

    width: 100px;
    height: 100px;

    background-color: #03f;
}

// 6. font-size 配合 vertical-align 实现垂直居中
// 该方法的要点是给父元素设一个合适的 font-size 的值，
// 这个值的取值为该父元素的高度除以 1.14 得到的值，
// 并且子元素必须 是一个 inline 或 inline-block 元素，
// 需要加上 vertical-align: middle 属性。使用这种方法，
// 子元素的宽度或高度都不必知道。
.parent
{
    font-size: 175.4px;

    height: 200px;

    text-align: center;
}

.child
{
    font-size: 12px;

    display: inline-block;

    width: 50px;
    height: 50px;

    vertical-align: middle;

    background-color: #00f;
}

// 7. 文本内容居中
.text
{
    line-height: 100px;

    height: 100px;

    text-align: center;
}

// 8. display:table-cell的原因，IE6\7不兼容

.parent
{
    display: table-cell;

    width: 200px;
    height: 200px;

    text-align: center;
    vertical-align: middle;
}
.child
{
    display: inline-block;

    width: 100px;
    height: 100px;

    vertical-align: middle;
}

// 9. 兼容低版本浏览器，不固定宽高
/*
   html
    <div class="table">
		<div class="tableCell">
			<div class="content">不固定宽高，自适应</div>
		</div>
	</div>
*/
.table
{
    position: relative;

    display: table;
    float: left;

    width: 200px;/*宽度值不能少*/
    height: 200px;/*高度值不能少*/

    background: yellow;
}

.tableCell
{
    display: table-cell;

    text-align: center;
    vertical-align: middle;

    *position: absolute;
    *top: 50%;
    *left: 50%;
}
.content
{
    *position: relative;
    *top: -50%;
    *left: -50%;
}

```
