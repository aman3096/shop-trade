import './App.css';
import  { BrowserRouter as Router, Route,Switch, Link } from 'react-router-dom'; 

import Contact from './components/Contact/Contact';
import Shop from './components/Shop/Shop';
import About from './components/About/About';
import Stores from './components/Stores/Stores';
import Main from './components/Main/Main';
import Filters from './components/Filters/Filters';
import Products from './components/Products/Products';
import Offers from './components/Offers/Offers';
import Nav from './components/Nav/Nav';
import ClothingHome from './components/ClothingHome/ClothingHome';

import AllProducts from './components/AllProducts/AllProducts';
import styled from 'styled-components';
import Search from './assets/search.png';
import Cart from './assets/Cart.svg';
import Profile from './assets/profile.svg';
import Down from './assets/down.svg'
const Navbar = styled.div`
position: absolute;
width: 1440px;
height: 70px;
left: 0px;
top: 0px;

background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03);
`
const Img = styled.button`
  position: absolute;
  left:85%;
  right: 15.68%;
  top: 15.6%;
  bottom: 15.67%;
  border:none;
  background-color:transparent;
  outline:none;
`
const Prof = styled.button`
  position: absolute;
  left:88%; 
  right: 24%;
  top: 16.33%;
  bottom: 16.33%;
  background: #010202;
  border:none;
  background-color:transparent;
  outline:none;
`
const CartImg = styled.button`
position: absolute;
left:90%;
right: 15.07%;
top: 20.27%;
bottom: 35.27%;
background: #010202;
  border:none;
  background-color:transparent;
  outline:none;
`
const Span = styled.span`
position: absolute;
width: 32px;
height: 16px;
left: 545px;
top: 27px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;
text-transform: capitalize;

color: #000000;

`

const AboutSpan = styled.span`

position: absolute;
width: 58px;
height: 16px;
left: 619px;
top: 27px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;
text-transform: capitalize;

color: #000000;
`

const StoreSpan = styled.span`
position: absolute;
width: 66px;
height: 16px;
left: 719px;
top: 27px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;
text-transform: capitalize;

color: #000000;
`

const ContactSpan = styled.span`
position: absolute;
width: 69px;
height: 16px;
left: 827px;
top: 27px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;
text-transform: capitalize;

color: #000000;
`
const ImgSpan = styled.img`
position: absolute;
left: 580px;
right: 58.54%;
top: 47%;
bottom: 98.79%;

background: #FFFFFF;
transform: matrix(-1, 0, 0, 1, 0, 0);
`
const HR = styled.hr`

position: absolute;
width: 1390px;
height: 0px;
left: 25px;
top: 292px;

border: 1px solid #E5E5E5;
`
function App() {
  return (
    <div>
     
      <Router>
        <Navbar>
          <Link to="/shop"><Span>Shop</Span><ImgSpan src={Down}/></Link>
          <Link to="/aboutus"><AboutSpan>About us</AboutSpan></Link>
          <Link to="/stores"><StoreSpan>Our Stores</StoreSpan></Link>
          <Link to="/contactus"><ContactSpan>Contact Us</ContactSpan></Link>
          <Img><img src={Search} alt="search" /></Img>
          <Prof><img src={Profile} alt="profile" /></Prof>
          <CartImg><img src={Cart} alt="cart" /></CartImg>
          

        </Navbar>
        <Offers/>
       <Switch>
            <Route exact path="/"><Products/></Route>
            <Route exact path="/shop"><Shop/></Route>
            <Route exact path="/aboutus"><About/></Route>
            <Route exact path="/stores"><Stores/></Route>
            <Route exact path="/contactUs"><Contact/></Route>
        </Switch>

      </Router>
      <ClothingHome/>
      <AllProducts/>
      <Filters/>
      <HR></HR>
      
    </div>
  );
}

export default App;
