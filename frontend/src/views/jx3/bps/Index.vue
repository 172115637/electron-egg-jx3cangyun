<!--
 * @Date: 2022-12-07 18:01:09
 * @LastEditors: 李志祥
 * @LastEditTime: 2022-12-08 15:24:11
 * @FilePath: \electron-egg\frontend\src\views\jx3\bps\Index.vue
-->
<template>
    <div id="content-box">
      <a-list
        item-layout="vertical"
        size="large"
        :pagination="pagination"
        :data-source="listData"
      >
        <a-list-item slot="renderItem" key="item.title" slot-scope="item">
          <img
            slot="extra"
            width="168"
            height="88"
            alt="logo"
            src="https://console.cnyixun.com/upload/post/2022/12/7/49682_174857.jpg?x-oss-process=style/mini_banner"
          />
          <a-list-item-meta :description="item.description">
            <a slot="title" :href="item.href">{{ item.title }}</a>
            <a-avatar slot="avatar" :src="item.avatar" />
          </a-list-item-meta>
        </a-list-item>
      </a-list>
    </div>
  </template>
    <script>
  const listData = [];
  for (let i = 0; i < 20; i++) {
    listData.push({
      href: "https://www.jx3box.com/bps/46898",
      title: `英雄西津渡：苍云分山实战技巧`,
      avatar:
        "https://console.cnyixun.com/upload/avatar/2022/5/20/2158_6765500.jpg?x-oss-process=image/auto-orient,1/resize,m_fill,w_204,h_204/quality,Q_100",
      description:
        " 作为120年代的第一个副本，英雄西津渡的技能机制较为复杂，有较多的技能组合和一定的数值压力，虽然重复机制较多、BOSS流程松散、战斗过于冗长，相比白帝还是逊色一筹，但总的来说是个不可多得的让人不那么犯困的副本。",
    });
  }
  console.log(listData.length)
  
  export default {
    data() {
      return {
        listData,
        pagination: {
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 10,
        },
      };
    },
  };
  </script>
  