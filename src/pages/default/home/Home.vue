<template>
  <div class="home">
    <!--左侧tabbar-->
    <div class="left-sidebar">
      <LeftSidebar/>
    </div>
    <!--右侧内容-->
    <div class="container">
      <div class="home-header">
        <div class="title">BAIP中台</div>
        <div class="right-box">
          <div class="user-info">
            <img class="avatar" src="/static/images/test-avatar.png">
            <div class="username">Artorias.Liu</div>
          </div>
        </div>
      </div>
      <div class="home-container">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>

import LeftSidebar from "@/components/LeftSidebar.vue";
</script>

<style scoped lang="scss">
.home {
  display: flex;
  height: 100%;
}

.left-sidebar {
  width: 210px;
  height: 100%;
  background: #001529;
}

.container {
  flex: 1;
  height: 100%;

  .home-header {
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    height: 48px;
    border-bottom: 1px solid #ECECEC;
    box-sizing: border-box;

    & > div {
      height: 100%;
    }

    .title {
      font-size: 20px;
      line-height: 48px;
    }

    .right-box {
      .user-info {
        display: flex;
        align-items: center;
        height: 100%;

        .avatar {
          margin-right: 10px;
          width: 22px;
          height: 22px;
          border-radius: 50%;
        }

        .username {
          font-size: 14px;
        }
      }
    }
  }

  .home-container {
    height: calc(100% - 48px);
  }
}
</style>
