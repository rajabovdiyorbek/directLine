<template>
  <div>
    <SearchTabs
      :currentType="currentType"
      @typeChanged="onTypeChanged"
      :searchTerm="searchTerm"
      @searchChanged="onSearchChanged"
    />
    <Cards :cards="filteredCards" warehouse />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useCardsStore } from "../stores/cards";

const store = useCardsStore();

const currentType = ref(store.selectedType);
const searchTerm = ref(store.searchTerm);

const onTypeChanged = (newType: string) => {
  store.filterByType(newType);
  currentType.value = newType;
};

const onSearchChanged = (newSearchTerm: string) => {
  store.searchCards(newSearchTerm);
  searchTerm.value = newSearchTerm;
};

const filteredCards = computed(() => store.getAllItems);
</script>

<style scoped></style>
