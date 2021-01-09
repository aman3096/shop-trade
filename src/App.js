import './App.css';
import  {BrowserRouter as Router, Route,Switch, Link } from 'react-router-dom'; 

import Contact from './components/Contact/Contact';
import Shop from './components/Shop/Shop';
import About from './components/About/About';
import Stores from './components/Stores/Stores';

import Main from './components/Main/Main';
import Filters from './components/Filters/Filters';
import Products from './components/Products/Products';
import Offers from './components/Offers/Offers';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div>
     
      <Router>
      <center>
            <navbar>
                <Link to="/shop">Shop</Link>
                <Link to="/aboutus">About us</Link>
                <Link to="/stores">Our Stores</Link>
                <Link to="/contactus">Contact Us</Link>
            </navbar>
        </center>
        <Offers/>
       <Switch>
            <Route exact path="/"></Route>
            <Route exact path="/shop"><Shop/></Route>
            <Route exact path="/aboutus"><About/></Route>
            <Route exact path="/stores"><Stores/></Route>
            <Route exact path="/contactUs"><Contact/></Route>
        </Switch>

      </Router>

      <Products/>
      <Filters/>
    </div>
  );
}

export default App;
