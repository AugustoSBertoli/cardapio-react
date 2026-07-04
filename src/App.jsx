import { CartProvider } from "./context/CartContext";
import { MenuList } from "./components/MenuList";
import { Cart } from "./components/Cart";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <div className="app">
        <h1>Cardápio</h1>
        <MenuList />
        <Cart />
        <footer className="app-footer">
          Desenvolvido por <span>Augusto De Souza Bertoli</span>
        </footer>
      </div>
    </CartProvider>
  );
}

export default App;