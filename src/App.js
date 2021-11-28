import { Route, Routes } from 'react-router';
import Cart from './components/Cart';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/cart" element={ <Cart /> } />
      </Routes>
    </div>
  );
}

export default App;
