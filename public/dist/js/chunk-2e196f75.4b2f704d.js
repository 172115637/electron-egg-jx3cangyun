(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e196f75"],{"149e":function(t,n,e){"use strict";e("7bc6")},"7bc6":function(t,n,e){},ae87:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t._self._c;return n("div",{attrs:{id:"app-base-window-view"}},[t._m(0),n("div",{staticClass:"one-block-2"},[n("a-space",[n("a-button",{on:{click:function(n){return t.loadViewContent(0)}}},[t._v("加载百度页面")]),n("a-button",{on:{click:function(n){return t.removeViewContent(0)}}},[t._v("移除百度页面")])],1)],1),t._m(1),n("div",{staticClass:"one-block-2"},[n("a-space",[n("a-button",{on:{click:function(n){return t.loadViewContent(1)}}},[t._v("加载html页面")]),n("a-button",{on:{click:function(n){return t.removeViewContent(1)}}},[t._v("移除html页面")])],1)],1)])},i=[function(){var t=this,n=t._self._c;return n("div",{staticClass:"one-block-1"},[n("span",[t._v(" 1. 嵌入web内容 ")])])},function(){var t=this,n=t._self._c;return n("div",{staticClass:"one-block-1"},[n("span",[t._v(" 2. 嵌入html内容 ")])])}],c=e("a358"),s={data(){return{views:[{type:"web",content:"https://www.baidu.com/"},{type:"html",content:"/public/html/view_example.html"}]}},methods:{loadViewContent(t){const n=this;n.$ipcInvoke(c["a"].loadViewContent,this.views[t]).then(t=>{console.log(t)})},removeViewContent(t){const n=this;n.$ipcInvoke(c["a"].removeViewContent,n.views[t]).then(t=>{console.log(t)})}}},a=s,l=(e("149e"),e("e607")),u=Object(l["a"])(a,o,i,!1,null,"113436ad",null);n["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2e196f75.4b2f704d.js.map