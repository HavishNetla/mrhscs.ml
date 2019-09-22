import Link from 'next/link'
import Scroll from './Scroll'

export default () => (
  <div
    style={{
      background: 'black',
      paddingTop: '2em',
      zIndex: '1',
      boxShadow: 'black 0px 3px 20px 1px',
    }}
  >
    <Link href="/">[Home]</Link> <Link href="/files">[Files]</Link>{' '}
    <Link href="/competitions">[Competitions]</Link>
    <Scroll minScroll={50}>
      <div
        style={{
          background: 'linear-gradient(to right, black, lime 10% 90%, black)',
          transition: '300ms',
          width: '100vw',
          height: '1px',
          marginTop: '1em',
        }}
      />
    </Scroll>
  </div>
)
