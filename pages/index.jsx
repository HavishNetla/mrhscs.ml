import { Container, Row, Col } from 'react-grid-system'
import Layout from '../components/Layout'
import Scroll from '../components/Scroll'

export default () => (
  <Layout>
    <div style={{ textAlign: 'center', paddingTop: '17vh' }}>
      <Scroll>
        {scroll => (
          <div
            style={{
              transform: `scale(${Math.max(
                1,
                1.35 - scroll / 500,
              )}) translateY(${Math.min(200, scroll)}px)`,
              marginBottom: '175px',
            }}
          >
            <img
              style={{
                textAlign: 'center',
                background: 'black',
                width: '50vmin',
              }}
              alt="Club Logo"
              src="https://lemonipfs.ml/ipfs/QmaY9zvmK71MZALugcdfUpspquoumdDe5W6wyV5FoidpGQ"
            />
            <Scroll minScroll={50}>
              <p>
                <b>TUESDAYS IN ROOM 121</b>
              </p>
            </Scroll>
          </div>
        )}
      </Scroll>
    </div>

    <div style={{ height: '100px' }} />

    <Container>
      <Scroll minScroll={150}>
        <Row justify="between">
          <Col md={6}>
            <h1>About</h1>
            <p>
              In the MRHS Computer Science Club we teach and assist other
              students with computer science and programming skills as well as
              get young students interested in the field of computer science.
              You will learn how to develop and build software projects and
              solve programming puzzles. A few teams will compete in
              competitions.
            </p>

            <h1>Leadership</h1>
            <p>Havish Netla [President + Founder]</p>
            <p>Jeffrey Yang [President + Founder]</p>
            <p>Daniel Huang [Executive + Founder]</p>
            <p>Max Hollis [Executive]</p>
            <p>Satya Selvam [Executive]</p>
            <p>Officer positions vacant</p>
          </Col>

          <Col md={4} style={{ margin: 4 }}>
            <h1>Schedule</h1>
            <p>2019-12-01 Advent of Code Begins</p>
            <p>2019-12-25 Advent of Code Ends</p>
            <p>~ 2020-02-23 UMD HSPC Competition</p>
          </Col>
        </Row>
      </Scroll>
    </Container>

    <div style={{ height: '200px' }} />
  </Layout>
)
