//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    inputText:''
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },

  buttonClick:function(e){
    if(this.data.inputText==''){
      this.data.inputText='hello2'
    }
    this.setData({
      motto:this.data.inputText
    })
    var str='成功'
    str+=this.data.inputText
    wx.showToast({
  title: str,
  icon: 'success',
  duration: 2000
})
  },

  buttonScan:function(){
    wx.scanCode({
      success: function(res){
        // success
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
  },

  inputMethod:function(e){
    this.setData({
      inputText:e.detail.value
    })

  }

})
