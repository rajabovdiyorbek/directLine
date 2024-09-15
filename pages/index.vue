<template>
  <SearchTabs />
  <Cards :cards="cards" warehouse />
</template>

<script setup lang="ts">
import { useCardsStore } from "../stores/cards";

const store = useCardsStore();

// Получаем все товары из стора
const cards = store.getAllItems;
</script>

<style scoped></style>
