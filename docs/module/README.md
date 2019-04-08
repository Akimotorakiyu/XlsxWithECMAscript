# 模块的黑历史

模块，我们就可以更方便地使用别人的代码，想要什么功能，就加载什么模块。

由于种种历史原因，ES （相比于其它工业级计算机语言）天生是一个残缺的计算机语言，但是它的职能（能灵活操纵 UI 是其他工业级计算机语言梦寐以求但是又难以得到的）和灵活的原型链机制注定他将茁壮成长。之后崛起的互联网崛起赋予了它无比强大的生命力。

由于历史上设计的原因，在历史潮流中 ES 拥有多种不同的模块化加载机制。

## 基础

> 浏览器 es 基础加载机制

> Node 与 CommonJS 加载机制

### 浏览器加载机制

浏览器将不同的 ES 语句放在 script 标签中，可以有多个标签，不同标签的 ES 语句在同一环境下运行，模块之间无隔离。

```html
<script>
  let a = 1;
</script>
<script>
  console.log(a); //可以正常访问到a
</script>
```

### Node 与 CommonJS 加载机制

Node 和 chrome 浏览器地层都是 google v8 执行 es, 但是由于 node 项目需要像其他计算机语言一样工程化（模块之间要隔离，只暴露出需要暴露的部分）

node 程序放在不同的文件里,用 require 函数加载模块。

```js
// modules.js
let a = 1;
modules.exports = {
  a: a
};
```

```js
let a = require("modules.js");
console.log(a);
```

require 函数会将 modules.js 里面的代码读取出来，然后包裹在一个参数为 modules 的函数代码里面，然后编译并传一个参数进去，编译执行完成后返回这个参数这样就完成了模块的导出

```js
function warp(code) {
  return `
    function (exports) {
      // 模块源码
      ${code}
    };
    `;
}

function runCode(warpedCode) {
  let module = {
    exports: undeined
  };
  compile(warpedCode, module);
  return module.exports;
}

function require(path) {
  let code = readFileSync(path);
  let warpedCode = warp(code);
  let exports = runCode(warpedCode);
  return exports;
}
```

### 通用加载 Browserify

为浏览器也做个像 CommonJS 下的模块包装函数，那么 node 的模块就能在浏览器端也能使用了。

## 演进

以下这俩，我现在都不用，只是给你看一下

> amd(Asynchronous Module Definition)
> cmd

### AMD

在服务端模块加载是同步的，而在浏览器上读取文件时间会很长，这回会导致浏览器卡顿。

AMD 就给模块包装函数参数中加一个 callback，模块加载完后，调用回调，完。

RequireJS 就是实现了 AMD 规范的包装函数。

### CMD

由于异步加载会导致，程序执行的顺序和写的顺序不一致，会导致起来没有明显的 bug

所以 CMD 执行模块的顺序也是严格按照模块在代码中出现(require)的顺序,完。

## modules 标准与兼容模式 UMD

> ES modules

> UMD 兼容模式

### ES modules

在混乱之后，ES6-ES2015 标准定制全新的了 modules 标准，坑爹呢是吧。
理论上，前后端要慢慢迎来统一

```js
// modules.js
let a=1
export a
```

```js
import { a } from "modules.js";
console.log(a);
```

然而现实是残酷的，[浏览器端不给实现（chrome、firefox 都没），甚至连计划都没有](https://www.caniuse.com/#search=import)

<center>
<img :src="$withBase('/module/ai.png')" alt="图片未显示"></center>

但是，这个时候，社区的 webpack 等打包工具支持了，然后又多了一堆配置

<center>
<img :src="$withBase('/module/ai.png')" alt="图片未显示"></center>

### UMD 兼容模式

一个模块为了多模式兼容，太难了。给个办法吧！这个时候有了 UMD 规范。

UMD 需要判断当前加载环境，然后根据环境来进行执行不同的导出策略。

## Typescript

TS 有额外的类型，所以，一个 js 模块还要针对不同的情况有不同的声明

这里是[7 种模板](https://www.tslang.cn/docs/handbook/declaration-files/templates.html)

<center>
<img :src="$withBase('/module/ai.png')" alt="图片未显示"></center>

> 使用 module-function.d.ts，如果模块能够作为函数调用

> 使用 module-class.d.ts 如果模块能够使用 new 来构造

> 如果模块不能被调用或构造，使用 module.d.ts 文件
