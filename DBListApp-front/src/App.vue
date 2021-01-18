<template>
  <v-app>
    <!-- <Header /> 必要ないっぽいので取り合えず無効化 -->
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<!--
<script>
import Header from "@/components/Header";
export default {
  components: { Header }
};
</-script>
-->

<style lang="scss" scoped>
#app {
  font-family: Arial, メイリオ, sans-serif, 游ゴシック;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>