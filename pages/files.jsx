import { Container } from 'react-grid-system'
import Link from 'next/link'
import Layout from '../components/Layout'

export default () => (
  <Layout>
    <Container>
      <p style={{ paddingTop: '15px' }}>
        <Link id="link" href="/">
          [Home]
        </Link>
      </p>

      <h1>Index of /Files</h1>

      <table style={{ paddingTop: '25px', width: '100%', textAlign: 'left' }}>
        <tr>
          <th>Name</th>
          <th>Date</th>
        </tr>
        <tr>
          <td>
            <a
              id="file"
              href="/static/MRHSProgrammingClub.pdf"
              download="Day One Power Point"
            >
              DayOnePowerPoint.pptx
            </a>
          </td>
          <td>2019-9-10</td>
        </tr>
      </table>
    </Container>
  </Layout>
)
