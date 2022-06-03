<template>
    <el-menu mode="horizontal">
      <el-menu-item @click="goto('/')">Home</el-menu-item>
      <el-menu-item @click="goto('/vue-1')">vue-1</el-menu-item>
      <el-menu-item @click="goto('/vue-2')">vue-2</el-menu-item>
      <el-menu-item @click="goto('/html')">html</el-menu-item>
      <el-menu-item @click="goto('/react')">react</el-menu-item>
    </el-menu>
    <router-view></router-view>
    <div id="vue-1"></div>
    <div id="vue-2"></div>
     <div id="html"></div>
    <div id="react"></div>
</template>

<script>
export default {
  methods:{
    goto (item) {
      history.pushState(null, item, item)
      // this.current = item.name
    },
  }
}
</script>
<style>
</style>
