import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Products from "./components/Products";
import { UseCartContext } from "./contexts/CartContext";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <UseCartContext>
        <Products/>
        <Cart/>
      </UseCartContext>
      </header>
    </div>
  );
}

export default App;
