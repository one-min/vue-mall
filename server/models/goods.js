//mongoose中任何事物都是从Schema开始的。每一个Schema对应MongoDB中的一个集合（collection）。
// Schema中定义了集合中文档（document）的样式。
var mongoose = require('mongoose')
var Schema = mongoose.Schema;
// 定义一个Schema
var dumall_goods_Schema = new Schema({
  "productId":{type:String},
  "productName":String,
  "salePrice":Number,
  "checked":String,
  "productNum":Number,
  "productImage":String
});
// 输出(导出).创造一个model.为了使用schema定义，我们需要转换blogSchema为一个Model。
module.exports = mongoose.model('dumall_good',dumall_goods_Schema,'dumall_goods');
