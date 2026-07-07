import { createSlice } from "@reduxjs/toolkit";

interface CartItem {
    id: number | string;
    name: string;
    quantity: number;
    sum: number;
    price: number;
}

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {

        // 1) AddItemToCart
        addItemToCart: (state, action) => {
            const existingItem = state.items.find(
                item => item.id === action.payload.id
            )

            if (existingItem) {
                existingItem.quantity += 1;
                existingItem.sum += action.payload.price
            } else {
                state.items.push({
                    ...action.payload,
                    quantity: 1,
                    sum: action.payload.price
                })
            }


        },
        // 2) RemoveItemFromCart
        removeItemFromCart: (state, action) => {
            const existingItem = state.items.find(
                item => item.id === action.payload.id
            )
            if (existingItem && existingItem.quantity != 1) {
                existingItem.quantity -= 1;
                existingItem.sum -= action.payload.price
            } else {
                state.items = state.items.filter(
                    item => item.id !== action.payload.id
                )
            }

        },


        // 3) RemoveProductFromCart
        removeProductFromCart: (state, action) => {
            state.items = state.items.filter(
                item => item.id !== action.payload.id
            )
        },
        // 4) EmptyCart
        EmptyCart: (state) => {
            state.items = []
        }
    }
})

export const { addItemToCart, removeItemFromCart, removeProductFromCart, EmptyCart } = cartSlice.actions;

export default cartSlice.reducer;