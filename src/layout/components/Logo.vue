<template>
  <div
    w-full
    h-full
    text="30px"
    font="bold"
    leading="60px"
    select="none"
    cursor="pointer"
    p-3
    bg-amber
    dark:bg-indigo
    flex-center
  >
    <p>{{ !collapse ? "LOGO" : "L" }}</p>
    <!-- <img :src="collapse ? logoMini : logoOrigin" alt="" w-full h-full /> -->
  </div>
</template>

<script setup lang="ts">
import { useSettingStore } from "~/store/modules/setting";
import logoOrigin from "~/assets/images/logo_origin.png";
import logoMini from "~/assets/images/logo_mini.png";

const { collapse } = storeToRefs(useSettingStore());
</script>

<style></style>
