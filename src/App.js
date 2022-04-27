import {Link, Switch, Route, Redirect} from 'react-router-dom'
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
  <Switch>
      <Route exact path="/">
        <Redirect to="/welcome" />
      </Route>
      <Route exact path="/welcome">
            <Welcome />
        </Route>
          
      <Route exact path="/products">
          <Products />
        </Route>

      <Route path="/products/:productId">
          <ProductDetail />
      </Route>
  </Switch>
  </main>
      
        
 

    
        
    </div>
  );
}

export default App;
