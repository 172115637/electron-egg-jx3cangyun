<!--
 * @Date: 2022-12-07 17:29:15
 * @LastEditors: 李志祥
 * @LastEditTime: 2022-12-08 16:11:51
 * @FilePath: \electron-egg\frontend\src\App.vue
-->
<template>
  <div id="app">
    <div class="fixed-top-tools">
      <div class="left-box">
        <div class="logo-box">
          <img class="pic-logo" src="~@/assets/logo.png" />苍云盒子
        </div>
        <div class="search-box">
          <a-input-search placeholder="请输入关键字" class="input-search" />
        </div>
      </div>
      <div class="right-box">
        <div
          class="btn-text"
          @click="$router.push({ name: 'Jx3InstructionsIndex' })"
        >
          使用说明
        </div>
        <div
          class="btn-text"
          @click="$router.push({ name: 'Jx3ReleasesIndex' })"
        >
          更新记录
        </div>
        <div class="window-tool-box">
          <a-icon type="minus" @click="hide" />

          <a-icon v-if="!fullFlag" type="fullscreen" @click="full" />
          <a-icon v-else type="fullscreen-exit"  @click="full" />
          <a-icon type="close" @click="quit" />
        </div>
      </div>
    </div>
    <router-view />

    <a-modal v-model="visible" title="最新公告" @ok="handleOk"> </a-modal>
  </div>
</template>

<script>
import { ipcApiRoute } from "@/api/main";
export default {
  name: "App",
  data() {
    return {
      visible: true,
      fullFlag: false,
    };
  },
  watch: {},
  methods: {
    hide() {
      const self = this;
      self.$ipcInvoke(ipcApiRoute.hideWindow).then((r) => {
        console.log(r);
      });
    },
    full() {
      const self = this;
      this.fullFlag = !this.fullFlag;
      self.$ipcInvoke(ipcApiRoute.maxWindow).then((r) => {
        console.log(r);
      });
    },
    quit() {
      const self = this;
      self.$ipcInvoke(ipcApiRoute.closeWindow).then((r) => {
        console.log(r);
      });
    },
    handleOk() {},
  },
};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
#content-box {
  text-align: left;
  padding: 20px 10px;
}
.fixed-top-tools {
  padding: 0 20px;
  background-color: #9e2f02;
  color: #fff;
  width: 100%;
  height: 50px;
  position: fixed;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo-box {
      display: flex;
      align-items: center;
      margin-right: 20px;
      .pic-logo {
        width: 35px;
        padding-right: 10px;
      }
    }
    .search-box {
      .input-search {
        input {
          background-color: rgba(0, 0, 0, 0.2);
          border: none;
          color: #fff;
        }
      }
    }
  }
  .right-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .btn-text {
      cursor: pointer;
      margin: 0 10px;
    }
    .window-tool-box {
      display: flex;
      align-items: center;
      font-size: 18px;
      i {
        padding: 0 5px;
      }
    }
  }
}
</style>
