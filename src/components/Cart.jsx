import { useCart } from "../context/CartContext";

export function Cart() {
    const { state, removeItem, clearCart, total } = useCart();

    return (
        <div id="cart-section" className="cart">
            <h3>Seu pedido</h3>
            {state.items.length === 0 ? (
                <p className="cart-empty-text">Seu carrinho está vazio</p>
            ) : (
                <>
                    <div className="cart-items">
                        {state.items.map((item) => (
                            <div key={item.cartId} className="cart-item">
                                <span className="cart-item-name">
                                    {item.quantity}x {item.name}
                                    {item.addons.length > 0 && (
                                        <span className="cart-item-addons"> ({item.addons.map((a) => a.name).join(", ")})</span>
                                    )}
                                </span>
                                <span className="cart-item-price">
                                    {(item.unitPrice * item.quantity).toFixed(2).replace(".", ",")}
                                </span>
                                <button className="cart-item-remove" onClick={() => removeItem(item.cartId)}>
                                    ×
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="cart-footer">
                        <strong>Total: R$ {total.toFixed(2).replace(".", ",")}</strong>
                        <button className="cart-clear" onClick={clearCart}>
                            Limpar
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}