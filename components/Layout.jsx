import Head from 'next/head'

export default ({ children }) => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <meta name="Main page" content="MRHS Programming Club" />
      <link
        href="https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap"
        rel="stylesheet"
      />
      <link href="/static/styles.css" rel="stylesheet" />
      <title>MRHS Programming Club</title>
    </Head>

    <div>{children}</div>
  </div>
)
