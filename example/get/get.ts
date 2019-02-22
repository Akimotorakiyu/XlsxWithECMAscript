import axios from "axios";

async function 获取新闻() {
  let 回应 = await axios.get("http://govapi.pinza.com.cn/newsList");
  console.log(回应.data);
}

获取新闻();
