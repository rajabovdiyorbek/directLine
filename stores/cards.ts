import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import data from '../data/data.json';
import { Card } from "../types/card";


export const useCardsStore = defineStore('cards', () => {
    // State
    const items = ref<Card[]>(data);
    const favorites = ref<Card[]>([]);
    const deals = ref<Card[]>([]);
    const paidDeals = ref<Card[]>([]);
    const searchTerm = ref<string>('');
    const selectedType = ref<string>('Все типы');

    // Actions
    const addFavorite = (card: Card) => {
        if (!favorites.value.some(fav => fav.id === card.id)) {
            favorites.value.push(card);
        }
    };

    const removeFavorite = (cardId: number) => {
        favorites.value = favorites.value.filter(fav => fav.id !== cardId);
    };

    const toggleFavorite = (card: Card) => {
        const isFavorite = favorites.value.some(fav => fav.id === card.id);
        if (isFavorite) {
            removeFavorite(card.id);
        } else {
            addFavorite(card);
        }
    };

    const addDeal = (card: Card) => {
        if (!deals.value.some(deal => deal.id === card.id)) {
            deals.value.push(card);
        }
    };

    const payDeal = (cardId: number) => {
        const deal = deals.value.find(deal => deal.id === cardId);
        if (deal && !paidDeals.value.some(paidDeal => paidDeal.id === cardId)) {
            paidDeals.value.push(deal);
        }
    };

    const searchCards = (term: string) => {
        searchTerm.value = term.toLowerCase();
    };

    const filterByType = (type: string) => {
        selectedType.value = type;
    };

    // Getters
    const filterItems = (itemsArray: Card[]) => {
        let filteredItems = itemsArray;

        if (selectedType.value !== 'Все типы') {
            filteredItems = filteredItems.filter(item => item.type === selectedType.value);
        }

        if (searchTerm.value) {
            filteredItems = filteredItems.filter(item =>
                item.title.toLowerCase().includes(searchTerm.value)
            );
        }

        return filteredItems;
    };

    const getAllItems = computed(() => filterItems(items.value));
    const getFilteredFavorites = computed(() => filterItems(favorites.value));
    const getFilteredDeals = computed(() => filterItems(deals.value));
    const isFavorite = (cardId: number) => favorites.value.some(fav => fav.id === cardId);
    const isDeal = (cardId: number) => deals.value.some(deal => deal.id === cardId);
    const isPaid = (cardId: number) => paidDeals.value.some(deal => deal.id === cardId);

    return {
        items,
        favorites,
        deals,
        paidDeals,
        searchTerm,
        selectedType,
        addFavorite,
        removeFavorite,
        toggleFavorite,
        addDeal,
        payDeal,
        searchCards,
        filterByType,
        getAllItems,
        getFilteredFavorites,
        getFilteredDeals,
        isFavorite,
        isDeal,
        isPaid,
    };
});
