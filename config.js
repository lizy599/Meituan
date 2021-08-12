module.exports = {
    port: 3000,         //启动端口
    DB_URL: 'mongodb://127.0.0.1:27017/meituan',    //数据库地址
    notifyUrl: 'http://192.168.0.106:3000/v1/notify_url',      //支付异步通知地址
    synNotifyUrl: 'http://39.108.3.12',              //客户端同步跳转
    sessionStorageURL: 'mongodb://127.0.0.1:27017/session',   //数据库存放session地址
    Bucket: 'awdr',   //七牛云bucket
    AccessKey: 'Fl5wA3Cx-MureLzxiQtrySWjXzq2VVrljZw1F34Z',   //七牛云accessKey
    SecretKey: 'Y4BsHYyzrXQO9eHW5T5OeyN7pdqFhwct4LGV6OxK',    //七牛云secretKey
    tencentkey: 'VLJBZ-A42EJ-U3YF4-FEBWX-7RIT7-2EF3D',        //腾讯位置secreKey
    tencentkey2: 'VLJBZ-A42EJ-U3YF4-FEBWX-7RIT7-2EF3D',        //腾讯位置服务secreKey
    wechatAppid: '',  // 微信小程序appid
    wecahatSecret: '' // 微信小程序密钥
    
};


