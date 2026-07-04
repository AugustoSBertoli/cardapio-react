import { useState, useMemo } from "react";
import { menuItems } from "../data/menuItems";
import { MenuCard } from "./MenuCard";
import { CategoryFilter } from "./CategoryFilter";
import { ProductSheet } from "./ProductSheet";

export function MenuList() {
    const [activeCategory, setActiveCategory] = useState("Todos");
    const [sheetItem, setSheetItem] = useState(null);

    const categories = useMemo(() => ["Todos", ...new Set(menuItems.map((i) => i.category))], []);
    const filteredItems = useMemo(
        () => (activeCategory === "Todos" ? menuItems : menuItems.filter((i) => i.category === activeCategory)),
        [activeCategory]
    );

    return (
        <div>
            <CategoryFilter categories={categories} active={activeCategory} onSelect={setActiveCategory} />
            <div className="menu-grid">
                {filteredItems.map((item) => (
                    <MenuCard key={item.id} item={item} onOpenSheet={setSheetItem} />
                ))}
            </div>
            {sheetItem && <ProductSheet item={sheetItem} onClose={() => setSheetItem(null)} />}
        </div>
    );
}