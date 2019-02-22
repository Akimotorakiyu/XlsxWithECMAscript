import axios from "axios";

async function 获取新闻() {
  let 回应 = await axios.post("http://govapi.pinza.com.cn/newsList", {
    skip: 0,
    limit: 3
  });
  console.log(回应.data);
}

获取新闻();
