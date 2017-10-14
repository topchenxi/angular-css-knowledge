define(['../app'], function(app) {
    class Module {
        constructor(moduleId, moduleName, url, desc = "") {
            this.moduleId = moduleId;
            this.moduleName = moduleName;
            this.url = url;
            this.desc = desc;
            this.children = [];
        }
    }
    class Function {
        constructor(functionId, functionName, url, desc = "") {
            this.functionId = functionId;
            this.functionName = functionName;
            this.url = url;
            this.desc = desc;
        }
    }

    let list = [];

    let baseModule = new Module(1, 'Base', 'base', 'base Infomation');
    baseModule.children.push(new Function(1, 'center_all', 'base.center_all', '[元素居中] 水平垂直方向'));
    baseModule.children.push(new Function(2, 'center horizontally', 'base.horizontally', '[元素居中] 水平方向'));
    baseModule.children.push(new Function(3, 'center vetically', 'base.vetically', '[元素居中] 垂直方向'));
    baseModule.children.push(new Function(4, 'code segment-1', 'base.segment-1', '[代码段] 1. css常用代码'));
    baseModule.children.push(new Function(5, 'code segment-2', 'base.segment-2', '[代码段] 2. css常用代码'));
    baseModule.children.push(new Function(6, 'compatibility remind-1', 'base.remind-1', '[兼容性] 1.注意事项'));
    baseModule.children.push(new Function(7, 'compatibility remind-2', 'base.remind-2', '[兼容性] 2.注意事项'));
    baseModule.children.push(new Function(8, 'compatibility remind-3', 'base.remind-3', '[兼容性] 3.注意事项'));
    baseModule.children.push(new Function(9, 'css standard', 'base.standard', '[代码段] css规范'));
    baseModule.children.push(new Function(10, 'h5 css', 'base.h5Css', '[代码段] H5 表单元素美化'));
    list.push(baseModule);


    let promoteModule = new Module(2, 'Promote', 'promote', 'promote Infomation');
    promoteModule.children.push(new Function(1, 'clearfix', 'promote.clearfix', '[代码段] 清楚浮动'))
    promoteModule.children.push(new Function(1, 'flex', 'promote.flex', 'flex'))
    list.push(promoteModule);

    app.constant('menu', {
        list
    })
})