<template>
  <div
    flex
    items-center
    w40px
    h40px
    justify-center
    hover="bg-[#dfefff] dark:bg-black"
    cursor-pointer
    mr-5
    class="border-circle"
  >
    <i-ri-moon-line cursor="pointer" v-show="dark" @click="removeDark" />
    <i-ri-sun-line cursor="pointer" v-show="!dark" @click="setDark" />
  </div>
</template>

<script setup lang="ts">
import { useDark } from "~/hooks";

const { dark, removeDark, setDark } = useDark();
</script>
