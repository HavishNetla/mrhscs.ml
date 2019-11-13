import { Container } from 'react-grid-system'
import Layout from '../components/Layout'
import HorizontalLine from '../components/HorizontalLine'

export default () => (
  <Layout>
    <Container>
      <div style={{ textAlign: 'center' }}>
        <img
          style={{ paddingTop: '10px' }}
          alt="HSPC Logo  "
          src="https://cdn.glitch.com/bd9736b1-da91-4d78-bdce-2e6bade0d565%2Fhspc.PNG?v=1573683617983"
        />
      </div>

      <p>
        HSPC is a 3 hour competition where high school students from the DC metropolitan area compete in teams of four to demonstrate their programming skills and problem solving abilities.
      </p>
      <p>
        <b>Location:</b> CSIC at University of Maryland
      </p>
      <p>
        <b>Date:</b> February 23, 2020
      </p>
      <p>
        <b>More information will follow!</b>
      </p>
      <HorizontalLine />
      <p>More competitions will follow!</p>
    </Container>
  </Layout>
)
