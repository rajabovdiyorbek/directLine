<template>
  <SearchTabs />
  <Cards />
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useCardsStore } from "../stores/cards";

const store = useCardsStore();

onMounted(() => {
  store.filterItems("favorite criteria");
});
</script>

<style lang="scss" scoped></style>
