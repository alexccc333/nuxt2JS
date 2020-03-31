<template>
<div class="admin-layout-wrap">
  <el-container :style="{height:'100%'}">
    <el-aside width="250px">
      <AppSide />
    </el-aside>
    <el-main>
      <nuxt/>
    </el-main>
  </el-container>
</div>
</template>

<script>
import AppSide from '@/components/admin/Aside'
export default {
  components:{AppSide}
}
</script>

<style lang="scss" scoped>
  .admin-layout-wrap{
    width: 100%;
    height: 100vh;
  }
</style>
