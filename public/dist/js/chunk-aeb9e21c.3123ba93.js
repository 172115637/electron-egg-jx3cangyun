(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aeb9e21c"],{"1b3d":function(t,n,e){},"5bda":function(t,n,e){"use strict";e.r(n);var c=function(){var t=this,n=t._self._c;return n("div",{attrs:{id:"app-base-screen"}},[t._m(0),n("div",{staticClass:"one-block-2"},[n("a-space",[n("a-button",{on:{click:function(n){return t.getScreen(0)}}},[t._v("获取当前鼠标位置")]),n("a-button",{on:{click:function(n){return t.getScreen(1)}}},[t._v("获取主屏幕")]),n("a-button",{on:{click:function(n){return t.getScreen(2)}}},[t._v("获取所有屏幕")])],1)],1),t._m(1),n("div",{staticClass:"one-block-2"},[n("a-descriptions",{attrs:{title:""}},t._l(t.data,(function(e,c){return n("a-descriptions-item",{key:c,attrs:{label:e.title}},[t._v(" "+t._s(e.desc)+" ")])})),1)],1)])},a=[function(){var t=this,n=t._self._c;return n("div",{staticClass:"one-block-1"},[n("span",[t._v(" 1. 屏幕信息 ")])])},function(){var t=this,n=t._self._c;return n("div",{staticClass:"one-block-1"},[n("span",[t._v(" 结果： ")])])}],s=e("a358"),i={data(){return{data:[]}},mounted(){},methods:{getScreen(t){const n=this;this.$ipcInvoke(s["a"].getScreen,t).then(t=>{n.data=t})}}},o=i,r=(e("c651"),e("e607")),u=Object(r["a"])(o,c,a,!1,null,"10809a44",null);n["default"]=u.exports},c651:function(t,n,e){"use strict";e("1b3d")}}]);
//# sourceMappingURL=chunk-aeb9e21c.3123ba93.js.map