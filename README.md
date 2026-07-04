# Cardápio Digital — Hamburgueria

Cardápio digital web responsivo (mobile-first), pensado para acesso via QR Code em mesas de restaurante. Projeto desenvolvido para portfólio, com foco em fundamentos de React (estado, Context API) e boas práticas de UX para food tech.

## 🔗 Demo
[https://augustosbertoli.github.io/cardapio-react/](https://augustosbertoli.github.io/cardapio-react/)

## 🛠️ Tecnologias

- **React** (Vite)
- **JavaScript** (ES6+)
- **Context API + useReducer** — gerenciamento de estado do carrinho
- **localStorage** — persistência do carrinho entre sessões
- **CSS puro** — sem framework de UI, estilização manual (mobile-first)

## ✨ Funcionalidades

- Listagem de produtos por categoria com filtro (chips horizontais)
- Adição rápida ao carrinho (itens simples)
- Bottom Sheet de customização para hambúrgueres, com adicionais opcionais e preço recalculado em tempo real
- Persistência do carrinho via `localStorage` (sobrevive a refresh da página)
- Microinteração de feedback visual: animação do item "voando" até a seção do pedido ao ser adicionado
- Paleta de cores e hierarquia visual pensadas com base em técnicas de menu engineering (ex.: tratamento visual do preço, hierarquia do Card de Produto)

## 📂 Estrutura do projeto
src/<br/>
├── components/<br/>
│   ├── MenuCard.jsx        # Card individual de produto<br/>
│   ├── MenuList.jsx        # Lista + filtro de categorias<br/>
│   ├── CategoryFilter.jsx  # Chips de categoria<br/>
│   ├── Cart.jsx            # Seção fixa "Seu pedido"<br/>
│   └── ProductSheet.jsx    # Bottom sheet de adicionais<br/>
├── context/<br/>
│   └── CartContext.jsx     # Estado global do carrinho (useReducer)<br/>
├── data/<br/>
│   └── menuItems.js        # Dados do cardápio (mock)<br/>
├── utils/<br/>
│   └── flyToCart.js        # Lógica da animação de item voando<br/>
├── App.jsx<br/>
├── App.css<br/>
└── index.css<br/>

## 🚀 Rodando localmente

```bash
npm install
npm run dev
```

## 🏗️ Build de produção

```bash
npm run build
```

## 💡 Decisões técnicas

- **useReducer em vez de múltiplos useState**: o carrinho tem várias ações relacionadas (adicionar, remover, limpar) que alteram o mesmo objeto de estado — `useReducer` centraliza essa lógica e evita atualizações inconsistentes.
- **Context API**: evita passar `addItem`/`removeItem` via props por várias camadas de componentes (prop drilling).
- **cartId único por combinação de item + adicionais**: um mesmo produto com adicionais diferentes vira uma linha separada no carrinho, para que preço e quantidade não se misturem.
- **Preço sem símbolo de moeda em destaque**: aplicação de prática de menu engineering — reduz a percepção de "gasto" no primeiro contato visual com o preço.

---

Desenvolvido por **Augusto De Souza Bertoli**
