import React from 'react';
import styled from 'styled-components';
import dats from '../../assets/data.json';

const Div = styled.div`
position: absolute;
left: 25px;
top: 317px;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: 262px 262px 262px 262px 262px;
  grid-gap: 20px;
  row-gap: 50px;
`

const Inside = styled.div`
  height: 417px;
`
const InsideImg = styled.img`
 
  width: 262px;
  height: 349px;
  left: 25px;
  top: 317px;
`
const Brand = styled.span`
  width: 29px;
  height: 19px;
  left: 40px;
  top: 681px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  text-transform: capitalize;

  color: #000000;
`
const Name = styled.span`

width: 157px;
height: 16px;
left: 40px;
top: 708px;

font-family: Roboto;
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 16px;
text-transform: capitalize;

color: #878787;
`
const Price = styled.span`
  width: 33px;
  height: 16px;
  left: 40px;
  top: 2656px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-transform: capitalize;
  color: #000000;
`
const Discount = styled.span`
width: 91px;
height: 14px;
left: 78px;
top: 1696px;

font-family: Roboto;
font-style: normal;
font-weight: 300;
font-size: 12px;
line-height: 14px;
/* identical to box height */

text-decoration-line: line-through;
text-transform: capitalize;
line-height: 1.4;
color: #878787;
`

const Percent = styled.span`
line-height: 1.4;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  color: #ED4E08;
`
const Products = () => {
  const loadData = [...dats];
  return (
    <Div>
        <Grid>
            {loadData.map(item=>(<Inside>
            <InsideImg src={item.image_src}/>
            <Brand>{item.vendor}</Brand><br/>
            <Name>{item.name}</Name><br/>
            <Price>$599</Price>
            <Discount> $1200</Discount><Percent> (50% OFF)</Percent>
              </Inside>))}
        </Grid>
    </Div>
  );
}

export default Products;
