(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7800f518"],{"0570":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app-base-software-open"}},[e._m(0),t("div",{staticClass:"one-block-2"},[t("a-list",{attrs:{bordered:"","data-source":e.data},scopedSlots:e._u([{key:"renderItem",fn:function(n){return t("a-list-item",{on:{click:function(t){return e.openSoft(n.id)}}},[e._v(" "+e._s(n.content)+" "),t("a-button",{attrs:{type:"link"}},[e._v(" 执行 ")])],1)}}])})],1)])},o=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"one-block-1"},[t("span",[e._v(" 1. 调用其它软件（exe、bash等可执行程序） ")]),t("p"),t("span",{staticClass:"sub-content"},[e._v(" 注：请先将【powershell.exe】复制到【electron-egg/build/extraResources】目录中 ")])])}],a=n("a358");const r=[{content:"powershell.exe",id:"powershell.exe"}];var c={data(){return{data:r}},methods:{openSoft(e){const t=this;this.$ipcInvoke(a["a"].openSoftware,e).then(e=>{e||t.$message.error("程序不存在")})}}},i=c,l=(n("f8ff"),n("e607")),u=Object(l["a"])(i,s,o,!1,null,"4de0eec0",null);t["default"]=u.exports},ba44:function(e,t,n){},f8ff:function(e,t,n){"use strict";n("ba44")}}]);
//# sourceMappingURL=chunk-7800f518.7a09daf4.js.map