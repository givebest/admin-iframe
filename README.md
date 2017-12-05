## 项目说明

本着快捷、易上手、可维护等开发原则，本项目使用 `iframe` 来加载内容页（避免 `jQuery.load()` 会出现重复 `ID` 、JS 不能模块化等缺陷），使用 `require.js` 实现 JS 模块化开发， 引入  `jQuery.js` ，  引入 `iframeResizer.js` 实现 `iframe` 自适应高度，引入 `director.js` 实现路由功能，引入  `art-template.js` 实现模板功能。


## 目录

```
├── CSS                      # CSS 
│   ├── admin.css   
│   └── bootstrap.min.css
├── View                      # 视图
│   ├── admin.html   
│   └── login.html
├── JS                        # JS
│   └── lib                   # JS模块、库
│   ├   └── jquery.js         
│   └── common.js             # 公用模块封装  
│   └── admin.js              # view 目录 admin.html 引用  
│   └── login.js                         
```


## 使用了

###  JS

#### JS模块化 (require.js)

* 仓库：[https://github.com/requirejs/requirejs](https://github.com/requirejs/requirejs)

#### 模板 (art-template.js)

* 仓库：[https://github.com/aui/art-template](https://github.com/aui/art-template)
* 文档：[https://aui.github.io/art-template/zh-cn/index.html](https://aui.github.io/art-template/zh-cn/index.html)

#### 路由 (director.js)

* 仓库： [https://github.com/flatiron/director](https://github.com/flatiron/director)

#### iframe 自适应调试 (iframeResizer.js)

* 仓库：[https://github.com/davidjbradshaw/iframe-resizer](https://github.com/davidjbradshaw/iframe-resizer)


## License

[GPL-3.0](./LICENSE) © 2017 [givebest](https://github.com/givebest)