/**
 * Describe: mongoose demo
 * Created by ZhuYuan on 2017-04-05 23:17
 */
function l(n) {
    console.log(n);
}

var mongoose = require("./models/db.js");
var Student = require("./models/Student.js");
var me = new Student({
    name:"我",
    sex:"男",
    age:22
});
me.save(function(){
    l("save");
});