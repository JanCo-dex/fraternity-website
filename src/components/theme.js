// src/components/theme.js

import { createGlobalStyle, keyframes } from 'styled-components';
import styled from 'styled-components'; // <-- move here

/* ---------- Animations ---------- */
export const fadeInScale = keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

/* ---------- Global Styles ---------- */
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f5f5f5;
    color: #333;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

/* ---------- Theme Colors & Sizes ---------- */
export const theme = {
  colors: {
    primary: '#204161ff',
    secondary: '#003777',
    background: '#f5f5f5',
    text: '#333',
  },
  fontSizes: {
    small: '0.8rem',
    medium: '1rem',
    large: '1.2rem',
    xlarge: '2rem',
  },
};

/* ---------- Example Styled Component Using fadeInScale ---------- */
export const AnimatedBox = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${props => props.bg || '#1E90FF'};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  animation: ${fadeInScale} 0.5s ease-in-out;
`;
