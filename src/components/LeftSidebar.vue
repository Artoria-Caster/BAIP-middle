<template>
  <div class="sidebar">
    <div class="logo-box">Eureka.bio</div>
    <div class="sidebar-container">
      <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          router
      >
        <!--首页-->
        <el-menu-item index="/">
          <span class="menu-text">首页</span>
        </el-menu-item>

        <!--编辑器栏-->
        <el-sub-menu index="2">
          <template #title>
            <span class="menu-text">设计器</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="formEditor"><span class="menu-text">表单设计器</span></el-menu-item>
            <el-menu-item index="sopEditor"><span class="menu-text">流程设计器</span></el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.sidebar {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.logo-box {
  height: 48px;
  color:#ffffff;
  font-size: 25px;
  text-indent: 1em;
  line-height: 48px;
  background: #002140;
}

.sidebar-container {
  flex: 1;
}

.menu-text {
  color: #C4C9CD;
}

//覆写element plus的样式
.el-menu {
  border-right: none;
  background-color: transparent !important;
}

.el-menu-item-group {
  background: #0F0303 !important;
}

.is-active {
  &.el-menu-item {
    background: #4091F7!important;
  }

  &>.menu-text {
    color: #ffffff !important;
  }
}

:deep(.el-menu) {
  background-color: transparent !important;
}
</style>