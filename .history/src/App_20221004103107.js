import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {Route,  Routes} from 'react-router-dom';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import About from './components/About';
function App() {
   return (
      <>
         <Navbar/>
         <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/products' element={<Products/>}/>
            <Route exact path='/products/:id' element={<ProductDetail/>}/>
            <Route exact path='/about' element={<About/>}/>
         </Routes>
      </>
   );
}

export default App;
