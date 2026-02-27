import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

/* ---------- Styled Components ---------- */

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const Title = styled(motion.h1)`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  letter-spacing: 2px;
`;

const Subtitle = styled(motion.p)`
  text-align: center;
  color: #666;
  max-width: 700px;
  margin: 0 auto 3rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const Card = styled(motion.div)`
  background: #fff;
  padding: 2rem;
  border-radius: 14px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
`;

const Date = styled.span`
  font-size: 0.9rem;
  color: #e63946;
  font-weight: 600;
`;

const EventTitle = styled.h3`
  margin: 0.5rem 0;
`;

const Description = styled.p`
  color: #555;
  line-height: 1.6;
`;

const Button = styled.button`
  margin-top: 1.5rem;
  padding: 0.6rem 1.4rem;
  background: #111;
  color: #fff;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #e63946;
  }
`;


/* ---------- Motion Variants ---------- */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

/* ---------- Component ---------- */

function Events() {
  return (
    <PageWrapper>
      <Section>
        <Title
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Upcoming Events
        </Title>

        <Subtitle
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Stay connected and participate in our fraternity activities and
          events.
        </Subtitle>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Grid>
            <Card variants={fadeUp}>
              <Date>March 15, 2025</Date>
              <EventTitle>Leadership Seminar</EventTitle>
              <Description>
                A seminar focused on developing leadership skills and personal
                growth among our brothers.
              </Description>
              <Button>Learn More</Button>
            </Card>

            <Card variants={fadeUp}>
              <Date>April 2, 2025</Date>
              <EventTitle>Community Outreach</EventTitle>
              <Description>
                Join us in serving the community through outreach programs and
                volunteer activities.
              </Description>
              <Button>Learn More</Button>
            </Card>

            <Card variants={fadeUp}>
              <Date>May 10, 2025</Date>
              <EventTitle>Founders Day Celebration</EventTitle>
              <Description>
                Celebrate our history and brotherhood with alumni and current
                members.
              </Description>
              <Button>Learn More</Button>
            </Card>
          </Grid>
        </motion.div>
      </Section>
    </PageWrapper>
  );
}

export default Events;
