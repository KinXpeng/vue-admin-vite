<template>
  <div h60px text-base flex-1 shadow-bt>
    <nav
      flex
      justify="between"
      items="center"
      h-full
      bg="dark:[#041527] [#ffffff]"
      :class="dark ? 'shadow-bt-dark' : 'shadow-bt-light'"
    >
      <div flex items-center h-full>
        <div
          flex
          items-center
          w60px
          h-full
          justify-center
          hover="bg-[#dfefff] dark:bg-black"
          cursor-pointer
          @click="toggleCollapse"
          text="#333 dark:#ccc"
        >
          <i-zondicons:indent-decrease
            v-if="!collapse"
            text="size-16px"
            font="bold"
          ></i-zondicons:indent-decrease>
          <i-zondicons:indent-increase
            text="size-16px"
            font="bold"
            v-else
          ></i-zondicons:indent-increase>
        </div>
        <breadcrumb></breadcrumb>
      </div>
      <div flex>
        <div
          flex
          items-center
          w40px
          h40px
          justify-center
          hover="bg-[#dfefff] dark:bg-black"
          cursor-pointer
          mr-1
          class="border-circle"
        >
          <i-uiw:github cursor="pointer" @click="handleTargetGit" />
        </div>
        <toggle-theme></toggle-theme>
      </div>
    </nav>
  </div>
  <tabs></tabs>
</template>

<script setup lang="ts">
import { useSettingStore } from "~/store/modules/setting";
import ToggleTheme from "../components/ToggleTheme.vue";
import breadcrumb from "../components/Breadcrumb.vue";
import Tabs from "../components/Tabs.vue";
import { useDark } from "~/hooks";

const { collapse } = storeToRefs(useSettingStore());
const toggleCollapse = () => {
  collapse.value = !collapse.value;
};

const { dark } = useDark();

const handleTargetGit = () => {
  window.open("https://github.com/KinXpeng/vue-admin-vite");
};
</script>

<style></style>
