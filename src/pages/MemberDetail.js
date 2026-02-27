import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import PageWrapper from "../components/PageWrapper";

const Section = styled.section`
  max-width: 700px;
  margin: 10rem auto 0 auto; /* push down from top */
  padding: 15rem 2rem; /* reduce padding for better centering */
  text-align: center;
  border-radius: 20px;
  background: linear-gradient(135deg, #89CFF0, #1E3C72, #0D1B2A);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; /* ensures gradient covers the section */
  box-shadow:  30px 30px rgba(0,0,0,0.1);
  color: #fff;
`;


const Avatar = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: linear-gradient(135deg, #111, #e63946);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 3rem;
  font-weight: bold;
  margin: 0 auto 1rem;
  border: 3px solid #fff;
`;

const Name = styled.h2`
  margin-bottom: 0.5rem;
`;

const Role = styled.p`
  color: #fff;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const Chapter = styled.p`
  font-style: italic;
  margin-bottom: 1rem;
`;

const Bio = styled.p`
  color: #f0f0f0;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  margin-top: 1.2rem;
  background: #fff;
  color: #e63946;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #f0f0f0;
    transform: scale(1.05);
  }
`;

const MembersData = [
  { id: 1, initials: "JD", name: "Juan Dela Cruz", role: "President", chapter: "Alpha Chapter", bio: "Leads the fraternity with vision, responsibility, and commitment to excellence." },
  { id: 2, initials: "MR", name: "Mark Reyes", role: "Vice President", chapter: "Beta Chapter", bio: "Supports leadership initiatives and ensures unity among members." },
  { id: 3, initials: "AL", name: "Alex Lim", role: "Secretary", chapter: "Gamma Chapter", bio: "Manages records, communication, and organizational documents." },
  { id: 4, initials: "CS", name: "Chris Santos", role: "Treasurer", chapter: "Delta Chapter", bio: "Oversees finances and maintains transparency and accountability." },
];

function MemberDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const member = MembersData.find((m) => m.id === parseInt(id));

  if (!member) {
    return (
      <PageWrapper>
        <Section>
          <p>Member not found.</p>
          <Button onClick={() => navigate("/members")}>Back</Button>
        </Section>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Section>
        <Avatar>{member.initials}</Avatar>
        <Name>{member.name}</Name>
        <Role>{member.role}</Role>
        <Chapter>{member.chapter}</Chapter>
        <Bio>{member.bio}</Bio>
        <Button onClick={() => navigate("/members")}>Back to Members</Button>
      </Section>
    </PageWrapper>
  );
}

export default MemberDetail; 