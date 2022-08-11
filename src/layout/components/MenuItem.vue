<template>
  <!-- 单菜单 -->
  <template v-if="!route.meta?.hidden">
    <el-menu-item :index="route.path" v-if="!hasShowChildMenu">
      <Icon :icon="routeMeta.icon" v-if="routeMeta.icon"></Icon>
      <template #title>
        <span m-l-10px>{{ routeMeta.title }}</span>
      </template>
    </el-menu-item>

    <!-- 多菜单 -->
    <el-sub-menu v-else :index="route.path">
      <template #title>
        <Icon :icon="routeMeta.icon" v-if="routeMeta.icon"></Icon>
        <span m-l-10px>{{ routeMeta.title }}</span>
      </template>

      <menu-item v-for="item in route?.children" :key="item.path" :route="item" />
    </el-sub-menu>
  </template>
</template>

<script lang="ts" setup>
import type { RouteMeta, RouteRecordRaw } from "vue-router";
import { Icon } from "@iconify/vue";
interface Props {
  route: RouteRecordRaw;
}

const props = defineProps<Props>();

const hasShowChildMenu = computed(() => {
  const children: RouteRecordRaw[] = props.route.children ?? [];
  return !!children.filter((item) => !item.meta?.hidden).length;
});

const routeMeta = computed(() => {
  return props.route.meta as RouteMeta;
});
</script>
<style lang="scss" scoped>
.el-menu-item,
.el-sub-menu__title {
  .menu-item-icon {
    margin-right: 8px;
  }
}
</style>
