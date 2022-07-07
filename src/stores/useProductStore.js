import create from "zustand";
import { persist } from 'zustand/middleware'

export const useProductStore = create(
    persist(
        (set, get) => ({
            cart: [],
            addToCart: (data) => {
                const state = get();
                const inCart = state.cart.find((item) => item.id === data.id ? true : false)
                set({
                    cart: inCart ? state.cart.map((item) => item.id === data.id ? { ...item, qty: item.qty + 1 } : item) : [...state.cart, { ...data, qty: 1 }]
                })
            },
            removeFromCart: (id) => {
                const state = get();
                set({
                    cart: state.cart.filter((item) => item.id !== id)
                })
            },
        }),
        {
            name: 'zustand-cart', // unique name
            getStorage: () => localStorage, // (optional) by default the 'localStorage' is used
        }
    )
)