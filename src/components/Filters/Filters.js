import React from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Link} from 'react-router-dom';


const Div= styled.div`
  display:block;
  margin-top:10%;
`
const All = styled.button`
position: absolute;
width: 115px;
height: 42px;
left: 103px;
top: 224px;

border: 1px solid #000000;
box-sizing: border-box;
border-radius: 42px;
    background:white;
`

const Tee = styled.button`
position: absolute;
width: 92px;
height: 42px;
left: 226px;
top: 224px;

border: 1px solid #C4C4C4;
box-sizing: border-box;
border-radius: 72px;
    background:white;
`
const Denim = styled.button`
position: absolute;
width: 75px;
height: 42px;
left: 326px;
top: 224px;

border: 1px solid #C4C4C4;
box-sizing: border-box;
border-radius: 72px;
    background:white;
`
const Sweatshirts = styled.button`
  position: absolute;
  width: 92px;
  height: 42px;
  left: 409px;
  top: 224px;
  background:white;

  border: 1px solid #C4C4C4;
  box-sizing: border-box;
  border-radius: 72px;
`
const Polo = styled.button`
  position: absolute;
  width: 115px;
  height: 42px;
  left: 509px;
  top: 224px;

  border: 1px solid #C4C4C4;
  box-sizing: border-box;
  border-radius: 72px;
  background:white;

`
const Shirt = styled.button`
    position: absolute;
    width: 65px;
    height: 42px;
    left: 632px;
    top: 224px;

    border: 1px solid #C4C4C4;
    box-sizing: border-box;
    border-radius: 72px;
    background:white;

`
const B = styled.b`
position: absolute;
width: 64px;
height: 19px;
left: 24px;
top: 235px;

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 19px;
/* identical to box height */

text-transform: capitalize;
`

const Select = styled.select`
  position: absolute;
  width: 200px;
  height: 42px;
  left: 1215px;
  top: 224px;

  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 62px;
`

function Filters() {
  return (
    <Div>
      <B>FILTERS:</B>
        <Link to="/allProducts"><All>All Products</All></Link>
        <Link to="/TeeShirt"><Tee>Tee Shirt</Tee></Link>
        <Link to="/Denim"><Denim>Denim</Denim></Link>
        <Link to="/Sweatshirts"><Sweatshirts>Sweatshirts</Sweatshirts></Link>
        <Link to="/Polos"><Polo>Polo Tee Shirt</Polo></Link>
        <Link to="/Shirts"><Shirt>Shirt</Shirt></Link>
    


  <Select name="sort" id="sort">
    <option value="LowToHigh">Sort By: Price Low To High</option>
  </Select>
    </Div>
  );
}

export default Filters;
