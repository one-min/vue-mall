var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// 定义一个Schema
var userSchema = new Schema({
  'userId':String,   // 或者 'userId':{type:String}
  'userName':String,
  'userPwd':String,
  'orderList':Array,
  'cartList':[           // 购物车列表
    {
      "productId":String,
      "productName":String,
      "salePrice":Number,
      "productImage":String,
      "checked":String,     // 是否选中
      "productNum":String  // 商品数量
    }
  ],
  "addressList":Array
})

// 输出(导出)
module.exports = mongoose.model('dumall_user',userSchema,'dumall_users');
