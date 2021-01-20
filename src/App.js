import logo from './logo.svg';
import './App.css';
import Cart from './components/Cart';
import Wallet from './components/Wallet';
import Shop from './components/Shop';

function App() {
  return (
    <div className="App">
      <div className="container">
      <div className="container flex row space-between" style={ {minHeight: 300}} >
        <div id="shop-container" className="container">
          <Shop/>
        </div>
        <div id="cart-container" className="container">
          <Cart/>
        </div>    
      </div>

      <div id="wallet-container" className="container">
        <Wallet/>
      </div>
      </div>
    </div>
  );
}

export default App;
