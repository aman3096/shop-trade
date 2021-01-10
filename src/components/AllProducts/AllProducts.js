import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
position: absolute;

height: 23px;
left: 24px;
top: 174px;

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 23px;
text-transform: capitalize;

color: #000000;
`

const Span = styled.span`
    font-weight: normal;
    color:#878787;
`

const AllProducts = () => {
  return (
    <Div>
      All Products <Span>(25 products)</Span>
    </Div>
  );
}

export default AllProducts;
