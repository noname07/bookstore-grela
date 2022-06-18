import { createContext, useState } from "react";

export function CartProvider({ value = {}, children }) {
    const [cart, setCart] = useState({});

    const CartContext = createContext({});

    return (
        <CartContext.Provider value={cart}>
            {children}
        </ CartContext.Provider >
    );
}