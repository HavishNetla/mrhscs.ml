import { Container } from 'react-grid-system'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Index() {
  return (
    <Layout>
      <Container>
        <p style={{ paddingTop: '15px' }}>
          <Link id="link" href="/">
            [Home]
          </Link>
        </p>
        <div style={{ textAlign: 'center' }}>
          <img id="comp" alt="comp" src="/static/cac1.png" />
        </div>
        <p>
          Online competition where you make an app and create a video about it.
          <br />
          <br />
          Location: Online/Capitol Hill <br />
          <br />
          Date: November 1, 2019 <br />
          <br />
          Expenses: $0
          <br />
          <br />
          Prizes: <br />
          - $500 in AWS Credits <br />- Free trip to Capitol Hill <br />- Meet
          Congressman Elijah Cummings
        </p>

        <div style={{ textAlign: 'center' }}>
          <img
            style={{ marginTop: ' 50px' }}
            id="comp"
            alt="comp"
            src="/static/lhd.png"
          />
        </div>
        <p>
          Local hackathon where you build software and showcase it in one day.
          <br />
          <br />
          Location: University Of Maryland <br />
          <br />
          Date: December 2019 <br />
          <br />
          Expenses: Hackers must provide their own transportation to/from
          <br />
          <br />
          Prizes: <br />- Not released yet
        </p>
      </Container>
    </Layout>
  )
}
