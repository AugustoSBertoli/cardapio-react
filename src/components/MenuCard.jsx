import { useRef } from "react";
import { useCart } from "../context/CartContext";
import { flyToCart } from "../utils/flyToCart";

export function MenuCard({ item, onOpenSheet }) {
    const { addItem } = useCart();
    const buttonRef = useRef(null);

    const handleAdd = (e) => {
        e.stopPropagation();
        if (item.addons && item.addons.length > 0) {
            onOpenSheet(item);
            return;
        }
        addItem(item);
        flyToCart(buttonRef.current, item.image);
    };

    return (
        <div className="menu-card" onClick={() => item.addons && onOpenSheet(item)}>
            <div className="menu-card-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="menu-card-footer">
                    <span className="menu-card-price">{item.price.toFixed(2).replace(".", ",")}</span>
                    <button ref={buttonRef} className="menu-card-add" onClick={handleAdd}>
                        +
                    </button>
                </div>
            </div>
            <img src={item.image} alt={item.name} className="menu-card-image" />
        </div>
    );
}