import React from 'react';
import styled from 'styled-components';

const Foot = styled.footer`
  background: #333;
  color: white;
  text-align: center;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Footer = () => (
  <Foot>
    <p> Alpha Theta Omega. All rights reserved.</p>
  </Foot>
);

export default Footer;