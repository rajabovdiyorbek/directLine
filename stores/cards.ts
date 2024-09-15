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
        favorites: [] as Card[],
        deals: [] as Card[],
        paidDeals: [] as Card[],
    }),
    actions: {
        addFavorite(card: Card) {
            if (!this.favorites.some(fav => fav.id === card.id)) {
                this.favorites.push(card);
            }
        },
        removeFavorite(cardId: number) {
            this.favorites = this.favorites.filter(fav => fav.id !== cardId);
        },
        toggleFavorite(card: Card) {
            const isFavorite = this.favorites.some(fav => fav.id === card.id);
            if (isFavorite) {
                this.removeFavorite(card.id);
            } else {
                this.addFavorite(card);
            }
        },
        addDeal(card: Card) {
            if (!this.deals.some(deal => deal.id === card.id)) {
                this.deals.push(card);
            }
        },
        payDeal(cardId: number) {
            const deal = this.deals.find(deal => deal.id === cardId);
            if (deal && !this.paidDeals.some(paidDeal => paidDeal.id === cardId)) {
                this.paidDeals.push(deal);
            }
        },
    },
    getters: {
        getAllItems: (state) => {
            return state.items
        },
        getFavorites: (state) => {
            return state.favorites
        },
        getDeals: (state) => {
            return state.deals;
        },
        isFavorite: (state) => (cardId: number) => {
            return state.favorites.some(fav => fav.id === cardId);
        },
        isDeal: (state) => (cardId: number) => {
            return state.deals.some(deal => deal.id === cardId);
        },
        isPaid: (state) => (cardId: number) => state.paidDeals.some(deal => deal.id === cardId),
    },
});
