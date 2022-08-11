<template>
  <el-breadcrumb separator="/" m-l-20px select="none">
    <el-breadcrumb-item
      v-for="item in router.currentRoute.value.matched"
      :key="item.path"
    >
      <div flex items-center>
        <span m-l-6px>{{ item?.meta?.title }}</span>
      </div>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
// :to="{ path: item?.path }"
const router = useRouter();
</script>

<style></style>
