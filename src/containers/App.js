import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import {Login} from '../components/Login.js'
const App = () => (
  <div>
    <Router>
      <div>

        <nav>
          <ul>
            <li>
              <Link to='/Login.js'>Home</Link>
            </li>
            <li>
              <Link to='/ProductsContainer.js'>Product</Link>
            </li>
            <li>
              <Link to='/CartContainer.js'>Cart</Link>
            </li>
      
          </ul>
        </nav>
        <Switch>


          <Route path='/ProductsContainer.js'>
            <ProductsContainer />
          </Route>


          <Route path='/CartContainer.js'>
            <CartContainer />
          </Route>


          <Route exact path='/Login.js'>
            <Login/>
          </Route>
        </Switch>

      </div>
    </Router>




  </div>
)

export default App
