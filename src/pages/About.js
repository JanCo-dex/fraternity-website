import React from "react";
import styled from "styled-components";
import PageWrapper from "../components/PageWrapper";

// Section container with subtle background
const Section = styled.section`
  max-width: 1100px;
  margin: 15rem auto 0 auto; /* centers section horizontally and pushes down from top */
  padding: 6rem 2rem;
  text-align: center;
  background: linear-gradient(180deg, #f0f4f8 0%, #e6eefc 100%);
  border-radius: 20px;
  background-position: center center; /* centers gradient horizontally & vertically */
  background-repeat: no-repeat;
  background-size: cover; /* ensures gradient covers the section */
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  color: #fff;
`;


// Page title
const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 1rem;
  letter-spacing: 2px;
  font-weight: 700;
  color: #0d1b2a;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

// Subtitle/description
const Subtitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #415a77;
  max-width: 700px;
  margin: 0 auto 4rem;
`;

// Responsive grid layout
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
`;

// Card with gradient, shadow, and hover effect
const Card = styled.div`
  background: linear-gradient(135deg, #ffffff, #f1f5f9);
  padding: 2.5rem 2rem;
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  text-align: left;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.15);
  }
`;

// Card title
const CardTitle = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: #0d1b2a;
`;

// Card text
const CardText = styled.p`
  color: #333;
  line-height: 1.7;
  font-size: 1rem;
`;

// Optional icon for cards
const CardIcon = styled.span`
  font-size: 2rem;
  display: inline-block;
  margin-right: 0.5rem;
`;

function About() {
  return (
    <PageWrapper>
      <Section>
        <Title>About Alpha Theta Omega</Title>
        <Subtitle>
          Alpha Theta Omega is a fraternity built on leadership, service, and
          lifelong brotherhood.
        </Subtitle>

        <Grid>
          <Card>
            <CardTitle>
              <CardIcon>🎯</CardIcon>Our Mission
            </CardTitle>
            <CardText>
              To develop men of character through leadership, academic
              excellence, and service to the community.
            </CardText>
          </Card>

          <Card>
            <CardTitle>
              <CardIcon>🏛</CardIcon>Our History
            </CardTitle>
            <CardText>
              Founded to unite brothers under shared values, Alpha Theta Omega
              continues to grow with integrity and purpose.
            </CardText>
          </Card>

          <Card>
            <CardTitle>
              <CardIcon>🤝</CardIcon>Brotherhood
            </CardTitle>
            <CardText>
              We foster strong bonds, lifelong friendships, and a culture of
              mutual respect and support.
            </CardText>
          </Card>
        </Grid>
      </Section>
    </PageWrapper>
  );
}

export default About;
