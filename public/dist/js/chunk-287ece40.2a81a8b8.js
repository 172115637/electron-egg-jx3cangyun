(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-287ece40"],{"022e":function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a._self._c;return t("div",{attrs:{id:"app-base-db"}},[a._m(0),t("div",{staticClass:"one-block-2"},[t("a-row",[t("a-col",{attrs:{span:8}},[a._v(" • 大数据量: 0-1024GB(单库) ")]),t("a-col",{attrs:{span:8}},[a._v(" • 高性能 ")]),t("a-col",{attrs:{span:8}},[a._v(" • 类mysql语法 ")])],1)],1),a._m(1),t("div",{staticClass:"one-block-2"},[t("a-row",[t("a-col",{attrs:{span:24}},[a._v(" "+a._s(a.all_list)+" ")])],1)],1),a._m(2),t("div",{staticClass:"one-block-2"},[t("a-row",[t("a-col",{attrs:{span:6}},[t("a-input",{attrs:{value:a.name,"addon-before":"姓名"},model:{value:a.name,callback:function(t){a.name=t},expression:"name"}})],1),t("a-col",{attrs:{span:3}}),t("a-col",{attrs:{span:6}},[t("a-input",{attrs:{value:a.age,"addon-before":"年龄"},model:{value:a.age,callback:function(t){a.age=t},expression:"age"}})],1),t("a-col",{attrs:{span:3}}),t("a-col",{attrs:{span:6}},[t("a-button",{on:{click:function(t){return a.sqlitedbOperation("add")}}},[a._v(" 添加 ")])],1)],1)],1),a._m(3),t("div",{staticClass:"one-block-2"},[t("a-row",[t("a-col",{attrs:{span:6}},[t("a-input",{attrs:{value:a.search_age,"addon-before":"年龄"},model:{value:a.search_age,callback:function(t){a.search_age=t},expression:"search_age"}})],1),t("a-col",{attrs:{span:3}}),t("a-col",{attrs:{span:6}}),t("a-col",{attrs:{span:3}}),t("a-col",{attrs:{span:6}},[t("a-button",{on:{click:function(t){return a.sqlitedbOperation("get")}}},[a._v(" 查找 ")])],1)],1),t("a-row",[t("a-col",{attrs:{span:24}},[a._v(" "+a._s(a.userList)+" ")])],1)],1),a._m(4),t("div",{staticClass:"one-block-2"},[t("a-row",[t("a-col",{attrs:{span:6}},[t("a-input",{attrs:{value:a.update_name,"addon-before":"姓名(条件)"},model:{value:a.update_name,callback:function(t){a.update_name=t},expression:"update_name"}})],1),t("a-col",{attrs:{span:3}}),t("a-col",{attrs:{span:6}},[t("a-input",{attrs:{value:a.update_age,"addon-before":"年龄"},model:{value:a.update_age,callback:function(t){a.update_age=t},expression:"update_age"}})],1),t("a-col",{attrs:{span:3}}),t("a-col",{attrs:{span:6}},[t("a-button",{on:{click:function(t){return a.sqlitedbOperation("update")}}},[a._v(" 更新 ")])],1)],1)],1),a._m(5),t("div",{staticClass:"one-block-2"},[t("a-row",[t("a-col",{attrs:{span:6}},[t("a-input",{attrs:{value:a.delete_name,"addon-before":"姓名"},model:{value:a.delete_name,callback:function(t){a.delete_name=t},expression:"delete_name"}})],1),t("a-col",{attrs:{span:3}}),t("a-col",{attrs:{span:6}}),t("a-col",{attrs:{span:3}}),t("a-col",{attrs:{span:6}},[t("a-button",{on:{click:function(t){return a.sqlitedbOperation("del")}}},[a._v(" 删除 ")])],1)],1)],1)])},n=[function(){var a=this,t=a._self._c;return t("div",{staticClass:"one-block-1"},[t("span",[a._v(" 1. sqlite本地数据库 ")])])},function(){var a=this,t=a._self._c;return t("div",{staticClass:"one-block-1"},[t("span",[a._v(" 2. 测试数据 ")])])},function(){var a=this,t=a._self._c;return t("div",{staticClass:"one-block-1"},[t("span",[a._v(" 3. 添加数据 ")])])},function(){var a=this,t=a._self._c;return t("div",{staticClass:"one-block-1"},[t("span",[a._v(" 4. 获取数据 ")])])},function(){var a=this,t=a._self._c;return t("div",{staticClass:"one-block-1"},[t("span",[a._v(" 5. 修改数据 ")])])},function(){var a=this,t=a._self._c;return t("div",{staticClass:"one-block-1"},[t("span",[a._v(" 6. 删除数据 ")])])}],l=e("a358"),o={data(){return{name:"李四",age:20,userList:["空"],search_age:20,update_name:"李四",update_age:31,delete_name:"李四",all_list:["空"]}},mounted(){this.getAllTestData()},methods:{getAllTestData(){const a=this,t={action:"all"};this.$ipcInvoke(l["a"].sqlitedbOperation,t).then(t=>{if(console.log("res:",t),0==t.all_list.length)return!1;a.all_list=t.all_list})},sqlitedbOperation(a){const t=this,e={action:a,info:{name:this.name,age:parseInt(this.age)},search_age:parseInt(this.search_age),update_name:this.update_name,update_age:parseInt(this.update_age),delete_name:this.delete_name};"add"==a&&0==this.name.length&&t.$message.error("请填写数据"),this.$ipcInvoke(l["a"].sqlitedbOperation,e).then(e=>{if(console.log("res:",e),"get"==a){if(0==e.result.length)return void t.$message.error("没有数据");t.userList=e.result}0!=e.all_list.length?(t.all_list=e.all_list,t.$message.success("success")):t.all_list=["空"]})}}},c=o,i=(e("ccf0"),e("e607")),r=Object(i["a"])(c,s,n,!1,null,"e8ac4bca",null);t["default"]=r.exports},"9af4":function(a,t,e){},ccf0:function(a,t,e){"use strict";e("9af4")}}]);
//# sourceMappingURL=chunk-287ece40.2a81a8b8.js.map