export function CategoryFilter({ categories, active, onSelect }) {
    return (
        <div className="category-filter">
            {categories.map((cat) => (
                <button
                    key={cat}
                    className={cat === active ? "active" : ""}
                    onClick={() => onSelect(cat)}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
}