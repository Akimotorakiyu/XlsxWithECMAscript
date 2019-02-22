# 网络

首先打开你的浏览器，在网址里面输入`http://govapi.pinza.com.cn/newsList`，然后回车
它出现的页面应该类似于这样
<img :src="$withBase('/net/browser.png')" alt="图片未显示">
我们来看一下，发生了什么。

1. 浏览器会查询`govapi.pinza.com.cn`的 IP 地址`47.100.164.130`。

(`govapi.pinza.com.cn`类似于`品宅装饰科技`，`IP地址47.100.164.130`类似于`品宅装饰科技的具体地址:上海桂林路诚达创意产业园310室`)

2. 浏览器向`govapi.pinza.com.cn`询问`/newsList`，然后`govapi.pinza.com.cn`返回给他相应的数据

其实，这和你访问`www.baidu.com`并没有什么区别。

接下来，我们将用程序完成这件事情，只需几行代码，非常的容易。
