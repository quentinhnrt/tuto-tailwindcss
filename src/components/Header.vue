<template>
  <header class="w-full h-24 bg-stone-800 flex items-center justify-center">
    <nav class="container">
      <ul class="flex flex-col md:flex-row items-center justify-center gap-8 text-white">
        <li>
          <router-link to="/exercises">Exercices</router-link>
        </li>
        <li>
          <router-link to="/infos">Infos</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>