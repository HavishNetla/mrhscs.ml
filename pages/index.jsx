import { Container, Row, Col } from 'react-grid-system'
import Link from 'next/link'
import Layout from '../components/Layout'

export default () => (
  <Layout>
    <div style={{ height: '100vh' }}>
      <div style={{ textAlign: 'center', paddingTop: '17vh' }}>
        <img
          id="logo"
          alt="logo"
          src="https://ipfs.yellowiki.xyz/ipfs/QmPApcKgZHbw4UEHVwADqMLV8wRVrpXbhV3kSBFUYCTmH8"
        />
        <p>
          <Link id="link" href="https://github.com/MRHS-Programming">
            [Github]
          </Link>{' '}
          <Link
            id="link"
            href="https://groupme.com/join_group/53521502/ygbNwc0O"
          >
            [GroupMe]
          </Link>{' '}
          <Link id="link" href="/files">
            [Files]
          </Link>{' '}
          <Link id="link" href="/competitions">
            [Competitions]
          </Link>
        </p>

        <p>
          <b>Tuedsays @ Room 121</b>
        </p>
      </div>
    </div>

    <Container>
      <Row justify="between">
        <Col md={6}>
          <h1>About</h1>
          <p>
            Learn how to develop and build cool sofware projects. Teams compete
            in competitions.
          </p>

          <h1>Leadership</h1>
          <p>
            Havish Netla ** <br /> Jeffrey Yang ** <br />
            {/* Daniel Huang **
              <br /> Max Hollis ** <br /> */}
            Satya Selvam *<br /> Tanishq Ahuja * <br />
            <br />
            ** = President <br />
            {/** * = Overseer
              <br />  */}* = Officer
          </p>
        </Col>

        <Col md={4} style={{ margin: 4 }}>
          <h1>Schedule</h1>
          <p>
            9.24.19 Next Meeting <br />
            <br />
            11.1.19 CAC Submission
          </p>
        </Col>
      </Row>
    </Container>
  </Layout>
)
