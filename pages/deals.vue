<template>
  <SearchTabs />
  <Cards :cards="dealsItems" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useCardsStore } from "../stores/cards";

const store = useCardsStore();

// Получаем избранные карточки из стора
const dealsItems = computed(() => store.getDeals);
</script>

<style lang="scss" scoped></style>
