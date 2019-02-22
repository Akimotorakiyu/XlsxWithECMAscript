# axios

## 官方文档

[axios](https://github.com/axios/axios)

## 使用实践

使用之前需要先安装，在控制台输入`npm i axios`

### get 请求

```js
import axios from "axios";

async function 获取新闻() {
  let 回应 = await axios.get("http://govapi.pinza.com.cn/newsList");
  console.log(回应.data);
}

获取新闻();
```

列表太长，以至于截图中无法看到 count

<center><img :src="$withBase('/net/get.png')" alt="图片未显示"></center>

### post 请求

```js
import axios from "axios";

async function 获取新闻() {
  let 回应 = await axios.post("http://govapi.pinza.com.cn/newsList", {
    skip: 0,
    limit: 3
  });
  console.log(回应.data);
}

获取新闻();
```

列表只有 3 个，看到最后的 count 25

<center><img :src="$withBase('/net/post.png')" alt="图片未显示"></center>
