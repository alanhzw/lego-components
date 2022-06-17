<!--
 * @Author: 一尾流莺
 * @Description:
 * @Date: 2022-06-10 15:21:30
 * @LastEditTime: 2022-06-10 16:04:14
 * @FilePath: \lego-component\src\App.vue
-->
<template>
  <h1>慕课乐高标准模版</h1>
  <ul>
    <li>开箱即用</li>
    <li>typescript</li>
    <li>Vue3</li>
    <li>支持 tsx</li>
    <li>eslint</li>
    <li>简单易用可扩展</li>
    <global-component></global-component>
  </ul>
</template>

<script lang="ts" setup>
import { onMounted, getCurrentInstance, inject } from 'vue';
const test = inject('test')
console.log('🚀🚀 ~ test', test);

onMounted(() => {
  const vm = getCurrentInstance()
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
