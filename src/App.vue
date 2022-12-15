<script setup>
import Header from "./components/Header.vue";
</script>

<template>
  <Header />
  <div class="container">
    <router-view v-slot="{ Component }">
      <transition>
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>


<style scoped>

</style>
