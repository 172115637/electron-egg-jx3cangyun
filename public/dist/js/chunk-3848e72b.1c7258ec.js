(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3848e72b"],{"32cc":function(n,s,e){},"8fb4":function(n,s,e){"use strict";e("32cc")},d44a:function(n,s,e){"use strict";e.r(s);var t=function(){var n=this,s=n._self._c;return s("div",{attrs:{id:"app-base-socket-ipc"}},[n._m(0),s("div",{staticClass:"one-block-2"},[s("a-space",[s("a-button",{on:{click:n.handleInvoke}},[n._v("发送 - 回调")]),n._v(" 结果："+n._s(n.message1)+" ")],1),s("p"),s("a-space",[s("a-button",{on:{click:n.handleInvoke2}},[n._v("发送 - async/await")]),n._v(" 结果："+n._s(n.message2)+" ")],1)],1),n._m(1),s("div",{staticClass:"one-block-2"},[s("a-space",[s("a-button",{on:{click:n.handleSendSync}},[n._v("同步消息")]),n._v(" 结果："+n._s(n.message3)+" ")],1)],1),n._m(2),s("div",{staticClass:"one-block-2"},[s("a-space",[s("a-button",{on:{click:n.sendMsgStart}},[n._v("开始")]),s("a-button",{on:{click:n.sendMsgStop}},[n._v("结束")]),n._v(" 结果："+n._s(n.messageString)+" ")],1)],1),n._m(3),s("div",{staticClass:"one-block-2"},[s("a-space",[s("a-button",{on:{click:function(s){return n.createWindow(0)}}},[n._v("打开新窗口2")]),s("a-button",{on:{click:function(s){return n.sendTosubWindow()}}},[n._v("向新窗口2发消息")])],1)],1)])},i=[function(){var n=this,s=n._self._c;return s("div",{staticClass:"one-block-1"},[s("span",[n._v(" 1. 发送异步消息 ")])])},function(){var n=this,s=n._self._c;return s("div",{staticClass:"one-block-1"},[s("span",[n._v(" 2. 同步消息（不推荐，阻塞执行） ")])])},function(){var n=this,s=n._self._c;return s("div",{staticClass:"one-block-1"},[s("span",[n._v(" 3. 长消息： 服务端持续向前端页面发消息 ")])])},function(){var n=this,s=n._self._c;return s("div",{staticClass:"one-block-1"},[s("span",[n._v(" 4. 多窗口通信：子窗口与主进程通信，子窗口互相通信 ")])])}],o=e("a358"),c={data(){return{messageString:"",message1:"",message2:"",message3:"",windowName:"window-1",newWcId:0,views:[{type:"vue",content:"/#/special/subwindow",windowName:"window-1",windowTitle:"new window"}]}},mounted(){this.init()},methods:{init(){const n=this;this.$ipc.removeAllListeners(o["a"].ipcSendMsg),this.$ipc.on(o["a"].ipcSendMsg,(s,e)=>{console.log("[ipcRenderer] [socketMsgStart] result:",e),n.messageString=e,s.sender.send(o["a"].hello,"electron-egg")}),this.$ipc.removeAllListeners(o["c"].window2ToWindow1),this.$ipc.on(o["c"].window2ToWindow1,(n,s)=>{this.$message.info(s)})},sendMsgStart(){const n={type:"start",content:"开始"};this.$ipc.send(o["a"].ipcSendMsg,n)},sendMsgStop(){const n={type:"end",content:""};this.$ipc.send(o["a"].ipcSendMsg,n)},handleInvoke(){const n=this;this.$ipcInvoke(o["a"].ipcInvokeMsg,"异步-回调").then(s=>{console.log("r:",s),n.message1=s})},async handleInvoke2(){const n=await this.$ipcInvoke(o["a"].ipcInvokeMsg,"异步");console.log("msg:",n),this.message2=n},handleSendSync(){const n=this.$ipcSendSync(o["a"].ipcSendSyncMsg,"同步");this.message3=n},createWindow(n){this.$ipcInvoke(o["a"].createWindow,this.views[n]).then(n=>{console.log("[createWindow] id:",n)})},async sendTosubWindow(){this.newWcId=await this.$ipcInvoke(o["a"].getWCid,this.windowName),this.$ipc.sendTo(this.newWcId,o["c"].window1ToWindow2,"窗口1通过 sendTo 给窗口2发送消息")}}},a=c,d=(e("8fb4"),e("e607")),l=Object(d["a"])(a,t,i,!1,null,"850b7854",null);s["default"]=l.exports}}]);
//# sourceMappingURL=chunk-3848e72b.1c7258ec.js.map