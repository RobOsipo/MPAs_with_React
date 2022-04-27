import {Link, Switch, Route, Routes} from 'react-router-dom'
import Welcome from './pages/Welcome'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import MainHeader from './components/MainHeader'
import './index.css'
function App() {



  return (
    <div>
  
 <MainHeader />
  <main>
      <Route exact path="/welcome">
            <Welcome />
        </Route>
          
      <Route exact path="/products">
          <Products />
        </Route>

      <Route path="/products/:productId">
          <ProductDetail />
      </Route>
  </main>
      
        
 

    
        
    </div>
  );
}

export default App;
