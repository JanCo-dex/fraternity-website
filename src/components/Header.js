import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #333;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
`;

const Header = () => (
  <Nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/events">Events</Link>
    <Link to="/members">Members</Link>
    <Link to="/contact">Contact</Link>
  </Nav>
);

export default Header;