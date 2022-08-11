<template>
  <div>
    <div h-60px w-full>
      <Logo />
    </div>
    <Menu :routes="filterRoutes"></Menu>
  </div>
</template>

<script setup lang="ts">
import Menu from "../components/Menu.vue";
import Logo from "../components/Logo.vue";
import type { RouteRecordRaw } from "vue-router";

const { options } = useRouter();

const {
  routes: [_, ...routes],
} = options;

const filterRoutes: RouteRecordRaw[] = [];
routes.forEach((r) =>
  r.children?.length === 1 ? filterRoutes.push(r.children.at(0)!) : filterRoutes.push(r)
);
</script>

<style></style>
