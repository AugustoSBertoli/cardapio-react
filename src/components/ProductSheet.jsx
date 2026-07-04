import { useState } from "react";
import { useCart } from "../context/CartContext";

export function ProductSheet({ item, onClose }) {
    const { addItem } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [selected, setSelected] = useState([]);

    const toggleAddon = (addon) => {
        setSelected((prev) =>
            prev.find((a) => a.id === addon.id)
                ? prev.filter((a) => a.id !== addon.id)
                : [...prev, addon]
        );
    };

    const addonsTotal = selected.reduce((sum, a) => sum + a.price, 0);
    const total = (item.price + addonsTotal) * quantity;

    const handleAdd = () => {
        addItem(item, { quantity, addons: selected });
        onClose();
    };

    return (
        <>
            <div className="sheet-overlay" onClick={onClose} />
            <div className="sheet">
                <div className="sheet-handle" />
                <img src={item.image} alt={item.name} className="sheet-image" />
                <h2>{item.name}</h2>
                <p className="sheet-description">{item.description}</p>

                <div className="sheet-section">
                    <div className="sheet-section-title">
                        Adicionais <span>Opcional · Escolha quantos quiser</span>
                    </div>
                    {item.addons.map((addon) => {
                        const isSelected = selected.some((a) => a.id === addon.id);
                        return (
                            <label key={addon.id} className="sheet-addon">
                                <input type="checkbox" checked={isSelected} onChange={() => toggleAddon(addon)} />
                                <span className="sheet-addon-name">{addon.name}</span>
                                <span className="sheet-addon-price">
                                    + {addon.price.toFixed(2).replace(".", ",")}
                                </span>
                            </label>
                        );
                    })}
                </div>

                <div className="sheet-footer">
                    <div className="sheet-stepper">
                        <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>−</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity((q) => q + 1)}>+</button>
                    </div>
                    <button className="sheet-add-button" onClick={handleAdd}>
                        Adicionar — R$ {total.toFixed(2).replace(".", ",")}
                    </button>
                </div>
            </div>
        </>
    );
}