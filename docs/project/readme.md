# ES 项目

这部分会介绍 ES 项目的一些基础

如果你有问题，那是对的，不过我们先需要做完一些事情，再来思考。

## 初始化一个项目

1. 像往常一样，打开 vscode，打开控制台
2. 控制台输入`npm init`,然后一路回车

## 安装 xlsx

1. 控制台输入`npm install xlsx`,然后回车

## 撰写程序

首先放置一个`example.xlsx`

下面是我的 excel 文档，我随便写了点东西

<img :src="$withBase('/project/xlsx.png')" alt="图片未显示">

1. 新建`index.js`文件并打开
2. 复制黏贴以下代码到`index.js`文件并保存

```js
const XLSX = require("xlsx");

let 表格 = XLSX.readFile("./example.xlsx");

console.log(表格.SheetNames);
console.log(表格.Sheets);
console.log(表格.Props.Application);
console.log(表格.Props.AppVersion);
console.log(表格.Props.ModifiedDate);
console.log(表格.Props.Worksheets);
```

3.  控制台输入`node index.js`

控制台输出

<img :src="$withBase('/project/pro.png')" alt="图片未显示">
