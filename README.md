# cordova-qdc-alipay

此Cordova插件调用支付宝移动客户端接口以进行支付动作，服务器端需要先处理订单数据，在返回带签名的支付参数后才可调用接口进行支付。

## 安装

首先，安装此插件：

```
# 进入项目目录后，使用以下命令进行此插件的安装
$ cordova plugin add https://github.com/Santino-Wu/cordova-qdc-alipay.git

# 如若项目使用ionic框架进行开发的话，可以使用ionic-cli提供的命令行工具代替上面的命令
$ ionic plugin add https://github.com/Santino-Wu/cordova-qdc-alipay.git
```

> 关于ionic-cli，详情请参阅此[链接地址](http://ionicframework.com/docs/cli/)。

其次，添加项目所需要支持的平台（仅支持iOS和Android）。

```
# 此处PlATFORM_NAME可以是ios或android
$ cordova platform add [PlATFORM_NAME]

# 同样的，如果使用ionic的话，使用以下这一命令代替以上的命令亦可
$ ionic platform add [PlATFORM_NAME]
```

## 使用

此Fork版本简化了API的调用：

```js
/**
 * @param {String} payInfo - 由服务器返回的，带签名的支付参数
 * @param {Funciton} successFn - 接口调用成功时的回调方法
 * @param {Funciton} failureFn - 接口调用失败时的回调方法
 * @description 启动支付
 */
alipay.pay(payInfo, successFn, failureFn);
```

> 1. 为保证接口调用成功，请确保`payInfo`参数格式正确，例如：`partner="2088101568358171"&seller_id="xxx@alipay.com"&out_trade_no="0819145 412-6177"&subject="测试"&body="测试测试 "&total_fee="0.01"&notify_url="http://notify.msp.hk/notify.htm"&service="mobile.securi typay.pay"&payment_type="1"&_input_charset="utf-8"&it_b_pay="30m"&sign="lBBK %2F0w5LOajrMrji7DUgEqNjIhQbidR13GovA5r3TgIbNqv231yC1NksLdw%2Ba3JnfH XoXuet6XNNHtn7VE%2BeCoRO1O%2BR1KugLrQEZMtG5jmJIe2pbjm%2F3kb%2F uGkpG%2BwYQYI51%2BhA3YBbvZHVQBYveBqK%2Bh8mUyb7GM1HxWs9k4%3D "&sign_type="RSA"`；

> 2. 请注意，在Android版本中，经测试，如果用户取消支付操作，那么在下一次调用接口时将直接返回失败，故取消了对支付宝认证账户是否存在的检查。
