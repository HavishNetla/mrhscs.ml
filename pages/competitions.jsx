import { Container } from 'react-grid-system'
import Layout from '../components/Layout'
import HorizontalLine from '../components/HorizontalLine'

export default () => (
  <Layout>
    <Container>
      <div style={{ textAlign: 'center' }}>
        <img
          style={{
            width: '30em',
            marginTop: '10px',
            border: '2px solid #ffffff',
          }}
          alt="Advent of Code Logo"
          src="https://cdn.discordapp.com/attachments/592120406781984783/651158662387204098/EFs21m0XYAIjq4T.png"
        />
      </div>

      <p>
        Advent of Code is an Advent calendar of small programming puzzles for a
        variety of skill sets and skill levels that can be solved in any
        programming language you like. People use them as a speed contest,
        practice problems, or to challenge each other.
      </p>
      <p>
        <b>Leaderboard Join Code:</b> 662771-3c1ecf18
      </p>
      <p>
        <b>Location:</b> Online
      </p>
      <p>
        <b>Date:</b> December 1, 2019 - December 25, 2019
      </p>
      <p>
        <b>Expenses:</b> $0
      </p>
      <HorizontalLine />

      <div style={{ textAlign: 'center' }}>
        <img
          style={{
            paddingTop: '10px',
            width: '30em',
          }}
          alt="HSPC Logo"
          src="https://www.cs.umd.edu/Outreach/hsContest19/assets/hspc-logo.png"
        />
      </div>

      <p>
        The UMD High School Programming Contest is a 3 hour competition where
        high school students from the DC metropolitan area compete in teams of
        four to demonstrate their programming skills and problem solving
        abilities.
      </p>
      <p>
        <b>Location:</b> University of Maryland College Park, MD
      </p>
      <p>
        <b>Date:</b> February 23, 2019
      </p>
      <p>
        <b>Expenses:</b> $0
      </p>
      <p>
        <b>Awards:</b> Gannon Prize and Certificates
      </p>
    </Container>
  </Layout>
)
