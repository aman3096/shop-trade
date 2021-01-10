import React from 'react';
import './Offers.css';
import styled from 'styled-components';


const Div =styled.div`
  position: absolute;
  width: 1440px;
  height: 53px;
  left: 0px;
  top: 70px;
  background: linear-gradient(90.06deg, #181716 0%, #ED4E08 99.97%);
`

function Offers() {
  return (
    <Div>
      <span id="offerText">
        Invite Friends to Big Fashion Festival Get Up To $150 MynCash For Every Person Who Visits<button id="offerBtn"> Invite Now</button>
      </span>
    </Div>
  );
}

export default Offers;
