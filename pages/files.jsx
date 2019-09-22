import { Container } from 'react-grid-system'
import Layout from '../components/Layout'

export default () => (
  <Layout>
    <Container>
      <h1>Index of /files</h1>

      <table style={{ paddingTop: '25px', width: '100%', textAlign: 'left' }}>
        <tr>
          <th>Name</th>
          <th>Date</th>
        </tr>
        <tr>
          <td>
            <a
              id="file"
              href="https://ipfs.yellowiki.xyz/ipfs/QmPNU4954i9PkEy2PkBnRCdXzwQ2zrqjoEDGzmCAWuGdY8/MRHSProgrammingClub.pdf"
              download="Day One Power Point"
            >
              DayOnePowerPoint.pdf
            </a>
          </td>
          <td>2019-09-10</td>
        </tr>
      </table>
    </Container>
  </Layout>
)
