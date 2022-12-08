<!--
 * @Date: 2022-12-07 18:01:09
 * @LastEditors: 李志祥
 * @LastEditTime: 2022-12-08 15:25:21
 * @FilePath: \electron-egg\frontend\src\views\jx3\alert\Index.vue
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
    title: `公告公告公告公告公告公告公告公告公告公告公告` + (i + 1),
    avatar:
      "https://console.cnyixun.com/upload/avatar/2022/5/20/2158_6765500.jpg?x-oss-process=image/auto-orient,1/resize,m_fill,w_204,h_204/quality,Q_100",
    description: "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容" + i,
  });
}
console.log(listData.length);

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
