/**
 * Describe: mongoose 暴露 db 给 Schema 结构用
 * Created by ZhuYuan on 2017-04-05 23:09
 */

function l(n) {
    console.log(n);
}

// mongoose 链接
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var db       = mongoose.createConnection('mongodb://127.0.0.1:27017/haha');

module.exports = db;

db.once("open",function(callback){
    l("数据库打开成功");
});

db.on("error", function(error) {
    l(error);
});