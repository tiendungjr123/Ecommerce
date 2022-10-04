import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {Route,  Routes} from 'react-router-dom';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Test from './components/Test';
function App() {
   return (
      <>
         <Navbar/>
         <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/products' element={<Products/>}/>
            <Route exact path='/products/:id' element={<ProductDetail/>}/>
            <Route exact path='/about' element={<About/>}/>
            <Route exact path='/contact' element={<Contact/>}/>
            <Route exact path='/cart' element={<Cart/>}/>
            <Route exact path='/checkout' element={<Checkout/>}/>
            <Route exact path='/test' element={<Test/>}/>
         </Routes>
      </>
   );
}

export default App;
