<template>
  <SearchTabs />
  <Cards :cards="favoriteItems" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useCardsStore } from "../stores/cards";

const store = useCardsStore();

// Получаем избранные карточки из стора
const favoriteItems = computed(() => store.getFavorites);
</script>

<style lang="scss" scoped></style>
