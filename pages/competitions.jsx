import { Container } from 'react-grid-system'
import Layout from '../components/Layout'
import HorizontalLine from '../components/HorizontalLine'

export default () => (
  <Layout>
    <Container>
    <div style={{ textAlign: 'center' }}>
  <img
    alt="PCTF Logo"
    src="https://ipfs.yellowiki.xyz/ipfs/QmXVRBeBQ8osBtL6i6oGYfuskYqovFhLvyUGKVkTTwK7kk/pctf.svg"
  />
</div>

<p>
  Online cybersecurity competition where teams hack various things to find hidden "flags"
</p>
<p>
  <b>Location:</b> Online/Carnegie Mellon University
</p>
<p>
  <b>Date:</b> September 27, 2019
</p>
<p>
  <b>Expenses:</b> $0
</p>
<p>
  <b>Prizes:</b>
</p>
<p> - $14,000 in prizes</p>
<p> - Paid trip to Carnegie Mellon University</p>
<HorizontalLine />


      <div style={{ textAlign: 'center' }}>
        <img
          alt="CAC Logo"
          src="https://ipfs.yellowiki.xyz/ipfs/QmPNU4954i9PkEy2PkBnRCdXzwQ2zrqjoEDGzmCAWuGdY8/cac1.png"
        />
      </div>

      <p>
        Online competition where you make an app and create a video about it.
      </p>
      <p>
        <b>Location:</b> Online/Capitol Hill
      </p>
      <p>
        <b>Date:</b> November 1, 2019
      </p>
      <p>
        <b>Expenses:</b> $0
      </p>
      <p>
        <b>Prizes:</b>
      </p>
      <p> - Meet Congressman Elijah Cummings</p>
      <p> - $500 in AWS Credits</p>
      <p> - Free trip to Capitol Hill</p>

      <HorizontalLine />

      <div style={{ textAlign: 'center' }}>
        <img
          alt="LHD Logo"
          src="https://ipfs.yellowiki.xyz/ipfs/QmPNU4954i9PkEy2PkBnRCdXzwQ2zrqjoEDGzmCAWuGdY8/lhd.png"
        />
      </div>

      <p>
        Local hackathon where you build software and showcase it in one day.
      </p>
      <p>
        <b>Location:</b> University Of Maryland
      </p>
      <p>
        <b>Date:</b> December 2019
      </p>
      <p>
        <b>Expenses:</b> Hackers must provide their own transportation to/from
      </p>
      <p>
        <b>Prizes:</b>
      </p>
      <p> - Not released yet</p>

    </Container>
  </Layout>
)
