# 原型链继承基础

此继承关系可在使用了一段时间的 ES||TS 后再来了解

建议在图片上右键，选择查看图片，以放大查看该图片
<img :src="$withBase('/start/prototype.png')" alt="图片未显示"></center>

图中，实线双箭头代表连着等价，是同一个东西
虚线代表继承关系，从原型指向继承者

需要指出的有趣的地方：

- `Math是个对象`

- `[Object,Function,String,Array,Boolean,Number,Symbol,Date,Blob,Map,Set]`都是函数

- `Object.prototype.__proto__==null`为`true`，`Object.prototype`继承自 `null`，这里是继承的根节点
- `[Function,String,Array,Boolean,Number,Symbol,Date,Blob,Map,Set].every((ele)=>{return ele.prototype.__proto__==Object.prototype})`为`true`,即它们都继承自继承自`Object.prototype`

- `[Object,Function,String,Array,Boolean,Number,Symbol,Date,Blob,Map,Set].every((ele)=>{return ele.__proto__==Function.prototype})`为`true`，即它们都继承自`Function.prototype`

- `[Object,Function,String,Array,Boolean,Number,Symbol,Date,Blob,Map,Set].every((ele)=>{return ele.constructor==Function})`为`true`，即它们的构造函数都是`Function`
