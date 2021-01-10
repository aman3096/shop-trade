import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    position: absolute;
    height: 14px;
    left: 24px;
    top: 144px;

    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    /* identical to box height */

    text-transform: capitalize;

    color: #000000;
`

const ClothingHome = () => {
  return (
    <Div>
      Home / Clothing / Mens Clothing / <b>All Mens Clothing</b>
    </Div>
  );
}

export default ClothingHome;
