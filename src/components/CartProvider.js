import { createContext, useState } from "react";

export const CartContext = createContext([]);

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const getItems = () => {
        return cart.map(element => ({ ...element }));
    };

    const addItem = (item) => {
        let newCart = cart.map(element => ({ ...element }));

        if (isInCart(item.id)) {
            newCart.forEach(element => {
                if (element?.item?.id === item.id) {
                    element.quantity = element.quantity + 1;
                }
            });
        }
        else {
            newCart = [{ item, quantity: 1 }, ...newCart];
        }

        setCart(newCart);
    };

    const removeItem = (id) => {
        let newCart = cart.map(element => ({ ...element }));
        newCart.forEach(element => {
            if (element?.item?.id === id.toString()) {
                if (element?.quantity > 1) {
                    element.quantity = element.quantity - 1;
                }
                else {
                    newCart = newCart.filter(element => element?.item?.id !== id);
                }
            }
        });

        setCart(newCart);
    };

    const clear = () => {
        setCart([]);
    };

    const isInCart = (id) => {
        const newCart = cart.map(element => ({ ...element }));
        const isIn = newCart.filter(element => element?.item?.id === id).length > 0;

        return isIn;
    };

    const countItems = () => {
        const items = getItems();
        const hashMap = items.map(element => element.quantity);
        const count = hashMap.reduce((prev, curr) => prev + curr, 0);

        return count;
    };

    return (
        <CartContext.Provider value={{ cart, getItems, addItem, removeItem, clear, isInCart, countItems }}>
            {children}
        </CartContext.Provider>
    );
}