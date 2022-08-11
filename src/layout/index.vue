<template>
  <div flex bg="dark:[#282c34] [#f1f1f1]">
    <div
      class="app-menu"
      :class="[collapse ? 'w-65px' : 'w-250px']"
      bg="dark:[#001529] [#ffffff]"
    >
      <side-bar></side-bar>
    </div>
    <div flex-1>
      <nav-bar></nav-bar>
      <el-scrollbar class="app-main">
        <div p-20px>
          <el-config-provider :button="{ autoInsertSpace: true }">
            <RouterView v-slot="{ Component }">
              <template v-if="Component">
                <Transition name="main" mode="out-in">
                  <div>
                    <KeepAlive>
                      <Suspense v-if="$route.meta?.keepAlive">
                        <!-- 主要内容 -->
                        <component :is="Component" :key="$route.name" />
                        <!-- 加载中状态 -->
                        <template #fallback> 正在加载... </template>
                      </Suspense>
                    </KeepAlive>
                    <Suspense v-if="!$route.meta?.keepAlive">
                      <component :is="Component" :key="$route.name" />
                      <template #fallback> 正在加载... </template>
                    </Suspense>
                  </div>
                </Transition>
              </template>
            </RouterView>
          </el-config-provider>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSettingStore } from "~/store/modules/setting";
import NavBar from "./navBar/index.vue";
import SideBar from "./sideBar/index.vue";

const { collapse } = storeToRefs(useSettingStore());
</script>

<style scoped lang="scss">
.app-menu {
  transition: 0.3s all;
  height: 100vh;
}
.app-main {
  overflow: auto;
  height: calc(100vh - 110px);
  // border: 1px solid red;
  margin: 0 6px 6px;
}

.main-enter-active {
  transition: 0.2s;
}
.main-leave-active {
  transition: 0.15s;
}
.main-enter-from {
  opacity: 0;
  margin-left: -20px;
}
.main-leave-to {
  opacity: 0;
  margin-left: 20px;
}
</style>
