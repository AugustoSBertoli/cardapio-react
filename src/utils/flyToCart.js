export function flyToCart(startElement, imageUrl) {
    const cartIcon = document.getElementById("cart-section");
    if (!cartIcon || !startElement) return;

    const startRect = startElement.getBoundingClientRect();
    const endRect = cartIcon.getBoundingClientRect();

    const flyingItem = document.createElement("img");
    flyingItem.src = imageUrl;
    flyingItem.className = "flying-item";
    flyingItem.style.left = `${startRect.left}px`;
    flyingItem.style.top = `${startRect.top}px`;
    flyingItem.style.width = `${startRect.width}px`;
    flyingItem.style.height = `${startRect.height}px`;

    document.body.appendChild(flyingItem);

    // requestAnimationFrame garante que o navegador registre a posição
    // inicial antes de aplicar a posição final (senão não anima, só "teletransporta")
    requestAnimationFrame(() => {
        flyingItem.style.left = `${endRect.left + endRect.width / 2 - 10}px`;
        flyingItem.style.top = `${endRect.top + endRect.height / 2 - 10}px`;
        flyingItem.style.width = "20px";
        flyingItem.style.height = "20px";
        flyingItem.style.opacity = "0.3";
    });

    flyingItem.addEventListener("transitionend", () => {
        flyingItem.remove();
    });
}