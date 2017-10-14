
```less
/* 垂直居中元素 */
// 方式一：CSS3 transform
// 通用方法，元素的宽高未知
.parent
{
    position: relative;
}
.child
{
    position: absolute;
    top: 50%;

    transform: translateY(-50%);
}

// 方式二：Flex 布局
// 通用方法，元素的宽高未知
// 适用于子元素为浮动，绝对定位，内联元素，均可垂直居中。
.parent
{
    display: flex;

    align-items: center;
}

// 方式三：居中元素为单行文本
.text
{
    line-height: 200px;

    height: 200px;
}

// 方式四
// 已知元素宽高
// 1.
.parent
{
    position: relative;
}
.child
{
    position: absolute;
    top: 50%;

    height: 100px;
    margin-top: -50px;
}

// 2.
.parent
{
    position: relative;
}
.child
{
    position: absolute;
    top: 0;
    bottom: 0;

    height: 100px;
    margin: auto 0;
}
```
