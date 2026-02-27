import React from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import logoImg from "../assets/logo.png"; // import your logo

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Nav = styled.nav`
  background: #0B0742;
  padding: 2.0rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: ${slideDown} 0.8s ease-out;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const LogoImage = styled.img`
  width: 60px;
  height: 60px;
  background: white; 
  border-radius: 50%;
  padding: 2px;
`;

const LogoText = styled.h2`
  color: #fff;
  letter-spacing: 2px;
`;

const Menu = styled.div`
  display: flex;
  gap: 1rem;
`;

// Capsule button style for links
const LinkItem = styled(NavLink)`
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
  font-weight: 600;
  padding: 0.5rem 1.5rem;
  border-radius: 50px; // capsule shape
  background: transparent;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    background: #e63946; // hover background color
    color: #fff;
  }

  &.active {
    background: #e63946; // active link color
    color: #fff;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <LogoContainer>
        <LogoImage src={logoImg} alt="Fraternity Logo" />
        <LogoText>ALTHONIANS</LogoText>
      </LogoContainer>
      <Menu>
        <LinkItem to="/" end>Home</LinkItem>
        <LinkItem to="/about">About</LinkItem>
        <LinkItem to="/events">Events</LinkItem>
        <LinkItem to="/members">Members</LinkItem>
        <LinkItem to="/contact">Contact</LinkItem>
      </Menu>
    </Nav>
  );
};

export default Navbar;
