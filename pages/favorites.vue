<template>
  <div>
    <SearchTabs
      :currentType="currentType"
      @typeChanged="onTypeChanged"
      :searchTerm="searchTerm"
      @searchChanged="onSearchChanged"
    />
    <Cards :cards="filteredFavoriteItems" />
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

const filteredFavoriteItems = computed(() => {
  let filteredFavorites = store.getFavorites;

  if (currentType.value !== "Все типы") {
    filteredFavorites = filteredFavorites.filter(
      (fav) => fav.type === currentType.value
    );
  }

  if (searchTerm.value) {
    filteredFavorites = filteredFavorites.filter(
      (fav) =>
        fav.title.toLowerCase().includes(searchTerm.value) ||
        fav.description.toLowerCase().includes(searchTerm.value)
    );
  }

  return filteredFavorites;
});
</script>

<style lang="scss" scoped></style>
