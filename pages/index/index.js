//index.js
//获取应用实例
const app = getApp()
const API=require('../../utils/api');
Page({
  data: {
    motto: '我爱查工资条',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    login:'/images/login.jpg'
  },
  onLoad: function () {
    var that = this;
        // 使用 Mock
        API.ajax('', function (res) {
            //这里既可以获取模拟的res
            console.log(res)
            that.setData({
                list:res.data
            })
        });
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }, 
  goLoginPageHome: function(e) {
    // if(validate()){
      wx.switchTab({
        url: "../home/home"
      })
    // }else{
    //   alert("登陆失败！");
    // }
   
  },
  validate:function(e){
    if(1==1){
      return true;
    }else{
      return false;
    }
  },
  formReset:function(){

  }

})