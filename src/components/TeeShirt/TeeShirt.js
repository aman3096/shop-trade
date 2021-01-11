import React,{ useState } from 'react';
import styled from 'styled-components';
import dats from '../../assets/data'

const Div = styled.div`
position: absolute;
width: 262px;
height: 349px;
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

const AddCart = styled.button`
    width: 232px;
    height: 36px;
    left: 1168px;
    top: 1141px;
    border: 1px solid #878787;
    box-sizing: border-box;
    border-radius: 3px;
    padding-left:15px;
    padding-right:15px;
    margin-top:18px;
`
const InsideSpan = styled.span`

font-family: Roboto;
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 16px;
text-transform: capitalize;

color: #878787;
`

const filters = dats.filter(item=>item.tag==="T-shirt")
const TeeShirt = () => {
    const loadData = [...filters]
    const [btnClicked,setBtnClicked]= useState(false);
  return (
    <Div>
    <Grid>
{loadData.map(item=>(<Inside className="container" >
        <InsideImg className="image" src={item.image_src}/>
        <Brand>{item.vendor}</Brand><br/>
        <Name>{item.name}</Name><br/>
        <Price>$599</Price>
        <Discount> $1200</Discount><Percent> (50% OFF)</Percent>
        <div className="middle">
        <div className="text">
            {!btnClicked ?<AddCart onClick={()=>setBtnClicked(!btnClicked)}>ADD TO CART</AddCart>:<div>Hello</div>}
<InsideSpan>Sizes:{item.options.map(opt=><InsideSpan>{opt.value},</InsideSpan>)}</InsideSpan>
        
        </div>
        </div>
          </Inside>))}
        
    </Grid>
    </Div>
  )}






export default TeeShirt;
