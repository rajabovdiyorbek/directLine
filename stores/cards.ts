import { defineStore } from 'pinia';
import data from '../data/data.json';

interface Card {
    id: number;
    type: string;
    title: string;
    address: string;
    seller: string;
    productType: string;
    description: string;
    price: string;
    quantity: string;
    pricePerUnit: string;
    img: string;
}

export const useCardsStore = defineStore('cards', {
    state: () => ({
        items: data as Card[],
        filteredItems: [] as Card[],
        noResultsMessage: ''
    }),
    actions: {
        filterItems(criteria: string) {
            if (criteria.trim() === '') {
                this.filteredItems = [...this.items];
                this.noResultsMessage = '';
            } else {
                const lowercasedCriteria = criteria.toLowerCase();
                this.filteredItems = this.items.filter(item =>
                    item.title.toLowerCase().includes(lowercasedCriteria)
                );
                this.noResultsMessage = this.filteredItems.length ? '' : 'Ничего не найдено по запросу';
            }
        },
        resetFilters() {
            this.filteredItems = [...this.items];
            this.noResultsMessage = '';
        }
    },
    getters: {
        getItems: (state) => {
            return state.filteredItems.length > 0 || !state.noResultsMessage ? state.filteredItems : [];
        },
        getNoResultsMessage: (state) => state.noResultsMessage
    },
});
