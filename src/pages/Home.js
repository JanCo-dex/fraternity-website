import React from 'react';
import PageWrapper from "../components/PageWrapper";
import styled, { keyframes } from 'styled-components';
import { theme } from '../components/theme'; // import colors
import logo from '../assets/logo1.webp';
import brotherhoodImg from '../assets/brotherhood.webp';
import leadershipImg from '../assets/leadership.webp';
import communityImg from '../assets/community.webp';

// Animation for fade-in and scale
const fadeInScale = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const fadeInBackground = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const flip = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(360deg);
  }
`;


// Hero section layout
const Hero = styled.div`
  margin: 0 auto 5rem;
  padding: 4rem 2rem 3rem;

  display: grid;
  grid-template-columns: 1.5fr 1fr;
  align-items: center;
  column-gap: 4rem;
  row-gap: 3rem;

  position: relative;
  overflow: hidden;
  border-radius: 24px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  max-width: 1100px;
  margin: 2rem auto 0 auto; /* centers section horizontally and pushes down from top */
  padding: 4rem 15rem;
  
  background: linear-gradient(135deg, #89CFF0, #1E3C72, #0D1B2A);
  border-radius: 20px;
  background-position: center center; /* centers gradient horizontally & vertically */
  background-repeat: no-repeat;
  background-size: cover; /* ensures gradient covers the section */
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
   

    opacity: 0;
    animation: ${fadeInBackground} 1.4s ease-out forwards;
  }

  @media (max-width: 1024px) {
    column-gap: 3rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 3.5rem 1.5rem 2.5rem;
  }
`;

const HeroText = styled.div`
  animation: ${fadeInScale} 1s ease-out forwards;
`;

const HeroLogoWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center; /* optional: center vertically */

  @media (max-width: 768px) {
    justify-content: center;
  }

  img {
    animation: ${flip} 3s linear infinite; /* flips continuously every 3 seconds */
    transform-style: preserve-3d; /* needed for 3D flip */
  }
`;

const Container = styled.div`
  padding: 4rem 2rem;
  text-align: center;
  background: linear-gradient(
    to bottom right,
    ${theme.colors.background},
    #e6eefc
  );
  min-height: 100vh;
`;

const Logo = styled.img`
  width: 600px;
  height: 600px;
  object-fit: cover;
  display: block;
  margin: 4rem auto 0;
  border-radius: 50%;
  padding: 10px;
  background: ${theme.colors.light};
  border: 4px solid ${theme.colors.primary};
  box-shadow: 0 12px 30px rgba(13, 27, 42, 0.25);
  animation: ${fadeInScale} 1.2s ease-out forwards;

  @media (max-width: 768px) {
    width: 220px;
    height: 220px;
  }
`;

const HeroDivider = styled.div`
  grid-column: 1 / -1;
  height: 2px;
  width: 100%;
  margin-top: 2.5rem;

  position: relative;
  left: 50%;
  transform: translateX(-50%);

  background: linear-gradient(
    to right,
    transparent,
    ${theme.colors.primary},
    transparent
  );

  opacity: 0.9;

  @media (max-width: 768px) {
    margin-top: 2rem;
    width: 120%;
  }
`;



const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 5rem);
  color: #ffffff;
  margin-bottom: 1rem;
  font-weight: 900;
  letter-spacing: -1px;
  line-height: 1.1;
  text-transform: uppercase;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
  font-family: 'Bebas Neue', 'Arial', sans-serif; /* ← missing semicolon fixed */
  text-align: left; /* ← left align */
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    font-size: clamp(2rem, 7vw, 3rem); /* ← fixed invalid value */
    letter-spacing: -0.5px;
    text-align: left; /* ← keep left on mobile */
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 2rem;
  max-width: 520px;
  line-height: 1.5;
  text-align: left;
  margin-left: 0;     /* ← align block to the left */
  margin-right: 0;
  font-family: 'Poppins', 'Futura', sans-serif;
`;

const HeroButton = styled.button`
  margin-top: 0.5rem;
  padding: 1.5rem 2.2rem;
  border-radius: 50px;
  border: none;
  background: ${theme.colors.secondary};
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.6px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(230, 57, 70, 0.35);

  &:hover {
    background: #d62839;
    transform: translateY(-2px);
  }
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const Card = styled.div`
  margin: 2rem;
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 16px;

  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  flex: 1 1 260px;
  max-width: 400px;

  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.15);

    background: linear-gradient(
      180deg,
      #f0f4f8 0%,
      #e6eefc 100%
    );
  }

  img {
    width: 95%;
    border-radius: 12px;
    margin-bottom: 2rem;
  }

  h3 {
    font-size: 2rem;
    color: ${theme.colors.primary};
    margin-bottom: 0.5rem;
  }

  p {
    color: ${theme.colors.accent};
    font-size: 1.5rem;
    line-height: 1.5;
  }
`;

const CenterGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;   /* centers into the logo */
  text-align: center;    /* centers text */
`;

const Home = () => (
  <PageWrapper>
    <Container>
      <Hero>
            <HeroText>
              <Title>Alpha Theta Omega</Title>
              <Subtitle>
                Building brotherhood, leadership, and community since 1968.
                A professional fraternity committed to integrity, service, and excellence.
              </Subtitle>
              <HeroButton>Join the Brotherhood</HeroButton>
            </HeroText>

            <HeroLogoWrapper>
              <Logo src={logo} alt="Fraternity Logo" />
            </HeroLogoWrapper>

            {/* Horizontal line under logo & button */}
            <HeroDivider />
          </Hero>

      <CardsContainer>
        <Card>
          <img src={brotherhoodImg} alt="Brotherhood" />
          <h3>Brotherhood</h3>
          <p>Foster lifelong friendships and a supportive community among our members.</p>
        </Card>
        <Card>
          <img src={leadershipImg} alt="Leadership" />
          <h3>Leadership</h3>
          <p>Develop leadership skills through active participation and service opportunities.</p>
        </Card>
        <Card>
          <img src={communityImg} alt="Community Service" />
          <h3>Community Service</h3>
          <p>Contribute to local projects and initiatives that positively impact society.</p>
        </Card>
      </CardsContainer>
    
    <CenterGroup>
      <Subtitle
        style={{
          marginTop: '2rem',
          maxWidth: '1500px',
          textAlign: 'center'
        }}
      >
        <span style={{ color: '#000000ff' }}>
          Join us today to experience a fraternity that values integrity, teamwork, and personal growth.
          We offer mentorship programs, social events, and opportunities to make a real difference in your community.
        </span>
      </Subtitle>
    </CenterGroup>
    </Container>
  </PageWrapper>
);

export default Home;
