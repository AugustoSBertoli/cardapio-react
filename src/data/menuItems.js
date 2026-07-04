const imgPath = (name) => `${import.meta.env.BASE_URL}images/${name}`;

const burgerAddons = [
    { id: "bacon", name: "Bacon extra", price: 6.9 },
    { id: "hamburguer", name: "Hambúrguer extra", price: 12.9 },
    { id: "queijo", name: "Queijo extra", price: 4.9 },
    { id: "cebola", name: "Cebola caramelizada", price: 3.5 },
];

export const menuItems = [
    // Entradas
    {
        id: "1",
        name: "Batata Frita Crocante",
        description: "Porção generosa com sal",
        price: 22.9,
        category: "Entradas",
        image: imgPath("batata-frita.jpg"),
    },
    {
        id: "2",
        name: "Onion Rings",
        description: "Anéis de cebola empanados com molho especial",
        price: 24.9,
        category: "Entradas",
        image: imgPath("onion-rings.jpg"),
    },
    {
        id: "3",
        name: "Frango Empanado",
        description: "Iscas crocantes com molhos à parte",
        price: 26.9,
        category: "Entradas",
        image: imgPath("frango-empanado.jpg"),
    },

    // Hambúrgueres
    {
        id: "4",
        name: "Clássico Smash",
        description: "180g, queijo cheddar, alface, cebola, tomate e molho da casa",
        price: 32.9,
        category: "Hambúrgueres",
        image: imgPath("classico-smash.jpg"),
        addons: burgerAddons,
    },
    {
        id: "5",
        name: "Bacon Duplo",
        description: "Dois blends 100g, queijo prato, bacon crocante e cebola caramelizada",
        price: 39.9,
        category: "Hambúrgueres",
        image: imgPath("bacon-duplo.jpg"),
        addons: burgerAddons,
    },
    {
        id: "6",
        name: "BBQ Onion",
        description: "180g, queijo prato, onion rings e molho barbecue defumado",
        price: 37.9,
        category: "Hambúrgueres",
        image: imgPath("bbq-onion.jpg"),
        addons: burgerAddons,
    },
    {
        id: "7",
        name: "Cheddar Explosion",
        description: "180g, dobro de cheddar cremoso e cebola roxa",
        price: 36.9,
        category: "Hambúrgueres",
        image: imgPath("cheddar-explosion.jpg"),
        addons: burgerAddons,
    },

    // Bebidas
    {
        id: "8",
        name: "Refrigerante Lata",
        description: "350ml — Coca-Cola, Guaraná ou Sprite",
        price: 7.9,
        category: "Bebidas",
        image: imgPath("refrigerante.jpg"),
    },
    {
        id: "9",
        name: "Suco Natural",
        description: "300ml — Laranja, limão ou maracujá",
        price: 9.9,
        category: "Bebidas",
        image: imgPath("suco.jpg"),
    },
    {
        id: "10",
        name: "Milkshake Artesanal",
        description: "400ml — Chocolate, morango ou baunilha",
        price: 18.9,
        category: "Bebidas",
        image: imgPath("milkshake.jpg"),
    },

    // Sobremesas
    {
        id: "11",
        name: "Brownie com Sorvete",
        description: "Brownie quente com bola de sorvete de creme",
        price: 19.9,
        category: "Sobremesas",
        image: imgPath("brownie.jpg"),
    },
    {
        id: "12",
        name: "Petit Gâteau",
        description: "Bolo de chocolate com recheio cremoso e sorvete",
        price: 22.9,
        category: "Sobremesas",
        image: imgPath("petit-gateau.jpg"),
    },
];
