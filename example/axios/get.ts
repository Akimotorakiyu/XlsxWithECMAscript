import axios from "axios";

/** 新闻 */
interface news {
  /** _id，全球唯一 */
  _id: string;
  /** 标题 */
  name: string;
  /** 摘要 */
  summary: string;
  /** 图片列表，限制只有一张图片，索引只能取0 */
  photoList: string[];
  /** 日期为数字，需要转换为Date类型 */
  date: number;
  /** 文章对应的链接地址 */
  url: string;
  /** 作者 */
  author: string;
}

/** 新闻列表接口 */
interface newsList {
  /** 新闻总条数 */
  count: number;
  /** 真正的新闻列表 */
  data: news[];
}
async function 获取新闻() {
  let 回应 = await axios.get("http://govapi.pinza.com.cn/newsList");
  console.log(回应.data);
  let myNewsList = <newsList>回应.data;
}

获取新闻();
