import { createContext, useContext, useReducer, useEffect } from "react";

function cartReducer(state, action) {
    switch (action.type) {
        case "ADD_ITEM": {
            const { item, quantity, addons } = action.payload;
            const cartId = addons.length
                ? `${item.id}-${addons.map((a) => a.id).sort().join("-")}`
                : item.id;
            const unitPrice = item.price + addons.reduce((sum, a) => sum + a.price, 0);
            const existing = state.items.find((i) => i.cartId === cartId);

            if (existing) {
                return {
                    items: state.items.map((i) =>
                        i.cartId === cartId ? { ...i, quantity: i.quantity + quantity } : i
                    ),
                };
            }
            return {
                items: [...state.items, { ...item, cartId, quantity, addons, unitPrice }],
            };
        }
        case "REMOVE_ITEM":
            return { items: state.items.filter((i) => i.cartId !== action.payload) };
        case "CLEAR_CART":
            return { items: [] };
        default:
            return state;
    }
}

function getInitialState() {
    try {
        const saved = localStorage.getItem("cardapio-cart");
        return saved ? JSON.parse(saved) : { items: [] };
    } catch {
        return { items: [] };
    }
}

const CartContext = createContext(undefined);

export function CartProvider({ children }) {
    const [state, dispatch] = useReducer(cartReducer, undefined, getInitialState);

    useEffect(() => {
        localStorage.setItem("cardapio-cart", JSON.stringify(state));
    }, [state]);

    const addItem = (item, options = {}) => {
        dispatch({
            type: "ADD_ITEM",
            payload: { item, quantity: options.quantity || 1, addons: options.addons || [] },
        });
    };
    const removeItem = (cartId) => dispatch({ type: "REMOVE_ITEM", payload: cartId });
    const clearCart = () => dispatch({ type: "CLEAR_CART" });

    const total = state.items.reduce((sum, i) => sum + i.unitPrice * i.quantity, 0);

    return (
        <CartContext.Provider value={{ state, addItem, removeItem, clearCart, total }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart precisa estar dentro de CartProvider");
    return context;
}