import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import { theme } from '../components/theme';
import styled, { keyframes } from 'styled-components';
/* ---------- Styled Components ---------- */

const fadeInBackground = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Section = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const Title = styled(motion.h1)`
  text-align: center;
  font-size: 5rem;
  margin-bottom: 0.5rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  color: #0d1b2a;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Subtitle = styled(motion.p)`
  text-align: center;
  color: #415a77;
  font-size: 1.5rem;
  max-width: 700px;
  margin: 0 auto 3rem;
`;

const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  gap: 1rem;              /* more space between elements */
  margin-bottom: 4rem;   /* more breathing room */
  flex-wrap: wrap;
`;


const SearchInput = styled.input`
  padding: 1rem 1.5rem;     /* bigger input */
  font-size: 1.5rem;
  min-width: 350px;         /* wider */
  border-radius: 30px;
  border: 1px solid #ddd;
  outline: none;

  &:focus {
    border-color: #c4c4c4;
  }
`;


const SearchButton = styled.button`
  padding: 1.5rem 3.2rem;       /* larger button */
  font-size: 1.5rem;
  border-radius: 50px;
  border: none;
  background: #e63946;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  background: ${theme.colors.secondary};
  box-shadow: 0 8px 20px rgba(230, 57, 70, 0.35);

  &:hover {
    background: #d62828;
    transform: translateY(-2px);
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ListItem = styled(motion.div)`
  /* Layout & sizing */
  width: 100%;
  max-width: 900px;
  margin: 1rem auto;
  padding: 4rem 4.5rem;

  display: grid;
  grid-template-columns: 1.2fr 1fr;
  align-items: center;
  gap: 3rem 4rem;

  /* Visual styling */
  position: relative;
  overflow: hidden;
  border-radius: 24px;

  background: linear-gradient(
    135deg,
    #89CFF0,
    #1E3C72,
    #0D1B2A
  );
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);

  /* Animation */
  opacity: 0;
  animation: ${fadeInBackground} 1.4s ease-out forwards;

  /* Tablet */
  @media (max-width: 1024px) {
    padding: 3.5rem 3rem;
    gap: 2.5rem;
  }

  /* Mobile */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 3rem 1.5rem;
  }
`;




const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Avatar = styled(motion.div)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: linear-gradient(135deg, #111, #e63946);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.8rem;
  font-weight: bold;
  flex-shrink: 0;
`;

const Info = styled.div`
  flex: 1;
`;

const Name = styled.h3`
  margin: 0;
  font-size: 2rem;
  font-weight: 700;
  color: #0d1b2a;
`;

const Role = styled.p`
  margin: 0.2rem 0;
  font-weight: 600;
  font-size: 1.5rem;
  color: #e63946;
`;

const Chapter = styled.p`
  font-size: 1.5rem;
  color: #ffffff;
  font-style: italic;
`;

const Button = styled.button`
  padding: 1.5rem 3rem;
  font-size: 1.5rem;
  margin-top: 0.75rem;

  background: #e63946;
  color: #fff;
  border: none;
  border-radius: 999px;
  font-weight: 600;

  cursor: pointer;
  white-space: nowrap;
  width: fit-content;
  max-width: 100%;

  transition: background 0.3s ease, transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    background: #d62828;
    transform: translateY(-2px) scale(1.03);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  }

  &:active {
    transform: scale(0.98);
  }

  /* Tablet */
  @media (max-width: 1024px) {
    font-size: 0.95rem;
    padding: 0.65rem 1.6rem;
  }

  /* Mobile */
  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.6rem 1.4rem;
    margin-left: auto;
    margin-right: auto;
  }
`;

/* ---------- Motion Variants ---------- */

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/* ---------- Component ---------- */

function Members() {
  const navigate = useNavigate();

  const members = [
    { id: 1, initials: "JD", name: "Juan Dela Cruz", role: "President", chapter: "Alpha Chapter", bio: "Leads the fraternity with vision, responsibility, and commitment to excellence." },
    { id: 2, initials: "MR", name: "Mark Reyes", role: "Vice President", chapter: "Beta Chapter", bio: "Supports leadership initiatives and ensures unity among members." },
    { id: 3, initials: "AL", name: "Alex Lim", role: "Secretary", chapter: "Gamma Chapter", bio: "Manages records, communication, and organizational documents." },
    { id: 4, initials: "CS", name: "Chris Santos", role: "Treasurer", chapter: "Delta Chapter", bio: "Oversees finances and maintains transparency and accountability." },
  ];

  // -------------------- SEARCH STATE --------------------
  const [search, setSearch] = React.useState("");
  const [filteredMembers, setFilteredMembers] = React.useState(members);

  const handleSearch = (e) => {
    e.preventDefault();
    const results = members.filter(member =>
      member.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredMembers(results);
  };

  return (
    <PageWrapper>
      <Section>
        <Title variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          Our Members
        </Title>

        <Subtitle variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          Click "View Details" to learn more about each member.
        </Subtitle>

        {/* Search Bar */}
        <SearchForm onSubmit={handleSearch}>
          <SearchInput
            type="text"
            placeholder="Search members..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <SearchButton type="submit">Search</SearchButton>
        </SearchForm>

        <List>
          {filteredMembers.map((member) => (
            <ListItem key={member.id} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Header>
                <Avatar>{member.initials}</Avatar>
                <Info>
                  <Name>{member.name}</Name>
                  <Role>{member.role}</Role>
                  <Chapter>{member.chapter}</Chapter>
                </Info>
              </Header>

              <Button onClick={() => navigate(`/members/${member.id}`)}>
                View Details
              </Button>
            </ListItem>
          ))}
        </List>
      </Section>
    </PageWrapper>
  );
}

export default Members;
