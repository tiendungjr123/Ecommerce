import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {Route,  Routes} from 'react-router-dom';
import Products from './components/Products';
function App() {
   return (
      <>
         <Navbar/>
         <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/products' element={<Products/>}/>
         </Routes>
      </>
   );
}

export default App;
