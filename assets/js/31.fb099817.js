(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{369:function(a,e,s){"use strict";s.r(e);var t=s(9),r=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"yarn报-文件名、目录名或卷标语法不正确-错误的解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yarn报-文件名、目录名或卷标语法不正确-错误的解决方案"}},[a._v("#")]),a._v(" yarn报“文件名、目录名或卷标语法不正确”错误的解决方案")]),a._v(" "),s("p",[a._v("这个坑折腾了好久，为了避免之后再踩，在这里记录下。")]),a._v(" "),s("h4",{attrs:{id:"_1、问题描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、问题描述"}},[a._v("#")]),a._v(" 1、问题描述")]),a._v(" "),s("p",[a._v("在运行"),s("code",[a._v("yarn create vuepress")]),a._v("时报错：文件名、目录名或卷标语法不正确\n"),s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/3/31/171313b7998fa0e5?w=697&h=140&f=png&s=21741",alt:""}})]),a._v(" "),s("p",[a._v("我一开始以为是vuepress的问题，后来上网看文章发现vue、umi等也会出现这个问题，所以这个应该就是yarn的问题。")]),a._v(" "),s("h4",{attrs:{id:"_2、踩坑过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、踩坑过程"}},[a._v("#")]),a._v(" 2、踩坑过程")]),a._v(" "),s("p",[a._v("根据Command的提示，去到指定目录（我的是'D:\\02-install\\node.js\\node_global\\bin'）下，找到文件create-vuepress.cmd，其中内容如下：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('@"%~dp0\\C:\\Users\\18813\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\.bin\\create-umi.cmd"   %*\n')])])]),s("p",[a._v("大概就是这里的问题了，这个路径有问题，在windows系统下，盘符前哪里还需要什么“%~dp0” 符号，所以将 C: 盘符前的符号删了，如下：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('@"C:\\Users\\18813\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\.bin\\create-umi.cmd"   %*\n')])])]),s("p",[a._v("保存后再运行"),s("code",[a._v("yarn create vuepress")]),a._v("，还是报同样的错误：文件名、目录名或卷标语法不正确。再去查看文件create-vuepress.cmd的内容，发现内容还是带有“%~dp0”，于是就报了同样的错了。")]),a._v(" "),s("p",[a._v("别慌，这个是因为修改了create-vuepress.cmd之后，运行"),s("code",[a._v("yarn create vuepress")]),a._v("之后会重新安装一次，然后就把改的文件覆盖了。")]),a._v(" "),s("p",[a._v("网上文章还有解决方案：在修改后，将create-vuepress.cmd所在文件夹路径（我的是‘D:\\02-install\\node.js\\node_global\\bin’）加入到系统环境变量path中，之后再运行对应命令即可。")]),a._v(" "),s("p",[a._v("大部分文章到这里都说已经解决了，也确实是解决了，但是我的依然报“文件名、目录名或卷标语法不正确”错误，已经奋战到深夜两点的我心好累。。。")]),a._v(" "),s("h3",{attrs:{id:"_3、终极解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、终极解决方案"}},[a._v("#")]),a._v(" 3、终极解决方案")]),a._v(" "),s("p",[a._v("第二天晚上下班回来继续战斗，再查阅很多很多资料文章后发现，原来是因为我电脑的"),s("strong",[a._v("yarn目录和安装的模块不在相同的硬盘分区里")]),a._v("导致的，而到上面那步就解决问题的应该是因为yarn默认安装在C盘（即运行缓存数据和安装目录都在C盘）了。")]),a._v(" "),s("p",[a._v("知道原因，那么问题就很好解决了：")]),a._v(" "),s("p",[a._v("首先查看 yarn 命令的目录：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("yarn global bin\n")])])]),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/4/1/171316181a79ea27?w=736&h=51&f=png&s=8418",alt:""}}),a._v("\n再查看yarn的全局安装位置：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("yarn global dir\n")])])]),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/4/1/17131633b0986ca0?w=717&h=47&f=png&s=9757",alt:""}}),a._v("\n结果发现，yarn 的全局安装位置与bin的位置并不一致，于是去修改 yarn的全局安装位置和缓存位置：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('yarn config set global-folder "D:\\02-install\\yarn\\global"\nyarn config set cache-folder "D:\\02-install\\yarn\\cache"\n')])])]),s("p",[a._v("注意：建议不要放在node的文件夹里，将其放在另一个文件夹，否则会影响node安装的全局命令使用。")]),a._v(" "),s("p",[a._v("再次运行"),s("code",[a._v("yarn create vuepress")]),a._v("，终于成功运行：\n"),s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/4/1/17131677276b8291?w=1170&h=366&f=png&s=61481",alt:""}}),a._v("\n至此，我的问题终于解决，希望我的解决方案对你有所帮助。")])])}),[],!1,null,null,null);e.default=r.exports}}]);