import React,{ useState } from 'react';
import styled from 'styled-components';
import dats from '../../assets/data';

const Div = styled.div`
position: absolute;
left: 25px;
top: 317px;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: 262px 262px 262px 262px 262px;
  grid-gap: 20px;
  row-gap: 100px;
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
const Brand = styled.div`
  width: 29px;
  height: 19px;
  left: 40px;
  top: 681px;
  display:inline;
  margin-bottom:8px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  text-transform: capitalize;

  color: #000000;
`
const Name = styled.div`

width: 157px;
height: 16px;
left: 40px;
display:inline;
padding-top:10px;
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
    margin-bottom: 12px;
`
const InsideSpan = styled.div`

font-family: Roboto;
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 16px;
padding-top:20px;
text-transform: capitalize;

color: #878787;
`
const InsideSpand = styled.span`

font-family: Roboto;
font-style: normal;
display:inline;
font-weight: 300;
font-size: 14px;
line-height: 16px;
padding-top:20px;
text-transform: capitalize;

color: #878787;
`

const Size = styled.button`

width: 37px;
height: 37px;
top: 1616px;
border: 1px solid #C4C4C4;
box-sizing: border-box;
margin-right: 8px;
margin-top:11px;
margin-bottom:17px;
border-radius: 50%;
`
const Spans = styled.div`
width: 158px;
height: 16px;
left: 1168px;
display:inline;
margin-top:17px;
font-family: Roboto;
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 16px;
text-transform: capitalize;

color: #878787;`

const BoldS = styled.b`
margin-top:18px;
width: 60px;
height: 14px;
left: 1168px;
top: 1591px;

font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 14px;
/* identical to box height */

text-transform: capitalize;

color: #000000;
`

const Dive = styled.div`
  margin-top:8px;
`
const Deep = styled.div`
  margin-top:8px;
`
const Drive = styled.div`
margin-top:15px;
`
const filters = dats.filter(item=>item.tag=="shirt")
const Shirts = ({onClick}) => {
    const loadData = [...filters]
    const [btnClicked,setBtnClicked]= useState(false);
  return (
    <Div>
        <Grid>
  {loadData.map(item=>(<Inside onMouseEnter={()=>setBtnClicked(false)} onMouseLeave={()=>setBtnClicked(true)} className="container" >
            <InsideImg className="image" src={item.image_src}/>
            <Drive>
              <Brand>{item.vendor}</Brand><br/>
            </Drive>
            <Deep>
            <Name>{item.name}</Name><br/>
            </Deep>
            <Dive>
              <Price>$599</Price>
            <Discount> $1200</Discount><Percent> (50% OFF)</Percent>
            </Dive>
            <div className="middle"  >
            <div className="text" >
  <InsideSpan>
      <BoldS>Select Size</BoldS><br/>
       {item.options.map(sel =>(!btnClicked&&<span><Size onClick={()=>setBtnClicked(!btnClicked)}>{sel["value"].substr(0,2)}</Size></span>))}
       {btnClicked && <AddCart onClick={onClick}>ADD TO CART</AddCart>}
      Sizes:{item.options.map(opt=><InsideSpand>
      <Spans>{opt.value},</Spans>
    </InsideSpand>)}</InsideSpan>
            
            </div>
            </div>
              </Inside>))}
            
        </Grid>
    
    </Div>

  )
}

export default Shirts;
