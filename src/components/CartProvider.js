import { createContext, useState } from "react";

export const CartContext = createContext([]);

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const getItems = () => {
        return cart.map(element => ({ ...element }));
    };

    const addItem = (item) => {
        let newCart = cart.map(element => ({ ...element }));

        isInCart(item.id) ?
            newCart[item.id].quantity = ++newCart[item.id].quantity :
            newCart = [{ item, quantity: 1 }, ...newCart];

        setCart(newCart);
    };

    const removeItem = (id) => {
        let newCart = cart.map(element => ({ ...element }));

        newCart[id].quantity > 1 ?
            newCart[id].quantity = --newCart[id].quantity :
            newCart = newCart.filter(element => element.id !== id);

        setCart(newCart);
    };

    const clear = () => {
        setCart([]);
    };

    const isInCart = (id) => {
        const newCart = cart.map(element => ({ ...element }));
        const isIn = newCart.filter(element => element.id === id).length > 0;
        return isIn;
    }

    return (
        <CartContext.Provider value={{ cart, getItems, addItem, removeItem, clear, isInCart }}>
            {children}
        </CartContext.Provider>
    );
}