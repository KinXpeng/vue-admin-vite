<template>
  <div class="menu flex-1" :class="dark ? 'shadow-br-dark' : 'shadow-br-light'">
    <el-scrollbar>
      <el-menu
        :default-active="activeMenu"
        :collapse="collapse"
        mode="vertical"
        :router="true"
        select="none"
      >
        <menu-item v-for="route in routes" :key="route.path" :route="route" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import MenuItem from "./MenuItem.vue";
import type { RouteRecordRaw } from "vue-router";
import { subscribeSettingStore, useSettingStore } from "~/store";
import { useDark } from "~/hooks";
const { dark } = useDark();

interface IProps {
  routes: RouteRecordRaw[];
}
defineProps<IProps>();

const { collapse } = storeToRefs(useSettingStore());
subscribeSettingStore();

const route = useRoute();
const activeMenu = computed<string>(
  () => (route.meta?.activeMenu as string) ?? route.path
);
</script>

<style lang="scss" scoped>
.menu {
  min-height: calc(100vh - 60px);
}
</style>
