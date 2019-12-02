import { Container } from 'react-grid-system'
import Layout from '../components/Layout'

export default () => (
  <Layout>
    <Container>
      <h1>Index of files</h1>

      <table style={{ paddingTop: '25px', width: '100%', textAlign: 'left' }}>
        <tr>
          <th>Name</th>
          <th>Date</th>
        </tr>
        <tr>
          <td>
            <a
              style={{ marginLeft: '0px' }}
              href="https://lemonipfs.ml/ipfs/QmQV4ZEfDnrGwF8WGxdoWSJxV52Ku3mtBhJiW7qqjAVQWt"
              download="Advent of Code Power Point"
            >
              AdventOfCodePowerPoint.pdf
            </a>
          </td>
          <td>2019-12-03</td>
        </tr>
      </table>
    </Container>
  </Layout>
)
