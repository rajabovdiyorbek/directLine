<!-- layouts/default.vue -->
<template>
  <div>
    <Header />
    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<script setup></script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Rubik", sans-serif;
}
</style>
