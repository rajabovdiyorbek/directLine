<template>
  <div>
    <SearchTabs
      :currentType="currentType"
      @typeChanged="onTypeChanged"
      :searchTerm="searchTerm"
      @searchChanged="onSearchChanged"
    />
    <Cards :cards="filteredDealsItems" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useCardsStore } from "../stores/cards";

const store = useCardsStore();

const currentType = ref("Все типы");
const searchTerm = ref("");

const onTypeChanged = (newType: string) => {
  store.filterByType(newType);
  currentType.value = newType;
};

const onSearchChanged = (newSearchTerm: string) => {
  store.searchCards(newSearchTerm);
  searchTerm.value = newSearchTerm;
};

const filteredDealsItems = computed(() => {
  let filteredDeals = store.getDeals;

  if (currentType.value !== "Все типы") {
    filteredDeals = filteredDeals.filter(
      (deal) => deal.type === currentType.value
    );
  }

  if (searchTerm.value) {
    filteredDeals = filteredDeals.filter((deal) =>
      deal.title.toLowerCase().includes(searchTerm.value)
    );
  }

  return filteredDeals;
});
</script>

<style lang="scss" scoped></style>
