<template>
  <el-tabs
    v-model="router.currentRoute.value.path"
    type="border-card"
    :class="dark ? 'dark-item app-tabs' : 'app-tabs'"
    :closable="tabsList.length > 1 ? true : false"
    @tab-click="handleClickTab"
    @tab-remove="handleClickRemoveTab"
  >
    <el-tab-pane v-for="item in tabsList" :key="item.path" :name="item.path">
      <template #label>
        <span>{{ item.title }}</span>
      </template>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import type { TabPanelName, TabsPaneContext } from "element-plus/es";
import { subscribeTabsStore, useTabsStore } from "~/store";
import { useDark } from "~/hooks";

const { dark } = useDark();
const router = useRouter();
const { addTabs, removeTab } = useTabsStore();
const { tabsList } = storeToRefs(useTabsStore());
subscribeTabsStore();

watch(
  () => router.currentRoute.value,
  (val) => {
    const {
      path,
      meta: { title },
    } = val;

    if (title && path) addTabs({ path, title });
  },
  { immediate: true }
);

const handleClickTab = (pane: TabsPaneContext) => {
  router.push({ path: pane.paneName as string });
};

const handleClickRemoveTab = (name: TabPanelName) => {
  const path = removeTab(name as string);
  router.push(path);
};
</script>

<style lang="scss" scoped>
.app-tabs {
  user-select: none;
  :deep(.el-tabs__nav) {
    padding: 6px;
  }
}
:deep(.el-tabs__header) {
  background-color: transparent;
}
.el-tabs--border-card {
  background: transparent;
  border: none;
}

:deep(.el-tabs__content) {
  padding: 0 !important;
}

:deep(.el-tabs__item) {
  position: relative;
  margin-right: 6px;
  margin-top: 0;
  background-color: #fff;
  border: none !important;
  padding: 0 16px !important;
  height: 30px;
  line-height: 30px;
  font-weight: normal;
  box-shadow: 0 0 4px rgb(16 72 157 / 12%);
  span {
    position: relative;
    top: 1px;
  }
  .is-icon-close {
    display: none;
    position: absolute;
    top: 1px;
    right: 1px;
    &:hover {
      color: unset;
      background-color: unset;
      display: inline-block;
    }
  }
  &:hover {
    .is-icon-close {
      display: inline-block;
    }
  }
}
:deep(.el-tabs__item.is-active::before) {
  background-color: unset;
}

.dark-item {
  :deep(.el-tabs__item) {
    background-color: #081526 !important;
    box-shadow: 0 0 4px rgb(16 72 157 / 12%);
  }
}

:deep(.el-tabs__header) {
  border: none;
}
</style>
