// pages/swiper/swiper.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   imgUrls:[
     "/pages/image/lunbo1.jpg",
     "/pages/image/lunbo2.jpg",
     "/pages/image/lunbo3.jpg"
   ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var array=this.initData();
    this.setData({array:array});
    var shuju=this.shuData();
    this.setData({shuju:shuju})
  },
  initData:function(){
    var array=[];
    var object1=new Object();
    object1.img='../image/yi.jpg';
    object1.title='现代简约';
    object1.type='现代简约风格注重细节的展现。';
  
    array[0]=object1;

    var object2 = new Object();
    object2.img = '../image/er.jpg';
    object2.title = '中式传统';
    object2.type = '中式风格体现出一种宁静雅致的氛围。';
    
    array[1] = object2;

    var object3 = new Object();
    object3.img = '../image/san.jpg';
    object3.title = '地中海风';
    object3.type = '地中海风格将大海边的美景放在家里。';
    array[2] = object3;
    
   
    return array;
  },
  shuData:function(){
    var shuju=[];
    var object1=new Object();
    object1.img='../image/nan2.jpg';
    object1.title='黄志达';
    object1.type='香港知名室内设计师';
  
    shuju[0]=object1;

    var object2 = new Object();
    object2.img = '../image/nan.jpg';
    object2.title = '梁志天';
    object2.type = '香港十大著名设计师之一';
    
    shuju[1] = object2;

    var object3 = new Object();
    object3.img = '../image/nv.jpg';
    object3.title = '王薇薇';
    object3.type = '著名华裔设计师';
    shuju[2] = object3;

    var object4= new Object();
    object4.img = '../image/nan3.jpg';
    object4.title = 'Thomas Pheasant';
    object4.type = '获得诸多奖项的室内设计师';
    shuju[3] = object4;
   
    return shuju;
  },
  mychange(event){
   console.log(event)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})